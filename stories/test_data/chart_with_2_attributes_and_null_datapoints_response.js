// (C) 2020 GoodData Corporation
module.exports = projectId => {
    return {
        executionResponse: {
            dimensions: [
                {
                    headers: [
                        {
                            measureGroupHeader: {
                                items: [
                                    {
                                        measureHeaderItem: {
                                            name: "Amount",
                                            format: "$#,##0.00",
                                            localIdentifier: "ah1EuQxwaCqs",
                                            uri: "/gdc/md/" + projectId + "/obj/1279",
                                            identifier: "ah1EuQxwaCqs",
                                        },
                                    },
                                ],
                            },
                        },
                    ],
                },
                {
                    headers: [
                        {
                            attributeHeader: {
                                name: "Product Name",
                                localIdentifier: "va_13",
                                uri: "/gdc/md/" + projectId + "/obj/952",
                                identifier: "label.product.id.name",
                                formOf: {
                                    name: "Product",
                                    uri: "/gdc/md/" + projectId + "/obj/949",
                                    identifier: "attr.product.id",
                                },
                            },
                        },
                        {
                            attributeHeader: {
                                name: "Stage Name",
                                localIdentifier: "va_17",
                                uri: "/gdc/md/" + projectId + "/obj/1805",
                                identifier: "label.stage.name.stagename",
                                formOf: {
                                    name: "Stage Name",
                                    uri: "/gdc/md/" + projectId + "/obj/1095",
                                    identifier: "attr.stage.name",
                                },
                            },
                        },
                    ],
                },
            ],
            links: {
                executionResult:
                    "/gdc/app/projects/jroecoqa7jywstxy1hxp8lwl2c4nc10t/executionResults/6474151993277152256?q=eAGlkk9PAjEQxb%2FKpnjcsLsExCUxhoMaLsaonMgeSjvgknZn7Z%2FAhux3dwqIwg25NO20fX2v89sy%0AAzUa98I1sBGbVq50CiSLmUDldWXZaLZl3DlTzr2Dj7BL514NSi8cHbNea24aqtFClrZWvHlCoyeS%0ASslSikTLZGUQBH7x4apZW7dpss9NfafWqif6lchSl%2BB8leSDHknMuYVHBRoqN32bXKzRzxPY37YP%0ApbwnwV2gE8vHNP%2Fw2M%2BDJDquws%2FMiqKNt9fFzu7SwdW5szQfnAe%2FImaQI0%2BWwGAjyrcIozflpe2g%0AbLesbc8oORr7oend8SVEOwR%2F%2B3Va%2FPvjRcw0EJBiD%2BeCaOPkk9104k4n7aZpsH7EchzRPMJFxJWK%0AJFDj4sjAkhupwNqwYXfPowkT5203dPjA%2BVijrwLm%2BwcvBybrDXPWkmOD62D3IPRs0NesaL8B9Ygw%0AkA%3D%3D%0A&c=2b749890ecda1f8f3238e986686c2632&offset=0%2C0&limit=1000%2C1000&dimensions=2&totals=0%2C0",
            },
        },
    };
};
