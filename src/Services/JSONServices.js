export default class JSONServices {
    static async getData() {
        try {
            const response = await fetch('http://itgirlschool.justmakeit.ru/api/words');

            if (response.ok) {
                const data = response.json();
                return data;
            } else {
                throw new Error('Данные из сервера не пришли');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    static async addData(data) {
        try {
            await fetch('/api/words/add', {
                method: 'POST',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(data),
            })
        } catch (e) {
            console.log(e);
        }
    }

    static async changeData(obj, id) {

        try {
            await fetch(`api/words/${id}/update`, {
                method: 'POST',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(obj),
            });
        } catch (error) {
            console.log(error);
        }
    }

    static async deleteData(id) {

        try {
            await fetch(`/api/words/${id}/delete`, {
                method: 'POST',
                headers: { "Content-type": "application/json" },

            });
        } catch (e) {
            console.log(e);
        }
    }
}