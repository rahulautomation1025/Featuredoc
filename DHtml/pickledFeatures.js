jsonPWrapper ({
  "Features": [
    {
      "RelativeFolder": "ArticlePage\\AltTextValidation.feature",
      "Feature": {
        "Name": "AltTextValidation",
        "Description": "I would like to see Alt text being generated for\r\nall the images that are shown as part of the various C modules",
        "FeatureElements": [
          {
            "Name": "Alt Text Validation",
            "Slug": "alt-text-validation",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"alt text\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see alt text for article image not loading",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "also i can see alt text for profiles",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "ArticlePage\\ArticlePrint.feature",
      "Feature": {
        "Name": "Article Print",
        "Description": "In order to print an article\r\nAs a user \r\nI want to see a printer-friendly article that does not include top navigation and sidebar elements ",
        "FeatureElements": [
          {
            "Name": "Print an article",
            "Slug": "print-an-article",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the article page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on the print button",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the article should print without top navigation and sidebar elements on the page",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "ArticlePage\\ShareArticleRegisteredUser.feature",
      "Feature": {
        "Name": "Article Sharing",
        "Description": "As a consumer of McKinsey I want to share the article with someone via email and check if the url shortening functionality works as expected or not.",
        "FeatureElements": [
          {
            "Name": "Share Article via email",
            "Slug": "share-article-via-email",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"redesign article\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see email this article icon with href as mailto",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "on clicking social sharing icons bittly url is seen",
                "StepComments": [],
                "AfterLastStepComments": [
                  {
                    "Text": "#\tScenario Outline: Bitly sharing on linkedin"
                  },
                  {
                    "Text": "#\tGiven I am on the \"redesign article\" page"
                  },
                  {
                    "Text": "#\tAnd on clicking linkedin icon bittly url is seen <email> <password>"
                  },
                  {
                    "Text": "#"
                  },
                  {
                    "Text": "#\tExamples:"
                  },
                  {
                    "Text": "#| email         | password |"
                  },
                  {
                    "Text": "#| specflowtesting@gmail.com | Testing@12  |"
                  }
                ]
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "Bitly sharing on facebook",
            "Slug": "bitly-sharing-on-facebook",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"redesign article\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "on clicking facebook icon bittly url is seen",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "ArticlePage\\ArticleSourcePublication.feature",
      "Feature": {
        "Name": "Article Source Publication",
        "Description": "In order to learn more about an article \r\nAs a user\r\nI want to see the source publication of an article",
        "FeatureElements": [
          {
            "Name": "View the source publication of an article in the article meta data",
            "Slug": "view-the-source-publication-of-an-article-in-the-article-meta-data",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"article with practice\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I should see the article source publication in the hero",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "View the source publication of an article listed under Most Popular Articles",
            "Slug": "view-the-source-publication-of-an-article-listed-under-most-popular-articles",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"redesign article\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I view the articles listed under the Most Popular section",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I should see the article source publication under Most Popular section",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "View the source publication of an article listed under Related Articles",
            "Slug": "view-the-source-publication-of-an-article-listed-under-related-articles",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"redesign article\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I should see the article source publication under Related Articles section",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "ArticlePage\\ArticleDownload.feature",
      "Feature": {
        "Name": "ArticleDownload",
        "Description": "",
        "FeatureElements": [
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "email",
                    "password"
                  ],
                  "DataRows": [
                    [
                      "specflowtesting@gmail.com",
                      "Testing@123",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": true
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "Article Download",
            "Slug": "article-download",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"home\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I signin to the application <email> <password>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "When I directly open Article page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click on the download icon",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "ArticlePage\\AuthorsLabel.feature",
      "Feature": {
        "Name": "AuthorsLabel",
        "Description": "On the article template, Validate that \"About the Authors\" text is updated to \"About the author(s)\"",
        "FeatureElements": [
          {
            "Name": "AuthorsLabel",
            "Slug": "authorslabel",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"redesign article\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "the page has text \"About the author(s)\"",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "ArticlePage\\AppendixDownload.feature",
      "Feature": {
        "Name": "Download options for a article",
        "Description": "Validate MGI needs to be able to show more than just executive summary & full report as download buttons. \r\nThey would like to provide downloadable Appendix as well.",
        "FeatureElements": [
          {
            "Name": "AppendixDownload",
            "Slug": "appendixdownload",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"redesign article\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see pdf icon for appendix pdf",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "on clicking the icon pdf gets downloaded",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "JapaneseLabelsForDownloadButtons",
            "Slug": "japaneselabelsfordownloadbuttons",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"japanese download button\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see three pdf icons with japanese lables",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "on clicking the icon pdf gets downloaded",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "ArticlePage\\FlexiInArticle.feature",
      "Feature": {
        "Name": "FlexiInArticle",
        "Description": "I want to validate that flexi module is available on flexi module article along with\r\nother components like most popular articles.",
        "FeatureElements": [
          {
            "Name": "FlexiInArticle",
            "Slug": "flexiinarticle",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"flexi in article\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see Flexi Module section and it's components",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "ArticlePage\\FormOnArticle.feature",
      "Feature": {
        "Name": "FormOnArticle",
        "Description": "I want to just validate that Contact Form on Article works fine.",
        "FeatureElements": [
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "name",
                    "email",
                    "CompanyOrSchool",
                    "Subject",
                    "Message"
                  ],
                  "DataRows": [
                    [
                      "TestDemo",
                      "specflowtesting@gmail.com",
                      "Abc",
                      "Regarding",
                      "hello",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": true
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "FormOnArticle",
            "Slug": "formonarticle",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"Form on Article\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I select type of enquiry and enter name <name>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "other details <email> <CompanyOrSchool> <Subject> <Message>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I press form submit button",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "Thank you message is shown",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "ArticlePage\\JapaneseTruncation.feature",
      "Feature": {
        "Name": "JapaneseTruncation",
        "Description": "\tVerify that after finding the 80th character of the description text \r\n\tthe truncation logic should be applied. Truncated descriptions should \r\n\tend with one of the following characters:\r\n    。(period)\r\n    、 (comma)\r\n    ・ (dot) ",
        "FeatureElements": [
          {
            "Name": "JapaneseTruncation",
            "Slug": "japanesetruncation",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"japanese 3 up module\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see module three-up-circle-outer",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I can see description getting truncated for profiles",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "ArticlePage\\MetaTagValidationOnArticle.feature",
      "Feature": {
        "Name": "MetaTagValidationOnArticle",
        "Description": "As a Developer I would like to add automation tests to verify the Meta tags on various pages \r\nso that I can know when they are impacted due to any change.",
        "FeatureElements": [
          {
            "Name": "MetaTagValidationOnArticle",
            "Slug": "metatagvalidationonarticle",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"redesign article\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I am able to assert all expected meta tags on article page",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "ArticlePage\\PrintAnArticle.feature",
      "Feature": {
        "Name": "PrintAnArticle",
        "Description": "As a user I want to visit the article page\r\nAnd click on print icon and check if the article is available only for registered users.",
        "FeatureElements": [
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "email",
                    "password"
                  ],
                  "DataRows": [
                    [
                      "specflowtesting@gmail.com",
                      "Testing@123",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": true
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "PrintAnArticle",
            "Slug": "printanarticle",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"article behind the reg wall\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "the page has a print icon",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on the print icon",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "It asks me to SignIn <email> <password>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "then on successful signIn I am taken to print page",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "email",
                    "name",
                    "password"
                  ],
                  "DataRows": [
                    [
                      "specflowtesting@gmail.com",
                      "Test Automation",
                      "Testing@123",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": true
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "Invalid Credentials On Print An Article Popup",
            "Slug": "invalid-credentials-on-print-an-article-popup",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"article behind the reg wall\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "the page has a print icon",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on the print icon",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "Then on Entering invalid password error message appears <email>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "then on signing in with valid password I am taken to print page <name> <password>",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "ArticlePage\\ServeArticlePage.feature",
      "Feature": {
        "Name": "ServeArticlePage",
        "Description": "In order to begin learning about McKinsey\r\nAs a user\r\nI want to visit the article\r\nAnd click on the tout",
        "FeatureElements": [
          {
            "Name": "Visit the article page and click on the tout",
            "Slug": "visit-the-article-page-and-click-on-the-tout",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"article with tout\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the page should have a tout text",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "the tout text should contain \"PLEASE READ MORE FROM\"",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "ArticlePage\\SignUpPromo.feature",
      "Feature": {
        "Name": "SignUpPromo",
        "Description": "As a business user I want to have ability to show newsletter Disruptor SignUp Promo on Article pages.\r\nDisruptor SignUp Promo should not be shown to the user, if the user is already registered i.e. already logged in with his user id",
        "FeatureElements": [
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "email",
                    "password"
                  ],
                  "DataRows": [
                    [
                      "specflowtesting@gmail.com",
                      "Testing@123",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": true
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "SignUp Promo not displayed when logged in",
            "Slug": "signup-promo-not-displayed-when-logged-in",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"sign up promo\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "When I log in <email> <password>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I am redirected to article page with no sign up promo",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "SignUp Promo displayed when not logged in",
            "Slug": "signup-promo-displayed-when-not-logged-in",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"sign up promo\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I am not logged in",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I am redirected to article page with sign up promo",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "ArticlePage\\StickyNavigation.feature",
      "Feature": {
        "Name": "StickyNavigation",
        "Description": "As a business user I want to have sticky navigation on Article page.",
        "FeatureElements": [
          {
            "Name": "Visible Sticky Navigation",
            "Slug": "visible-sticky-navigation",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"flexi in article\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "when i scroll over social sharing options",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I am able to see sticky nav",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "Unvisible Sticky Navigation",
            "Slug": "unvisible-sticky-navigation",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"flexi in article\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "when i scroll just above social sharing options",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I am not able to see sticky nav",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "Hidden Sticky Navigation from Sitecore",
            "Slug": "hidden-sticky-navigation-from-sitecore",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"redesign article\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "when i scroll over social sharing options",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I am not able to see sticky nav anywhere",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "ArticlePage\\ArticleVideoDescription.feature",
      "Feature": {
        "Name": "Video Pages",
        "Description": "",
        "FeatureElements": [
          {
            "Name": "CTA for video collection on video page",
            "Slug": "cta-for-video-collection-on-video-page",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"shared video page\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see the CTA link for video collection page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "on clicking to navigates to collection page",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "CTA for article on executive briefing page",
            "Slug": "cta-for-article-on-executive-briefing-page",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"shared executive briefing page\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see the CTA link which takes me back to base page",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "Blog\\AuthorListing.feature",
      "Feature": {
        "Name": "Listing Page",
        "Description": "\tI would like to validate listing pages for different themes :\r\n          -Browse by section\r\n          -model window\r\n          -Author listing page components : breadcrumb , headline , Role, \r\n\t\t   Location , description , Card based theme blogs.\r\n\t\t  -Browse by section\r\n          -topic listing page components : breadcrumb , headline , description , Card based theme blogs.",
        "FeatureElements": [
          {
            "Name": "CardBasedAuthorlisting",
            "Slug": "cardbasedauthorlisting",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"card based landing\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see browse by options",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I press author",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "a model window comes up listing down all authors",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "on clicking on a particular author I navigate to author listing page",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "CardBasedTopiclisting",
            "Slug": "cardbasedtopiclisting",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"card based landing\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see browse by options",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I press topic",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "a model window comes up listing down all topics",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "on clicking on a particular topic I navigate to topic listing page",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "StandardAuthorlisting",
            "Slug": "standardauthorlisting",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"standard landing\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see browse by authors section",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I press any author",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I navigate to author listing page",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "StandardTopiclisting",
            "Slug": "standardtopiclisting",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"standard landing\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see browse by topics section",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I press any topic",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I navigate to topic listing page",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "StandardListingByDate",
            "Slug": "standardlistingbydate",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"standard landing\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see browse by date section",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on any month",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I navigate to date listing page",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "ArticleBasedAuthorlisting",
            "Slug": "articlebasedauthorlisting",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"article landing\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see browse by options",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I press author",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "a model window comes up listing down all authors",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "on clicking on a particular author I navigate to article based author listing page",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "ArticleBasedTopiclisting",
            "Slug": "articlebasedtopiclisting",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"article landing\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see browse by options",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I press topic",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "a model window comes up listing down all topics",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "on clicking on a particular topic I navigate to article based topic listing page",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "ArticleBasedListingByDate",
            "Slug": "articlebasedlistingbydate",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"article landing\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see browse by options",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I press date",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "a model window comes up listing down all months",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "on clicking on a particular month I navigate to that listing page",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "Collection\\EmailThisCollection.feature",
      "Feature": {
        "Name": "Collection",
        "Description": "When user clicks email icon under share on Article collection page , user is navigated to mailbox.",
        "FeatureElements": [
          {
            "Name": "Email this Collection",
            "Slug": "email-this-collection",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"Collection\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see Share icon with social sharing options",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "an href as mailto is available for email icon",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "bitly url is seen for twitter sharing",
                "StepComments": [],
                "AfterLastStepComments": [
                  {
                    "Text": "#Scenario Outline: Bitly sharing on linkedin for collection"
                  },
                  {
                    "Text": "#Given I am on the \"Collection\" page"
                  },
                  {
                    "Text": "#And on clicking linkedin icon bittly url is shown <email> <password>"
                  },
                  {
                    "Text": "#Examples:"
                  },
                  {
                    "Text": "#| email         | password |"
                  },
                  {
                    "Text": "#| specflowtesting@gmail.com | Testing@12  |"
                  },
                  {
                    "Text": "#Scenario: Bitly sharing on facebook for collection"
                  },
                  {
                    "Text": "#Given I am on the \"Collection\" page"
                  },
                  {
                    "Text": "#And on clicking facebook icon bittly url is shown"
                  }
                ]
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "Collection\\DownloadCollection.feature",
      "Feature": {
        "Name": "DownloadCollection",
        "Description": "As a user, I need to have a PDF download link/option to download full issue, \r\njust below the Hero Image on universal page behind the regwall.",
        "FeatureElements": [
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "email",
                    "password"
                  ],
                  "DataRows": [
                    [
                      "specflowtesting@gmail.com",
                      "Testing@123",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": true
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "DownloadCollection",
            "Slug": "downloadcollection",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"Collection\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see Download the full issue and breadcrumb icon",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I press Download icon",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the signin popup opens as collection is behind reg wall <email> <password>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "on successful signon pdf gets downloaded",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "ContactUs\\ContactUs.feature",
      "Feature": {
        "Name": "ContactUs",
        "Description": "As a user I want to access the contact-us form to ask a question or report a technical problem.",
        "FeatureElements": [
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "name",
                    "email",
                    "CompanyOrSchool",
                    "Subject",
                    "Message"
                  ],
                  "DataRows": [
                    [
                      "TestDemo",
                      "specflowtesting",
                      "Just Testing",
                      "Regarding abc",
                      "Help required",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": true
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "Contact Us Page",
            "Slug": "contact-us-page",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"ContactUs\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I select type of enquiry and enter my name <name>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I enter my email <email>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I enter my Company Or School <CompanyOrSchool>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "i enter Subject <Subject>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I enter Message <Message>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I press submit",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "a Thank you message is shown",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "CreateProfile\\EmailValidation.feature",
      "Feature": {
        "Name": "Email Validation Scenarios",
        "Description": "I want to check that email validations are working as expected.",
        "FeatureElements": [
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "emails"
                  ],
                  "DataRows": [
                    [
                      "plainaddress",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": true
                      }
                    ],
                    [
                      "f>l@domian.com",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": true
                      }
                    ],
                    [
                      "#@%^%#$@#$@#.com",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": true
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "IncorrectEmailValidation",
            "Slug": "incorrectemailvalidation",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"SignIn\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I enter few invalid <emails>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "error message is shown",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "emails"
                  ],
                  "DataRows": [
                    [
                      "fname_lname@gmail.com",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": true
                      }
                    ],
                    [
                      "O'Donnelllinda@testdomain.com",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "CorrectEmailValidations",
            "Slug": "correctemailvalidations",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"SignIn\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I enter few valid <emails>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "No error message is shown",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "CreateProfile\\PasswordLengthValidation.feature",
      "Feature": {
        "Name": "PasswordLengthValidation",
        "Description": "As a User, I want to check that password validations are working as expected by increasing the Password length",
        "FeatureElements": [
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "password"
                  ],
                  "DataRows": [
                    [
                      "4343434334343434343434344",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": true
                      }
                    ],
                    [
                      "Testing@1212122121212212121212121212121212121",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": true
                      }
                    ],
                    [
                      "%^%^%%^%^%^%^%^^%^$$%#$#$#$#$#%$^&**&*&*&*%^%^",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": true
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "IncorrectPasswordValidation",
            "Slug": "incorrectpasswordvalidation",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"SignIn\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "enter invalid length <password>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "password error message is showing",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "CreateProfile\\UserRegistration.feature",
      "Feature": {
        "Name": "UserRegistrationfeature",
        "Description": "While trying to sign-up for an account I want to check if the validations for all the fields are working as expected",
        "FeatureElements": [
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "firstName",
                    "lastName",
                    "email",
                    "password",
                    "confirmPassword"
                  ],
                  "DataRows": [
                    [
                      "Test",
                      "Automation",
                      "test",
                      "Testing@123",
                      "Testing@123",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": true
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "Register a new User",
            "Slug": "register-a-new-user",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"SignIn\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the user registration page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I enter firstName <firstName>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I enter lastName <lastName>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I enter email <email>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I enter password <password>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I enter confirmPassword <confirmPassword>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "fill the other details",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "Digital\\CerosModuleValidation.feature",
      "Feature": {
        "Name": "Ceros Module Validation",
        "Description": "To verify the ceros module on digital page so that I can know when they are \r\nimpacted due to any change.",
        "FeatureElements": [
          {
            "Name": "CerosModuleValidationOnDigital",
            "Slug": "cerosmodulevalidationondigital",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"digital ceros module\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see all the module attributes working as expected",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can also validate that module loads fully",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "CerosModuleValidationOnArticle",
            "Slug": "cerosmodulevalidationonarticle",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"article ceros module\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see most popular related articles and exhibit section",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can also validate that module loads fully on article page",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "CerosModuleValidationOnFullBleedArticle",
            "Slug": "cerosmodulevalidationonfullbleedarticle",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"article ceros full bleed\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can not see article hero most popular and related articles",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can also validate that ceros loads fully on article page",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "CerosModuleValidationOnFullWidthArticle",
            "Slug": "cerosmodulevalidationonfullwidtharticle",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"article ceros full width\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can not see article hero most popular and related articles",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can also validate that full page ceros loads on article",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "Digital\\MetaTagValidationOnDigitalPages.feature",
      "Feature": {
        "Name": "MetaTagValidationOnDigitalPages",
        "Description": "As a Developer I would like to verify the Meta tags on all digital pages \r\nso that I can know when they are impacted due to any change.",
        "FeatureElements": [
          {
            "Name": "MetaTagValidationOnDigitalPages",
            "Slug": "metatagvalidationondigitalpages",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"digital page\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I am able to assert all expected meta tags on digital page",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "Digital\\SubNavigationV2.feature",
      "Feature": {
        "Name": "SubNavigationV2",
        "Description": "As a user I want to validate that I have a similar experience of exposed navigation on \r\npractices sites (e.g. Digital) as we have on Careers",
        "FeatureElements": [
          {
            "Name": "SubNavigationV2",
            "Slug": "subnavigationv2",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"mckinsey digital\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see sub navigation v2 section",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "ForgotPassword\\ForgotPwd.feature",
      "Feature": {
        "Name": "ForgotPwd",
        "Description": "I have forgotten my SignIn password and want to click on forgot password link",
        "FeatureElements": [
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "email",
                    "password"
                  ],
                  "DataRows": [
                    [
                      "specflowtesting@gmail.com",
                      "wrongpwd",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": true
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "Forgot Password functionality",
            "Slug": "forgot-password-functionality",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"SignIn\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I try to SignIn<email> <password>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on Forgot Password",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "email is prepopulated on reset password screen<email>",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "GlobalNavigationFooter\\CareersGlobalFooter.feature",
      "Feature": {
        "Name": "GlobalFooter",
        "Description": "I want to verify that global footer section is in sync with other mck home page",
        "FeatureElements": [
          {
            "Name": "CareersGlobalFooter",
            "Slug": "careersglobalfooter",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"careers home\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see Sign up for email alerts section",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "also other necessary social sharing icons",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "also other necessary utility links",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "verify that social icons are redirecting to desired pages",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "GlobalNavigationFooter\\SignUpForEmailAlertsForSignedInUser.feature",
      "Feature": {
        "Name": "SignUpForEmailAlertsForSignedInUser",
        "Description": "As a already signedIn User I am taken from SignUp for email alerts to EDIT subscription page.",
        "FeatureElements": [
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "email",
                    "password"
                  ],
                  "DataRows": [
                    [
                      "specflowtesting@gmail.com",
                      "Testing@123",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": true
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "SignUp For Email Alerts with a SignedIn User",
            "Slug": "signup-for-email-alerts-with-a-signedin-user",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"SignIn\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I am navigated to homepage after successful SignIn <email> <password>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see the Sign Up for Email Alerts section",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I enter my email address and click on Submit <email>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I am taken to edit subscription page",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "GlobalNavigationFooter\\SignUpForEmailAlertsRegisteredEmail.feature",
      "Feature": {
        "Name": "SignUpForEmailAlertsRegisteredEmail",
        "Description": "As a registered user but not signedin ,I am taken from SignUp for email alerts to \r\nCreate profile page with email being pre-filled which I just entered. ",
        "FeatureElements": [
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "email"
                  ],
                  "DataRows": [
                    [
                      "specflowtesting@gmail.com",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": true
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "SignUp For Email Alerts with a RegisteredEmail address",
            "Slug": "signup-for-email-alerts-with-a-registeredemail-address",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"home\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see the Sign Up for Email Alerts section",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I enter a registered email address and click on Submit <email>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "Iam navigated to Create Profile page with email address as prepopulated <email>",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "GlobalNavigationFooter\\SignUpForEmailAlertsUnRegisteredEmail.feature",
      "Feature": {
        "Name": "SignUpForEmailAlertsUnRegisteredEmail",
        "Description": "As a first time user I am taken from SignUp for email alerts to Create a profile \r\npage with email being pre-filled what I just entered. ",
        "FeatureElements": [
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "email"
                  ],
                  "DataRows": [
                    [
                      "unregistered@gmail.com",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": true
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "SignUp For Email Alerts with a UnRegisteredEmail address",
            "Slug": "signup-for-email-alerts-with-a-unregisteredemail-address",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"home\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see the Sign Up for Email Alerts section",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I enter a unregistered email address and click on Submit <email>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "Iam navigated to Create Profile page with email address as prepopulated <email>",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "GlobalNavigationHeader\\EditMyProfile.feature",
      "Feature": {
        "Name": "EditProfile",
        "Description": "As a visitor to McKinsey.com, I want to update my personal acocunt information and preferences so that my \r\ninformation is up-to-date.",
        "FeatureElements": [
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "email",
                    "password",
                    "FirstName",
                    "LastName",
                    "EditprofilePassword",
                    "confirmpassword"
                  ],
                  "DataRows": [
                    [
                      "specflowtesting@gmail.com",
                      "Testing@123",
                      "Test",
                      "Automation",
                      "Testing@123",
                      "Testing@123",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": true
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "EditProfile",
            "Slug": "editprofile",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"SignIn\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I have signedin to mckinsey.com <email> <password>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I when i click on Edit Profile",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I am taken to Edit Profile page <FirstName> <LastName> <email> <EditprofilePassword> <confirmpassword>",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "GlobalNavigationHeader\\EditSubscriptions.feature",
      "Feature": {
        "Name": "EditSubscriptions",
        "Description": "As a visitor to McKinsey.com, I want to update my personal acocunt information and preferences so that my \r\ninformation is up-to-date.",
        "FeatureElements": [
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "email",
                    "password"
                  ],
                  "DataRows": [
                    [
                      "specflowtesting@gmail.com",
                      "Testing@123",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": true
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "EditSubscriptions",
            "Slug": "editsubscriptions",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"SignIn\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I am SignedIn to mckinsey.com <email> <password>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I when i click on Edit Subscriptions",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I am taken to Edit Subscription page",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "GlobalNavigationHeader\\LoggedInState.feature",
      "Feature": {
        "Name": "LoggedIn State",
        "Description": "As a user I want to Sign In and see my name on home page as a logged in user.",
        "FeatureElements": [
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "email",
                    "password",
                    "name"
                  ],
                  "DataRows": [
                    [
                      "specflowtesting@gmail.com",
                      "Testing@123",
                      "Test Automation",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": true
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "LoggedInState",
            "Slug": "loggedinstate",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"SignIn\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I enter email <email>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "password <password>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "On clicking SignIn button I navigate to Homepage \"McKinsey & Company | Global management consulting\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the logged in user's name is shown on right top with a dropdown \"Test Automation\"",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "GlobalNavigationHeader\\LogOut.feature",
      "Feature": {
        "Name": "LogOut",
        "Description": "As loggedIn user to mckinsey.com , i want to logout of the website.",
        "FeatureElements": [
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "email",
                    "password"
                  ],
                  "DataRows": [
                    [
                      "specflowtesting@gmail.com",
                      "Testing@123",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": true
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "LogOut",
            "Slug": "logout",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"SignIn\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I have signedin to mckinsey.com <email> <password>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I press Logout",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I am logged out of the website",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "HamburgerNav\\AboutUsNavListFeature.feature",
      "Feature": {
        "Name": "AboutUsNavList",
        "Description": "I want to validate that nav list options under About Us are accurate",
        "FeatureElements": [
          {
            "Name": "AboutUsNavList",
            "Slug": "aboutusnavlist",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"home\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see hamburger icon",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I press hamburger icon",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I am able to see nav list options under About Us",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "HamburgerNav\\BusinessFunctionsNavList.feature",
      "Feature": {
        "Name": "BusinessFunctionsNavList",
        "Description": "I want to validate that nav list options under Business Functions are accurate",
        "FeatureElements": [
          {
            "Name": "BusinessFunctionsNavList",
            "Slug": "businessfunctionsnavlist",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"home\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see hamburger icon",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I press hamburger icon",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I am able to see nav list options under Business Functions",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "HamburgerNav\\CareersNavList.feature",
      "Feature": {
        "Name": "CareersNavList",
        "Description": "I want to validate that nav list options under Careers are accurate",
        "FeatureElements": [
          {
            "Name": "CareersNavList",
            "Slug": "careersnavlist",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"home\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see hamburger icon",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I press hamburger icon",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I am able to see nav list options under Careers",
                "StepComments": [],
                "AfterLastStepComments": [
                  {
                    "Text": "#And hamburger is scalable enough to more deeper levels"
                  }
                ]
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": false
            }
          },
          {
            "Name": "LocationsCareersNode",
            "Slug": "locationscareersnode",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"location middle east\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see hamburger icon",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I press hamburger icon",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I am able to see current option highlighted in hamburger",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "on traversing back in hambuger i can see a global career and location node",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "HamburgerNav\\GlobalThemesNavList.feature",
      "Feature": {
        "Name": "GlobalThemes",
        "Description": "I want to validate that nav list options under Global Themes are accurate",
        "FeatureElements": [
          {
            "Name": "GlobalThemesNavList",
            "Slug": "globalthemesnavlist",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"home\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see hamburger icon",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I press hamburger icon",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I am able to see nav list options under Global Themes",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "HamburgerNav\\Hamburgernavigations.feature",
      "Feature": {
        "Name": "Hamburgernavigations",
        "Description": "In order to avoid silly mistakes\r\nAs a math idiot\r\nI want to be told the sum of two numbers",
        "FeatureElements": [
          {
            "Name": "Hamburgernavigations",
            "Slug": "hamburgernavigations",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"home\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see hamburger icon",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I press hamburger icon",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I am able to see mck logo and nav list options",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": false
            }
          },
          {
            "Name": "BrazilHamburgerNavigations",
            "Slug": "brazilhamburgernavigations",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the brazil page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "by default site loads in portuguese",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I press hamburger icon",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I can see navlist options for brazil",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "on navigating back in hamburger i can see a brasil option",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "i can navigate to practise pages poiting to uat domain",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "HamburgerNav\\IndustriesNavList.feature",
      "Feature": {
        "Name": "IndustriesNavList",
        "Description": "In order to avoid silly mistakes\r\nAs a math idiot\r\nI want to be told the sum of two numbers",
        "FeatureElements": [
          {
            "Name": "IndustriesNavList",
            "Slug": "industriesnavlist",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"home\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see hamburger icon",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I press hamburger icon",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I am able to see nav list options under Industries",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "Homepage\\CookiesNotification.feature",
      "Feature": {
        "Name": "CookiesNotification",
        "Description": "As a site user, I want :\r\n\r\n1) to be notified that mckinsey.com uses cookies\r\n2) to easily access the cookie policy for review\r\n3) to be able to consent to the use of cookies by clicking a link/button\r\n4) to not see the message again after consenting or clicking to the Cookie Policy page",
        "FeatureElements": [
          {
            "Name": "CookieHomePage",
            "Slug": "cookiehomepage",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"home\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I am notified that website uses cookies",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "on clicking the link it takes me to cookie policy page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "on navigating anywhere else on the webiste i cannot see the cookie notification",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "CookieArticlePage",
            "Slug": "cookiearticlepage",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"redesign article\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I am notified that website uses cookies",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "on clicking the link it takes me to cookie policy page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "on navigating anywhere else on the webiste i cannot see the cookie notification",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "CookieBannerOkButtonFunctionality",
            "Slug": "cookiebannerokbuttonfunctionality",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"SignIn\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I am notified that website uses cookies",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "on clicking the ok button the banner disappears",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "on navigating anywhere else on the webiste i cannot see the cookie notification",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "RefreshingCookiePage",
            "Slug": "refreshingcookiepage",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"careers home\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I am notified that website uses cookies",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "on refreshing the url I can still see the cookie banner",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "Homepage\\FeaturedInsightThumbnail.feature",
      "Feature": {
        "Name": "FeaturedInsightThumbnail",
        "Description": "I want to verify that on the home page, the image thumbnail under \"FEATURED INSIGHTS\" should \r\nbe clickable and point to the same URL as the title.",
        "FeatureElements": [
          {
            "Name": "FeaturedInsightThumbnail",
            "Slug": "featuredinsightthumbnail",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"home\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see Featured Insight section",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on Thumbnail image",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I am redirected to same URL as the title",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "Homepage\\PrimaryNavigation.feature",
      "Feature": {
        "Name": "PrimaryNavigation",
        "Description": "",
        "FeatureElements": [
          {
            "Name": "PrimaryNavigation",
            "Slug": "primarynavigation",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"home\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see primary navigation",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I am able to see nav list options",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "HrefLangValidation",
            "Slug": "hreflangvalidation",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"redesign home\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see href lang for languages",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "Homepage\\ServeHomepage.feature",
      "Feature": {
        "Name": "ServeHomepage",
        "Description": "In order to begin learning about McKinsey\r\nAs a user\r\nI want to visit the homepage",
        "FeatureElements": [
          {
            "Name": "Visit the homepage",
            "Slug": "visit-the-homepage",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"home\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the page should have a title",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "the title should be \"McKinsey & Company | Global management consulting\"",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "Locations\\LocationLandingPage.feature",
      "Feature": {
        "Name": "LocationLandingPage",
        "Description": "As a site visitor, I should be able to see a list of McKinsey office locations, \r\nso that I can easily find information about the location that I am looking for.",
        "FeatureElements": [
          {
            "Name": "Locations Page",
            "Slug": "locations-page",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"home\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "when I click on locations",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I am redirected to locations landing page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "there I can see the page title, header and continents",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "Validate Countries under one Continent",
            "Slug": "validate-countries-under-one-continent",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"locations\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "when I click on continent Asia-Pacific",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I am able to see countries in that continent",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "Validate Cities under one Country",
            "Slug": "validate-cities-under-one-country",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"locations\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "when I click on continent Asia-Pacific",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I click on any country",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I am able to see citiy names",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "Validate City Adresses under one Country",
            "Slug": "validate-city-adresses-under-one-country",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"locations\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "when I click on continent Asia-Pacific",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I click on any country",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I am able to see city address",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "Validate american regions",
            "Slug": "validate-american-regions",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"locations\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "when I click on continent North America",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I click on United States",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I am able to see different region names",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "Validate american cities under regions",
            "Slug": "validate-american-cities-under-regions",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"locations\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "when I click on continent North America",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I click on United States",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I am able to see different cities under regions",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "Validate Map functionality for a city",
            "Slug": "validate-map-functionality-for-a-city",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"locations\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "when I click on continent Asia-Pacific",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I click on any country",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I am able to see Map link for that city",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "Validate Countries under different continents",
            "Slug": "validate-countries-under-different-continents",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"locations\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see countries under continent Africa",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see countries under continent Central & South America",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see countries under continent Europe & Middle East",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see countries under continent North America",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "Meo\\RtlStylesheetValidation.feature",
      "Feature": {
        "Name": "StylesheetValidation",
        "Description": "As a QA engineer, I would like to write automated test case to validate if \r\nMEO arabic pages load RTL stylesheets and HTML tags related to RTL correctly",
        "FeatureElements": [
          {
            "Name": "Validate ltr Stylesheets",
            "Slug": "validate-ltr-stylesheets",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"middle east\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see ltr stylesheet loaded",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Validate rtl Stylesheets",
            "Slug": "validate-rtl-stylesheets",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"middle east arabic\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see rtl stylesheet loaded",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "PressRelease\\PressRelease.feature",
      "Feature": {
        "Name": "PressRelease",
        "Description": "Validate Press Release with Right Rail Contact & download Section along with a Promo Bar just above the footer.\r\nValidate Press Release with Right Rail Contact & download Section without promo bar above the footer.\r\nValidate Sample Press Release with No Right Rail & No Promo Bar",
        "FeatureElements": [
          {
            "Name": "PressReleaseWithPromoBar",
            "Slug": "pressreleasewithpromobar",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"press release with promo bar\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "i can see the right rail and download section",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "i can also see related content section",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "i can also see the prmo bar above the footer",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "JapanesePressReleaseWithPromoBar",
            "Slug": "japanesepressreleasewithpromobar",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"japanese press release with promo bar\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "i can see the right rail and download section",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "i can also see the prmo bar above the footer",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "PressReleaseWithoutPromoBar",
            "Slug": "pressreleasewithoutpromobar",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"press release without promo bar\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "i can see the right rail and download section",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "there is no prmo bar above the footer",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "JapanesePressReleaseWithoutPromoBar",
            "Slug": "japanesepressreleasewithoutpromobar",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"japanese press release without promo bar\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "i can see the right rail and download section",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "there is no prmo bar above the footer",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "PressReleaseWithoutRightRail",
            "Slug": "pressreleasewithoutrightrail",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"press release without right rail\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "i can see no right rail and promo bar",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "PressReleaseWithUPModules",
            "Slug": "pressreleasewithupmodules",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"press release with up modules\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "i can see different up modules",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "JapanesePressReleaseWithUPModules",
            "Slug": "japanesepressreleasewithupmodules",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"japanese press release with up modules\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "i can see different up modules",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "Profiles\\CareersProfile.feature",
      "Feature": {
        "Name": "CareersProfile",
        "Description": "As a job applicant, I should be able to see the \r\ninterest and the industries and functions associated with the career profile with the person's profile I am viewing.",
        "FeatureElements": [
          {
            "Name": "CareersProfile",
            "Slug": "careersprofile",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"careers profile\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see the interest in profile header section.",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see the Industries and Functions section on right rail",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "Profiles\\EmailContactForm.feature",
      "Feature": {
        "Name": "ContactProfile",
        "Description": "As a potential or actual client, I want to be able to get in touch with a consultant \r\nif I am convinced that s/he can help my organization.",
        "FeatureElements": [
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "Name",
                    "Email",
                    "Title",
                    "Organization",
                    "Subject",
                    "Message"
                  ],
                  "DataRows": [
                    [
                      "TestDemo",
                      "specflowtesting@gmail.com",
                      "Title",
                      "Abc",
                      "Regarding",
                      "Help",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": true
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "ContactProfile",
            "Slug": "contactprofile",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"People profile\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see Contact icon for the profile",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I press the Contact icon",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the contact form opens <Name> <Email> <Title> <Organization> <Subject> <Message>",
                "StepComments": [],
                "AfterLastStepComments": [
                  {
                    "Text": "#And On Submission ThankYou message is shown"
                  }
                ]
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "Profiles\\ProfileExpertise.feature",
      "Feature": {
        "Name": "ProfileExpertise",
        "Description": "As a job applicant, I should be able to see the \r\nexpertise associated with the career profile with the person's profile I am viewing.",
        "FeatureElements": [
          {
            "Name": "ProfileExpertise",
            "Slug": "profileexpertise",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"non careers profile\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see the expertise section on right rail",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "Profiles\\ProfileName.feature",
      "Feature": {
        "Name": "ProfileName",
        "Description": "As a user , I want to make sure that profile names on 3UP people module are properly split in next line in \r\ncase name they are long",
        "FeatureElements": [
          {
            "Name": "ProfileName",
            "Slug": "profilename",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"Our people\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see list of Our People profiles",
                "StepComments": [],
                "AfterLastStepComments": [
                  {
                    "Text": "#Then I want to make sure that profile names are properly split in next line"
                  }
                ]
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "SchedulePublishSiteCore\\EditScheduled.feature",
      "Feature": {
        "Name": "EditSchedule",
        "Description": "As a User, I want to Validate the Scenarions for Edit schedule feature in Site Core",
        "FeatureElements": [
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "username",
                    "password",
                    "itemid",
                    "date"
                  ],
                  "DataRows": [
                    [
                      "rgupta",
                      "b",
                      "{AC0E81D5-AACA-4B44-B51F-477A770664DF}",
                      "3/4/2020",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": true
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "EditScheduled",
            "Slug": "editscheduled",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the CMS page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I enter valid username <username>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I enter valid password <password>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "on clicking Log in button I am taken to Homepage \"Sitecore Launchpad\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "click on Content Editor option",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "Enter item id <itemid>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "Navigated to Publish Option",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "Click on Edit Schedule publish option",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "Enter valid Date <date>",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "username",
                    "password",
                    "itemid",
                    "date"
                  ],
                  "DataRows": [
                    [
                      "rgupta",
                      "b",
                      "{AC0E81D5-AACA-4B44-B51F-477A770664DF}",
                      "3/4/2017",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": false
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "EditScheduled_datevalidation",
            "Slug": "editscheduleddatevalidation",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the CMS page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I enter valid username <username>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I enter valid password <password>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "on clicking Log in button I am taken to Homepage \"Sitecore Launchpad\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "click on Content Editor option",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "Enter item id <itemid>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "Navigated to Publish Option",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "Click on Edit Schedule publish option",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "Enter invalid EditDate <date>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "Error message showing",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "SchedulePublishSiteCore\\SchedulePublish.feature",
      "Feature": {
        "Name": "SchedulePublish",
        "Description": "As a User, I want to Validate the Scenarios for schedule publish feature in Site Core",
        "FeatureElements": [
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "username",
                    "password",
                    "itemid",
                    "date"
                  ],
                  "DataRows": [
                    [
                      "rgupta",
                      "b",
                      "{AC0E81D5-AACA-4B44-B51F-477A770664DF}",
                      "3/4/2019",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": true
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "SchedulePublish",
            "Slug": "schedulepublish",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the CMS page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I enter valid username <username>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I enter valid password <password>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "on clicking Log in button I am taken to Homepage \"Sitecore Launchpad\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "click on Content Editor option",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "Enter item id <itemid>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "Navigated to Publish Option",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "Click on Schedule publish option",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "Enter valid schDate <date>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "NO Error message showing",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "username",
                    "password",
                    "itemid",
                    "date"
                  ],
                  "DataRows": [
                    [
                      "rgupta",
                      "b",
                      "{AC0E81D5-AACA-4B44-B51F-477A770664DF}",
                      "3/4/2018",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": false
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "SchedulePublish_DateValidation",
            "Slug": "schedulepublishdatevalidation",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the CMS page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I enter valid username <username>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I enter valid password <password>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "on clicking Log in button I am taken to Homepage \"Sitecore Launchpad\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "click on Content Editor option",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "Enter item id <itemid>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "Navigated to Publish Option",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "Click on Schedule publish option",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "Enter invalid Date <date>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "Error message showing",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": false
            }
          },
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "username",
                    "password",
                    "itemid",
                    "date"
                  ],
                  "DataRows": [
                    [
                      "rgupta",
                      "b",
                      "{AC0E81D5-AACA-4B44-B51F-477A770664DF}",
                      "3/4/2019",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": false
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "SchedulePublish_LangValidation",
            "Slug": "schedulepublishlangvalidation",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the CMS page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I enter valid username <username>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I enter valid password <password>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "on clicking Log in button I am taken to Homepage \"Sitecore Launchpad\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "click on Content Editor option",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "Enter item id <itemid>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "Navigated to Publish Option",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "Click on Schedule publish option",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "Enter valid Schedule Date <date>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "Publish Language error message showing",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": false
            }
          },
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "username",
                    "password",
                    "itemid",
                    "date"
                  ],
                  "DataRows": [
                    [
                      "rgupta",
                      "b",
                      "{AC0E81D5-AACA-4B44-B51F-477A770664DF}",
                      "3/4/2019",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": false
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "SchedulePublish_TargetValidation",
            "Slug": "schedulepublishtargetvalidation",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the CMS page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I enter valid username <username>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I enter valid password <password>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "on clicking Log in button I am taken to Homepage \"Sitecore Launchpad\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "click on Content Editor option",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "Enter item id <itemid>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "Navigated to Publish Option",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "Click on Schedule publish option",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "Enter valid target Schedule Date  <date>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "Target error message showing",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "SchedulePublishSiteCore\\ScheduleUnPublish.feature",
      "Feature": {
        "Name": "ScheduleUnPublish",
        "Description": "As a User, I want to validate the scenarios for Schedule UnPublish feature",
        "FeatureElements": [
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "username",
                    "password",
                    "date"
                  ],
                  "DataRows": [
                    [
                      "rgupta",
                      "b",
                      "3/4/2017",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": false
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "ScheduleUnPublishDateValidation",
            "Slug": "scheduleunpublishdatevalidation",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the CMS page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I enter valid username <username>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I enter valid password <password>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "on clicking Log in button I am taken to Homepage \"Sitecore Launchpad\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "click on Content Editor option",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "Navigated to Publish Option",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "Click on Schedule unpublish option",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "Enter invalid Schedule unpublish Date <date>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "Error message showing",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": false
            }
          },
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "username",
                    "password",
                    "date"
                  ],
                  "DataRows": [
                    [
                      "rgupta",
                      "b",
                      "3/4/2019",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": false
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "ScheduleUnPublish_TargetValidation",
            "Slug": "scheduleunpublishtargetvalidation",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the CMS page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I enter valid username <username>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I enter valid password <password>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "on clicking Log in button I am taken to Homepage \"Sitecore Launchpad\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "click on Content Editor option",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "Navigated to Publish Option",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "Click on Schedule unpublish option",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "Enter valid Schedule unpublish Date <date>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "Error target message showing",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "SearchPage\\JobShare.feature",
      "Feature": {
        "Name": "CareerJobShare",
        "Description": "Want to validate that sharing an Job redirects to Mail box.",
        "FeatureElements": [
          {
            "Name": "Job Share",
            "Slug": "job-share",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"careers job\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see email this job icon with href as mailto",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "SearchPage\\CareerHomePage.feature",
      "Feature": {
        "Name": "Careers Section",
        "Description": "Need to validate that Load More is working on careers search page.",
        "FeatureElements": [
          {
            "Name": "Career Search Page",
            "Slug": "career-search-page",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"careers home\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "When I click on Search Jobs I am navigated to that page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I can see some default jobs",
                "StepComments": [],
                "AfterLastStepComments": [
                  {
                    "Text": "#And a LOAD MORE Button which loads more jobs"
                  }
                ]
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "Career Home Page",
            "Slug": "career-home-page",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"careers home\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I am able to see sticky search bar",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I can see meet our people section",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "Our impact section is also visible",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "Career Job Page",
            "Slug": "career-job-page",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"careers job\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see the job description section",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I can see apply now and other job sections",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can also see job sharing options",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "SearchPage\\FilterResults.feature",
      "Feature": {
        "Name": "FilterResults",
        "Description": "In order to avoid silly mistakes\r\nAs a math idiot\r\nI want to be told the sum of two numbers",
        "FeatureElements": [
          {
            "Name": "FilterResults",
            "Slug": "filterresults",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"careers search\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I search for a job with some additional filters",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I press enter",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the result for available jobs should be shown",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "SearchPage\\SearchPage.feature",
      "Feature": {
        "Name": "SearchPage",
        "Description": "In order to find something on the website\r\nAs a user\r\nI want to be able to search the website",
        "FeatureElements": [
          {
            "Name": "Do Search on search page",
            "Slug": "do-search-on-search-page",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"search with query string\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the page should have some search results",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "No Search Results Message Validation",
            "Slug": "no-search-results-message-validation",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"search\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I have entered \"asdf\" into the search box",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click the search button",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "if there are no search results message is displayed",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "Display search query",
            "Slug": "display-search-query",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"search with query string\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the search box should be populated with my search query",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "Do Search on search page via search button",
            "Slug": "do-search-on-search-page-via-search-button",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"search\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I have entered \"India\" into the search box",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click the search button",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the page should have some search results",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@LargeViewport"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "Do Search on search page via keyboard enter",
            "Slug": "do-search-on-search-page-via-keyboard-enter",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"search\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I have entered \"India\" into the search box",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I press the enter button on the keyboard",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the page should have some search results",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@LargeViewport"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "Display search page without the search button on small viewport",
            "Slug": "display-search-page-without-the-search-button-on-small-viewport",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"search\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the search button should not be displayed",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@SmallViewport"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "Clear search page contents on an empty query following a valid query",
            "Slug": "clear-search-page-contents-on-an-empty-query-following-a-valid-query",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the search results page for \"seo\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I enter \"\" into the search box",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click the search button",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the search header is not visible",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "the search footer is not visible",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "the search results headline is not visible",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "the search results list is empty",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "the search recommendations headline is not visible",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "the search recommendations list is empty",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@LargeViewport"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "Editor Recommends sections disappears on the second page",
            "Slug": "editor-recommends-sections-disappears-on-the-second-page",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"search with carrer query string second\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "Editor Recomends  section is not visible",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "ShairingIcoWindowCheck\\ShairingIconNewWindow.feature",
      "Feature": {
        "Name": "ShairingIconNewWindowPopup",
        "Description": "As a User, I want to validate that after clicking on any shairing icon a new window should open.",
        "FeatureElements": [
          {
            "Name": "FacebookShairingIconNewWindow",
            "Slug": "facebookshairingiconnewwindow",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"Shairing Icon\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "Click on Facebook Icon",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "Validate New window should open",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "LinkedinShairingIconNewWindow",
            "Slug": "linkedinshairingiconnewwindow",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"Shairing Icon\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "Click on Linkedin Icon",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "Validate New Linkedin window should open",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": false
            }
          },
          {
            "Name": "TwitterShairingIconNewWindow",
            "Slug": "twittershairingiconnewwindow",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"Shairing Icon\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "Click on Twitter Icon",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "Validate New Twitter window should open",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "SignInPage\\InvalidCredentialsSignIn.feature",
      "Feature": {
        "Name": "InvalidCredentialsSignIn",
        "Description": "As a user I want to try entering invalid credentials on Sign In page and see a error message",
        "FeatureElements": [
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "email",
                    "password"
                  ],
                  "DataRows": [
                    [
                      "specflowtesting@gmail.com",
                      "abc@123",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": true
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "Invalid credentials SignIn",
            "Slug": "invalid-credentials-signin",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"SignIn\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I enter invalid <email>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "invalid password <password>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "On clicking SignIn button error message appears",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "SignInPage\\ValidCredentialsSignIn.feature",
      "Feature": {
        "Name": "ValidCredentialsSignIn",
        "Description": "As a user I want to try entering valid credentials on Sign In page and be on the homepage",
        "FeatureElements": [
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "email",
                    "password"
                  ],
                  "DataRows": [
                    [
                      "specflowtesting@gmail.com",
                      "Testing@123",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": true
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "Valid credentials",
            "Slug": "valid-credentials",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"SignIn\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I enter valid email <email>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "valid password <password>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "On clicking SignIn button I am taken to Homepage \"McKinsey & Company | Global management consulting\"",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "SingleLangOffice_LangToggle\\InternalLinksOfficePage.feature",
      "Feature": {
        "Name": "SingleLanguageOfficeInternal link",
        "Description": "As a User, I want to validate that the Internal Links created in office pages to items outside of current office\r\ncontext can embed the language code In the url for Non English pages.",
        "FeatureElements": [
          {
            "Name": "Validate Internal Link for Japan Office",
            "Slug": "validate-internal-link-for-japan-office",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"Japan Office\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "Click on Internal office Link",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "URL taking to the correct office site",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "SingleLangOffice_LangToggle\\SingleLangOffice.feature",
      "Feature": {
        "Name": "SingleLanguageOfficeLanguageToggle",
        "Description": "As a User, I want to Verify Language Toggle Drop Down is not showing for Single Language Offices for article/Profile",
        "FeatureElements": [
          {
            "Name": "France Article",
            "Slug": "france-article",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the France Article page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can not see the language toggle button",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "France Profile",
            "Slug": "france-profile",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the France Profile page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can not see the language toggle button",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "Russia Article",
            "Slug": "russia-article",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the Russia Article page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can not see the language toggle button",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          },
          {
            "Name": "Russia Profile",
            "Slug": "russia-profile",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the Russia Profile page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can not see the language toggle button",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "UniversalBasePage\\MultipleCTAonUpModule.feature",
      "Feature": {
        "Name": "MultipleCTAaddon1UPMediumHero",
        "Description": "As a user I want to add multiple CTA on 1 UP Medium Hero Module",
        "FeatureElements": [
          {
            "Name": "User can add multiple CTA in 1 UP Medum module",
            "Slug": "user-can-add-multiple-cta-in-1-up-medum-module",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the \"1 Up Medium Hero\" page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see multiple CTA on that page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I can see the data is coming from CTA and not from ReadMoreLink",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "UrlRedirection\\EditProfileRedirection.feature",
      "Feature": {
        "Name": "EditProfileRedirection",
        "Description": "As a user if I am directly navigating to edit profile url ,\r\nthen on succesfull signon I should be taken back to Edit Profile Page.",
        "FeatureElements": [
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "email",
                    "password"
                  ],
                  "DataRows": [
                    [
                      "specflowtesting@gmail.com",
                      "Testing@123",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": true
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "EditProfileRedirection",
            "Slug": "editprofileredirection",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "When I directly open \"Edit profile\" Url",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I am redirected to SignIn Page whose Title is \"Sign In | McKinsey & Company\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "On successfull signIn I am taken back to Edit Profile page <email> <password>",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "UrlRedirection\\EditSubscriptionsRedirection.feature",
      "Feature": {
        "Name": "EditSubscriptionsRedirection",
        "Description": "As a user if I am directly navigating to edit subscriptions url ,\r\nthen on succesfull signon I should be taken back to Edit subscriptions Page.",
        "FeatureElements": [
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "email",
                    "password"
                  ],
                  "DataRows": [
                    [
                      "specflowtesting@gmail.com",
                      "Testing@123",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": true
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "EditSubscriptionsRedirection",
            "Slug": "editsubscriptionsredirection",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "When I directly open \"Edit subscriptions\" Url",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I am redirected to SignIn Page whose Title is \"Sign In | McKinsey & Company\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "On successfull signIn I am taken back to Edit subscriptions page <email> <password>",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "UrlRedirection\\ForgotPasswordRedirection.feature",
      "Feature": {
        "Name": "ForgotPasswordRedirection",
        "Description": "\tAs a user if I am directly navigating to forgot password url ,\r\n    I should stay on forgot password Page and not navigate to SignIn page.",
        "FeatureElements": [
          {
            "Name": "ForgotPasswordRedirection",
            "Slug": "forgotpasswordredirection",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "When I directly open \"Forgot Password page\" Url",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I am directed to forgot password page",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    }
  ],
  "Summary": {
    "Tags": [
      {
        "Tag": "@mytag",
        "Total": 49,
        "Passing": 41,
        "Failing": 7,
        "Inconclusive": 1
      },
      {
        "Tag": "@LargeViewport",
        "Total": 3,
        "Passing": 3,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Tag": "@SmallViewport",
        "Total": 1,
        "Passing": 1,
        "Failing": 0,
        "Inconclusive": 0
      }
    ],
    "Folders": [
      {
        "Folder": "ArticlePage",
        "Total": 25,
        "Passing": 24,
        "Failing": 0,
        "Inconclusive": 1
      },
      {
        "Folder": "Blog",
        "Total": 8,
        "Passing": 8,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "Collection",
        "Total": 2,
        "Passing": 2,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "ContactUs",
        "Total": 1,
        "Passing": 1,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "CreateProfile",
        "Total": 4,
        "Passing": 3,
        "Failing": 0,
        "Inconclusive": 1
      },
      {
        "Folder": "Digital",
        "Total": 6,
        "Passing": 6,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "ForgotPassword",
        "Total": 1,
        "Passing": 1,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "GlobalNavigationFooter",
        "Total": 4,
        "Passing": 4,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "GlobalNavigationHeader",
        "Total": 4,
        "Passing": 4,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "HamburgerNav",
        "Total": 8,
        "Passing": 2,
        "Failing": 6,
        "Inconclusive": 0
      },
      {
        "Folder": "Homepage",
        "Total": 8,
        "Passing": 7,
        "Failing": 1,
        "Inconclusive": 0
      },
      {
        "Folder": "Locations",
        "Total": 8,
        "Passing": 8,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "Meo",
        "Total": 2,
        "Passing": 0,
        "Failing": 2,
        "Inconclusive": 0
      },
      {
        "Folder": "PressRelease",
        "Total": 7,
        "Passing": 7,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "Profiles",
        "Total": 4,
        "Passing": 4,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "SchedulePublishSiteCore",
        "Total": 8,
        "Passing": 2,
        "Failing": 6,
        "Inconclusive": 0
      },
      {
        "Folder": "SearchPage",
        "Total": 13,
        "Passing": 13,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "ShairingIcoWindowCheck",
        "Total": 3,
        "Passing": 2,
        "Failing": 1,
        "Inconclusive": 0
      },
      {
        "Folder": "SignInPage",
        "Total": 2,
        "Passing": 2,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "SingleLangOffice_LangToggle",
        "Total": 5,
        "Passing": 4,
        "Failing": 0,
        "Inconclusive": 1
      },
      {
        "Folder": "UniversalBasePage",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      },
      {
        "Folder": "UrlRedirection",
        "Total": 3,
        "Passing": 3,
        "Failing": 0,
        "Inconclusive": 0
      }
    ],
    "NotTestedFolders": [
      {
        "Folder": "ArticlePage",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "Blog",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "Collection",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "ContactUs",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "CreateProfile",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "Digital",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "ForgotPassword",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "GlobalNavigationFooter",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "GlobalNavigationHeader",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "HamburgerNav",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "Homepage",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "Locations",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "Meo",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "PressRelease",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "Profiles",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "SchedulePublishSiteCore",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "SearchPage",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "ShairingIcoWindowCheck",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "SignInPage",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "SingleLangOffice_LangToggle",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "UniversalBasePage",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "UrlRedirection",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      }
    ],
    "Scenarios": {
      "Total": 127,
      "Passing": 107,
      "Failing": 16,
      "Inconclusive": 4
    },
    "Features": {
      "Total": 68,
      "Passing": 54,
      "Failing": 11,
      "Inconclusive": 3
    }
  },
  "Configuration": {
    "SutName": "Mckinsey DotCom Redesign",
    "SutVersion": "1.0",
    "GeneratedOn": "13 April 2018 18:29:14"
  }
});