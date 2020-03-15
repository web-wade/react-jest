export default {
    get(url) {
        if (url === "/undoList.json") {
            return new Promise((res, rej) => {
                if (this.success) {
                    res({
                        data: [
                            {
                                status: "div",
                                value: "wade"
                            }
                        ],
                        success: true
                    });
                }
                rej(new Error());
            });
        }
    }
};
