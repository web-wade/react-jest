export default {
    get(url) {
        if (url === "/undoList.json") {
            return new Promise((res, rej) => {
                res({
                    data: [
                        {
                            status: "div",
                            value: "wade"
                        }
                    ],
                    success: true
                });
            });
        }
    }
};
