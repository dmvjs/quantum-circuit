var nt = (a, t) => () => (t || a((t = { exports: {} }).exports, t), t.exports);
var pt = nt((ut, tt) => {
  /**
   * @license
   *
   * Copyright (c) 2016, Petar Korponaić <petar.korponaic@gmail.com>
   *
   * This source code is licensed under the MIT License, found in
   * the LICENSE.txt file in the root directory of this source tree.
   */
  var x = require("mathjs"), st = require("./qasm_import/QASMImport.js"), Yr = function(a, t, r) {
    r = r || {};
    var n = Vr(a, r), s = JSON.parse(JSON.stringify(r));
    s.plusChar = "+";
    var e = Vr(t, s);
    return n + e + (r.iotaChar ? r.iotaChar : "i");
  }, Vr = function(a, t) {
    t = t || {}, t.decimalPlaces && (a = x.round(a, t.decimalPlaces));
    var r = a + "";
    t.fixedWidth && (r = a.toFixed(t.decimalPlaces || 14));
    var n = t.plusChar;
    return t.fixedWidth && !n && (n = " "), n && a >= 0 && (r = n + r), r;
  }, Cr = function(a, t) {
    maxN = t || a + 1, maxN > 0 && (maxN = maxN - 1), maxLen = maxN.toString(26).length;
    for (var r = a.toString(26); r.length < maxLen; )
      r = "0" + r;
    for (var n = "", s = 0; s < r.length; s++) {
      var e = r.charCodeAt(s);
      n += String.fromCharCode(e < 97 ? e + 49 : e + 10);
    }
    return n;
  }, b = function(a) {
    this.basicGates = {
      id: {
        description: "Single qubit identity gate",
        matrix: [
          [1, 0],
          [0, 1]
        ],
        params: [],
        drawingInfo: {
          connectors: ["box"],
          label: "ID"
        },
        exportInfo: {
          quil: {
            name: "I"
          },
          cirq: {
            name: "I",
            notTfqSupported: !0
          },
          quest: {
            name: "compactUnitary",
            params: {
              alpha: "(Complex) { .real = 1, .imag = 0 }",
              beta: "(Complex) {.real = 0, .imag = 0}"
            }
          },
          qsharp: {
            name: "I"
          },
          qiskit: {
            name: "id"
          },
          braket: {
            name: "i"
          },
          aqasm: {
            name: "I"
          }
        }
      },
      x: {
        description: 'Pauli X (PI rotation over X-axis) aka "NOT" gate',
        matrix: [
          [0, 1],
          [1, 0]
        ],
        params: [],
        drawingInfo: {
          connectors: ["box"],
          label: "X"
        },
        exportInfo: {
          quil: {
            name: "X"
          },
          cirq: {
            name: "X"
          },
          quest: {
            name: "pauliX"
          },
          qsharp: {
            name: "X"
          },
          quirk: {
            name: "X"
          },
          braket: {
            name: "x"
          },
          aqasm: {
            name: "X"
          },
          ionq: {
            names: ["x", "not"]
          }
        }
      },
      y: {
        description: "Pauli Y (PI rotation over Y-axis)",
        matrix: [
          [0, "-i"],
          ["i", 0]
        ],
        params: [],
        drawingInfo: {
          connectors: ["box"],
          label: "Y"
        },
        exportInfo: {
          quil: {
            name: "Y"
          },
          cirq: {
            name: "Y"
          },
          quest: {
            name: "pauliY"
          },
          qsharp: {
            name: "Y"
          },
          quirk: {
            name: "Y"
          },
          braket: {
            name: "y"
          },
          aqasm: {
            name: "Y"
          },
          ionq: {
            name: "y"
          }
        }
      },
      z: {
        description: "Pauli Z (PI rotation over Z-axis)",
        matrix: [
          [1, 0],
          [0, -1]
        ],
        params: [],
        drawingInfo: {
          connectors: ["box"],
          label: "Z"
        },
        exportInfo: {
          quil: {
            name: "Z"
          },
          cirq: {
            name: "Z"
          },
          quest: {
            name: "pauliZ"
          },
          qsharp: {
            name: "Z"
          },
          quirk: {
            name: "Z"
          },
          braket: {
            name: "z"
          },
          aqasm: {
            name: "Z"
          },
          ionq: {
            name: "z"
          }
        }
      },
      h: {
        description: "Hadamard gate",
        matrix: [
          ["1 / sqrt(2)", "1 / sqrt(2)"],
          ["1 / sqrt(2)", "-1 / sqrt(2)"]
        ],
        params: [],
        drawingInfo: {
          connectors: ["box"],
          label: "H"
        },
        exportInfo: {
          quil: {
            name: "H"
          },
          cirq: {
            name: "H"
          },
          quest: {
            name: "hadamard"
          },
          qsharp: {
            name: "H"
          },
          quirk: {
            name: "H"
          },
          braket: {
            name: "h"
          },
          aqasm: {
            name: "H"
          },
          ionq: {
            name: "h"
          }
        }
      },
      srn: {
        description: "Square root of NOT",
        matrix: [
          ["0.5+0.5i", "0.5-0.5i"],
          ["0.5-0.5i", "0.5+0.5i"]
        ],
        params: [],
        drawingInfo: {
          connectors: ["box"],
          label: "&#x221A;X"
        },
        exportInfo: {
          quil: {
            name: "srn",
            defgate: `DEFGATE srn:
    0.5+0.5i, 0.5-0.5i
    0.5-0.5i, 0.5+0.5i`
          },
          pyquil: {
            name: "srn",
            array: "[[0.5+0.5j, 0.5-0.5j], [0.5-0.5j, 0.5+0.5j]]"
          },
          cirq: {
            name: "X**(1/2)"
          },
          quest: {
            name: "unitary",
            matrix: [
              [["0.5", "0.5"], ["0.5", "-0.5"]],
              [["0.5", "-0.5"], ["0.5", "0.5"]]
            ]
          },
          qasm: {
            name: "sx"
          },
          qiskit: {
            name: "sx"
          },
          braket: {
            name: "v"
          },
          aqasm: {
            matrix: [["0.5+0.5i", "0.5-0.5i"], ["0.5-0.5i", "0.5+0.5i"]],
            array: "[[0.5+0.5j, 0.5-0.5j], [0.5-0.5j, 0.5+0.5j]]"
          },
          ionq: {
            name: "v"
          }
        }
      },
      srndg: {
        description: "Inverse square root of NOT",
        matrix: [
          ["0.5-0.5i", "0.5+0.5i"],
          ["0.5+0.5i", "0.5-0.5i"]
        ],
        params: [],
        drawingInfo: {
          connectors: ["box"],
          label: "&#x221A;X&#8224;"
        },
        exportInfo: {
          quil: {
            name: "srndg",
            defgate: `DEFGATE srndg:
    0.5-0.5i, 0.5+0.5i
    0.5+0.5i, 0.5-0.5i`
          },
          pyquil: {
            name: "srndg",
            array: "[[0.5-0.5j, 0.5+0.5j], [0.5+0.5j, 0.5-0.5j]]"
          },
          cirq: {
            name: "X**(-1/2)"
          },
          quest: {
            name: "unitary",
            matrix: [
              [["0.5", "-0.5"], ["0.5", "0.5"]],
              [["0.5", "0.5"], ["0.5", "-0.5"]]
            ]
          },
          qasm: {
            name: "sxdg"
          },
          qiskit: {
            name: "sxdg"
          },
          braket: {
            name: "vi"
          },
          aqasm: {
            matrix: [["0.5-0.5i", "0.5+0.5i"], ["0.5+0.5i", "0.5-0.5i"]],
            array: "[[0.5-0.5j, 0.5+0.5j], [0.5+0.5j, 0.5-0.5j]]"
          },
          ionq: {
            name: "vi"
          }
        }
      },
      r2: {
        description: 'PI/2 rotation over Z-axis aka "Phase PI/2"',
        matrix: [
          [1, 0],
          [0, "exp(i * pi / 2)"]
        ],
        params: [],
        drawingInfo: {
          connectors: ["box"],
          label: "Z&#x1D6D1;/2"
        },
        exportInfo: {
          quil: {
            replacement: {
              name: "s"
            }
          },
          cirq: {
            replacement: {
              name: "s"
            }
          },
          quest: {
            name: "sGate"
          },
          qsharp: {
            replacement: {
              name: "s"
            }
          },
          qasm: {
            replacement: [
              { name: "s", params: {} }
            ]
          },
          qiskit: {
            replacement: [
              { name: "s", params: {} }
            ]
          },
          quirk: {
            name: "Z^½"
          },
          braket: {
            name: "s"
          },
          aqasm: {
            name: "S"
          }
        }
      },
      r4: {
        description: 'PI/4 rotation over Z-axis aka "Phase PI/4"',
        matrix: [
          [1, 0],
          [0, "exp(i * pi / 4)"]
        ],
        params: [],
        drawingInfo: {
          connectors: ["box"],
          label: "Z&#x1D6D1;/4"
        },
        exportInfo: {
          quil: {
            replacement: {
              name: "t"
            }
          },
          cirq: {
            replacement: {
              name: "t"
            }
          },
          quest: {
            name: "tGate"
          },
          qsharp: {
            replacement: {
              name: "t"
            }
          },
          qasm: {
            replacement: [
              { name: "t", params: {} }
            ]
          },
          qiskit: {
            replacement: [
              { name: "t", params: {} }
            ]
          },
          quirk: {
            name: "Z^¼"
          },
          braket: {
            name: "t"
          },
          aqasm: {
            name: "T"
          }
        }
      },
      r8: {
        description: 'PI/8 rotation over Z-axis aka "Phase PI/8"',
        matrix: [
          [1, 0],
          [0, "exp(i * pi / 8)"]
        ],
        params: [],
        drawingInfo: {
          connectors: ["box"],
          label: "Z&#x1D6D1;/8"
        },
        exportInfo: {
          quil: {
            replacement: {
              name: "u1",
              params: {
                lambda: "pi/8"
              }
            }
          },
          cirq: {
            replacement: {
              name: "u1",
              params: {
                lambda: "pi/8"
              }
            }
          },
          quest: {
            name: "phaseShift",
            params: { theta: "M_PI/8" }
          },
          qsharp: {
            replacement: {
              name: "u1",
              params: {
                lambda: "pi/8"
              }
            }
          },
          qasm: {
            replacement: [
              { name: "u1", params: { lambda: "pi/8" } }
            ]
          },
          qiskit: {
            replacement: [
              { name: "u1", params: { lambda: "pi/8" } }
            ]
          },
          quirk: {
            name: "Z^⅛"
          },
          braket: {
            name: "phaseshift",
            params: { theta: "pi/8" }
          },
          aqasm: {
            matrix: [[1, 0], [0, "exp(i * pi / 8)"]],
            array: "[[1,0],[0,np.exp(1j * np.pi / 8)]]"
          }
        }
      },
      rx: {
        description: "Rotation around the X-axis by given angle",
        matrix: [
          ["cos(theta / 2)", "-i * sin(theta / 2)"],
          ["-i * sin(theta / 2)", "cos(theta / 2)"]
        ],
        params: ["theta"],
        drawingInfo: {
          connectors: ["box"],
          label: "RX"
        },
        exportInfo: {
          quil: {
            name: "RX",
            params: ["theta"]
          },
          cirq: {
            name: "rx",
            params: ["theta"]
          },
          quest: {
            name: "rotateX",
            params: ["theta"]
          },
          qsharp: {
            name: "Rx",
            params: ["theta"]
          },
          braket: {
            name: "rx",
            params: ["theta"]
          },
          aqasm: {
            name: "RX"
          },
          ionq: {
            name: "rx",
            paramsKey: "rotation"
          }
        }
      },
      ry: {
        description: "Rotation around the Y-axis by given angle",
        matrix: [
          ["cos(theta / 2)", "-1 * sin(theta / 2)"],
          ["sin(theta / 2)", "cos(theta / 2)"]
        ],
        params: ["theta"],
        drawingInfo: {
          connectors: ["box"],
          label: "RY"
        },
        exportInfo: {
          quil: {
            name: "RY",
            params: ["theta"]
          },
          cirq: {
            name: "ry",
            params: ["theta"]
          },
          quest: {
            name: "rotateY",
            params: ["theta"]
          },
          qsharp: {
            name: "Ry",
            params: ["theta"]
          },
          braket: {
            name: "ry",
            params: ["theta"]
          },
          aqasm: {
            name: "RY"
          },
          ionq: {
            name: "ry",
            paramsKey: "rotation"
          }
        }
      },
      rz: {
        description: "Rotation around the Z-axis by given angle",
        matrix: [
          ["cos(phi / 2) - i * sin(phi / 2)", 0],
          [0, "cos(phi / 2) + i * sin(phi / 2)"]
        ],
        params: ["phi"],
        drawingInfo: {
          connectors: ["box"],
          label: "RZ"
        },
        exportInfo: {
          quil: {
            name: "RZ",
            params: ["phi"]
          },
          cirq: {
            name: "rz",
            params: ["theta"]
          },
          qsharp: {
            name: "Rz",
            params: ["theta"]
          },
          braket: {
            name: "rz",
            params: ["phi"]
          },
          aqasm: {
            name: "RZ"
          },
          ionq: {
            name: "rz",
            paramsKey: "rotation"
          }
        }
      },
      u1: {
        description: "Single-qubit rotation about the Z axis",
        matrix: [
          [1, 0],
          [0, "exp(i * lambda)"]
        ],
        params: ["lambda"],
        drawingInfo: {
          connectors: ["box"],
          label: "U1"
        },
        exportInfo: {
          quil: {
            name: "PHASE",
            params: ["lambda"]
          },
          cirq: {
            name: "u1",
            params: ["lambda"],
            array: "[[1, 0], [0, np.exp(1j*p_lambda)]]",
            notTfqSupported: !0
          },
          quest: {
            name: "phaseShift",
            params: ["lambda"]
          },
          braket: {
            name: "phaseshift",
            params: ["lambda"]
          },
          qiskit: {
            name: "p"
          },
          aqasm: {
            name: "PH"
          }
        }
      },
      u2: {
        description: "Single-qubit rotation about the X+Z axis",
        matrix: [
          ["1 / sqrt(2)", "-exp(i * lambda) * 1 / sqrt(2)"],
          ["exp(i * phi) * 1 / sqrt(2)", "exp(i * lambda + i * phi) * 1 / sqrt(2)"]
        ],
        params: ["phi", "lambda"],
        drawingInfo: {
          connectors: ["box"],
          label: "U2"
        },
        exportInfo: {
          quil: {
            name: "u2",
            params: ["phi", "lambda"],
            defgate: `DEFGATE u2(%phi, %lambda):
    1/SQRT(2), -1*EXP(i*%lambda)*1/SQRT(2)
    EXP(i*%phi)*1/SQRT(2), EXP(i*%lambda + i*%phi)*1/SQRT(2)`
          },
          pyquil: {
            name: "u2",
            params: ["phi", "lambda"],
            array: "[[1/quil_sqrt(2),-quil_exp(1j*p_lambda)*1/quil_sqrt(2)],[quil_exp(1j*p_phi)*1/quil_sqrt(2),quil_exp(1j*p_lambda+1j*p_phi)*1/quil_sqrt(2)]]"
          },
          cirq: {
            name: "u2",
            params: ["phi", "lambda"],
            array: "[[1/np.sqrt(2), -np.exp(1j*p_lambda)*1/np.sqrt(2)], [np.exp(1j*p_phi)*1/np.sqrt(2), np.exp(1j*p_lambda+1j*p_phi)*1/np.sqrt(2)]]",
            notTfqSupported: !0
          },
          quest: {
            name: "unitary",
            params: ["phi", "lambda"],
            matrix: [
              [["1/sqrt(2)", "0"], ["-cos(lambda)/sqrt(2)", "-sin(lambda)/sqrt(2)"]],
              [["cos(phi)/sqrt(2)", "sin(phi)/sqrt(2)"], ["cos(lambda+phi)/sqrt(2)", "sin(lambda+phi)/sqrt(2)"]]
            ]
          },
          braket: {
            name: "unitary",
            params: ["phi", "lambda"],
            array: "[[1/np.sqrt(2), -np.exp(1j*p_lambda)*1/np.sqrt(2)], [np.exp(1j*p_phi)*1/np.sqrt(2), np.exp(1j*p_lambda+1j*p_phi)*1/np.sqrt(2)]]"
          },
          aqasm: {
            matrix: [["1 / sqrt(2)", "-exp(i * lambda) * 1 / sqrt(2)"], ["exp(i * phi) * 1 / sqrt(2)", "exp(i * lambda + i * phi) * 1 / sqrt(2)"]],
            array: "[[1/np.sqrt(2), -np.exp(1j*p_lambda)*1/np.sqrt(2)], [np.exp(1j*p_phi)*1/np.sqrt(2), np.exp(1j*p_lambda+1j*p_phi)*1/np.sqrt(2)]]",
            params: ["phi", "lambda"]
          },
          qiskit: {
            replacement: [
              { name: "u3", params: { theta: "pi/2", phi: "phi", lambda: "lambda" } }
            ]
          }
        }
      },
      u3: {
        description: "Generic single-qubit rotation gate with 3 Euler angles",
        matrix: [
          ["cos(theta/2)", "-exp(i * lambda) * sin(theta / 2)"],
          ["exp(i * phi) * sin(theta / 2)", "exp(i * lambda + i * phi) * cos(theta / 2)"]
        ],
        params: ["theta", "phi", "lambda"],
        drawingInfo: {
          connectors: ["box"],
          label: "U3"
        },
        exportInfo: {
          quil: {
            name: "u3",
            params: ["theta", "phi", "lambda"],
            defgate: `DEFGATE u3(%theta, %phi, %lambda):
    COS(%theta/2), -1*EXP(i*%lambda)*SIN(%theta/2)
    EXP(i*%phi)*SIN(%theta/2), EXP(i*%lambda + i*%phi)*COS(%theta/2)`
          },
          pyquil: {
            name: "u3",
            params: ["theta", "phi", "lambda"],
            array: "[[quil_cos(p_theta/2),-quil_exp(1j*p_lambda)*quil_sin(p_theta/2)],[quil_exp(1j*p_phi)*quil_sin(p_theta/2),quil_exp(1j*p_lambda+1j*p_phi)*quil_cos(p_theta/2)]]"
          },
          cirq: {
            name: "u3",
            params: ["theta", "phi", "lambda"],
            array: "[[np.cos(p_theta/2), -np.exp(1j*p_lambda)*np.sin(p_theta/2)], [np.exp(1j*p_phi)*np.sin(p_theta/2), np.exp(1j*p_lambda+1j*p_phi)*np.cos(p_theta/2)]]",
            notTfqSupported: !0
          },
          quest: {
            name: "unitary",
            params: ["theta", "phi", "lambda"],
            matrix: [
              [["cos(theta/2)", "0"], ["-cos(lambda)*sin(theta/2)", "-sin(lambda)*sin(theta/2)"]],
              [["cos(phi)*sin(theta/2)", "sin(phi)*sin(theta/2)"], ["cos(lambda+phi)*cos(theta/2)", "sin(lambda+phi)*cos(theta/2)"]]
            ]
          },
          braket: {
            name: "unitary",
            params: ["theta", "phi", "lambda"],
            array: "[[np.cos(p_theta/2), -np.exp(1j*p_lambda)*np.sin(p_theta/2)], [np.exp(1j*p_phi)*np.sin(p_theta/2), np.exp(1j*p_lambda+1j*p_phi)*np.cos(p_theta/2)]]"
          },
          qiskit: {
            name: "u"
          },
          aqasm: {
            matrix: [["cos(theta/2)", "-exp(i * lambda) * sin(theta / 2)"], ["exp(i * phi) * sin(theta / 2)", "exp(i * lambda + i * phi) * cos(theta / 2)"]],
            array: "[[np.cos(p_theta/2), -np.exp(1j*p_lambda)*np.sin(p_theta/2)], [np.exp(1j*p_phi)*np.sin(p_theta/2), np.exp(1j*p_lambda+1j*p_phi)*np.cos(p_theta/2)]]",
            params: ["theta", "phi", "lambda"]
          }
        }
      },
      s: {
        description: "PI/2 rotation over Z-axis (synonym for `r2`)",
        matrix: [
          [1, 0],
          [0, "exp(i * pi / 2)"]
        ],
        params: [],
        drawingInfo: {
          connectors: ["box"],
          label: "S"
        },
        exportInfo: {
          quil: {
            name: "S"
          },
          cirq: {
            name: "S"
          },
          quest: {
            name: "sGate"
          },
          qsharp: {
            name: "S"
          },
          quirk: {
            name: "Z^½"
          },
          braket: {
            name: "s"
          },
          aqasm: {
            name: "S"
          },
          ionq: {
            name: "s"
          }
        }
      },
      t: {
        description: "PI/4 rotation over Z-axis (synonym for `r4`)",
        matrix: [
          [1, 0],
          [0, "exp(i * pi / 4)"]
        ],
        params: [],
        drawingInfo: {
          connectors: ["box"],
          label: "T"
        },
        exportInfo: {
          quil: {
            name: "T"
          },
          cirq: {
            name: "T"
          },
          quest: {
            name: "tGate"
          },
          qsharp: {
            name: "T"
          },
          quirk: {
            name: "Z^¼"
          },
          braket: {
            name: "t"
          },
          aqasm: {
            name: "T"
          },
          ionq: {
            name: "t"
          }
        }
      },
      sdg: {
        description: "(-PI/2) rotation over Z-axis",
        matrix: [
          [1, 0],
          [0, "exp(-i * pi / 2)"]
        ],
        params: [],
        drawingInfo: {
          connectors: ["box"],
          label: "S&#8224;"
        },
        exportInfo: {
          quil: {
            replacement: {
              name: "u1",
              params: {
                lambda: "-pi/2"
              }
            }
          },
          cirq: {
            replacement: {
              name: "u1",
              params: {
                lambda: "-pi/2"
              }
            }
          },
          quest: {
            name: "phaseShift",
            params: { theta: "-M_PI/2" }
          },
          qsharp: {
            replacement: {
              name: "u1",
              params: {
                lambda: "-pi/2"
              }
            }
          },
          quirk: {
            name: "Z^-½"
          },
          braket: {
            name: "si"
          },
          aqasm: {
            name: "S",
            dagger: !0
          },
          ionq: {
            name: "si"
          }
        }
      },
      tdg: {
        description: "(-PI/4) rotation over Z-axis",
        matrix: [
          [1, 0],
          [0, "exp(-i * pi / 4)"]
        ],
        params: [],
        drawingInfo: {
          connectors: ["box"],
          label: "T&#8224;"
        },
        exportInfo: {
          quil: {
            replacement: {
              name: "u1",
              params: {
                lambda: "-pi/4"
              }
            }
          },
          cirq: {
            replacement: {
              name: "u1",
              params: {
                lambda: "-pi/4"
              }
            }
          },
          quest: {
            name: "phaseShift",
            params: { theta: "-M_PI/4" }
          },
          qsharp: {
            replacement: {
              name: "u1",
              params: {
                lambda: "-pi/4"
              }
            }
          },
          quirk: {
            name: "Z^-¼"
          },
          braket: {
            name: "ti"
          },
          aqasm: {
            name: "T",
            dagger: !0
          },
          ionq: {
            name: "ti"
          }
        }
      },
      gpi: {
        description: "GPi gate",
        matrix: [
          [0, "exp(-i*phi)"],
          ["exp(i*phi)", 0]
        ],
        params: ["phi"],
        drawingInfo: {
          connectors: ["box"],
          label: "GPi"
        },
        exportInfo: {
          quil: {
            name: "gpi",
            params: ["phi"],
            defgate: `DEFGATE gpi(%phi):
    0, EXP(-i * %phi)
    EXP(i * %phi), 0`
          },
          pyquil: {
            name: "gpi",
            params: ["phi"],
            array: "[ [ 0, quil_exp(-1j*p_phi) ], [ quil_exp(1j*p_phi), 0 ] ]"
          },
          cirq: {
            name: "gpi"
          },
          quest: {
            name: "gpi",
            //@TODO add function
            func: "TODO"
          },
          qasm: {
            equivalent: [
              { name: "u3", params: { theta: "pi", phi: "phi", lambda: "pi-phi" }, wires: [0] }
            ]
          },
          qiskit: {
            equivalent: [
              { name: "u3", params: { theta: "pi", phi: "phi", lambda: "pi-phi" }, wires: [0] }
            ]
          },
          braket: {
            name: "unitary",
            params: ["phi"],
            array: "[ [ 0, np.exp(-1j*p_phi) ], [ np.exp(1j*p_phi), 0 ] ]"
          },
          aqasm: {
            matrix: [[0, "exp(-i*phi)"], ["exp(i*phi)", 0]],
            array: "[ [ 0, np.exp(-1j*p_phi) ], [ np.exp(1j*p_phi), 0 ] ]",
            params: ["phi"]
          },
          ionq: {
            name: "gpi",
            paramsKey: "phase"
          }
        }
      },
      gpi2: {
        description: "GPi2 gate",
        matrix: [
          ["1/sqrt(2)", "(-i*exp(-i*phi))/sqrt(2)"],
          ["(-i*exp(i*phi))/sqrt(2)", "1/sqrt(2)"]
        ],
        params: ["phi"],
        drawingInfo: {
          connectors: ["box"],
          label: "GPi2"
        },
        exportInfo: {
          quil: {
            name: "gpi2",
            params: ["phi"],
            defgate: `DEFGATE gpi2(%phi):
    1/SQRT(2), (-i*EXP(-i * %phi)) / SQRT(2)
    (-i*EXP(i * %phi)) / SQRT(2), 1/SQRT(2)`
          },
          pyquil: {
            name: "gpi2",
            params: ["phi"],
            array: "[ [ 1/quil_sqrt(2), (-1j*quil_exp(-1j*p_phi))/quil_sqrt(2) ], [ (-1j*quil_exp(1j*p_phi))/quil_sqrt(2), 1/quil_sqrt(2) ] ]"
          },
          cirq: {
            name: "gpi2"
          },
          quest: {
            name: "gpi2",
            //@TODO add function
            func: "TODO"
          },
          qasm: {
            equivalent: [
              { name: "u3", params: { theta: "pi/2", phi: "phi-(pi/2)", lambda: "(pi/2)-phi" }, wires: [0] }
            ]
          },
          qiskit: {
            equivalent: [
              { name: "u3", params: { theta: "pi/2", phi: "phi-(pi/2)", lambda: "(pi/2)-phi" }, wires: [0] }
            ]
          },
          braket: {
            name: "unitary",
            params: ["phi"],
            array: "[ [ 1/np.sqrt(2), (-1j*np.exp(-1j*p_phi))/np.sqrt(2) ], [ (-1j*np.exp(1j*p_phi))/np.sqrt(2), 1/np.sqrt(2) ] ]"
          },
          aqasm: {
            matrix: [["1/sqrt(2)", "(-i*exp(-i*phi))/sqrt(2)"], ["(-i*exp(i*phi))/sqrt(2)", "1/sqrt(2)"]],
            array: "[ [ 1/np.sqrt(2), (-1j*np.exp(-1j*p_phi))/np.sqrt(2) ], [ (-1j*np.exp(1j*p_phi))/np.sqrt(2), 1/np.sqrt(2) ] ]",
            params: ["phi"]
          },
          ionq: {
            name: "gpi2",
            paramsKey: "phase"
          }
        }
      },
      vz: {
        description: "VirtualZ gate",
        matrix: [
          ["exp(-i*theta/2)", 0],
          [0, "exp(i*theta/2)"]
        ],
        params: ["theta"],
        drawingInfo: {
          connectors: ["box"],
          label: "VrtZ"
        },
        exportInfo: {
          quil: {
            name: "vz",
            params: ["theta"],
            defgate: `DEFGATE vz(%theta):
    EXP(-i * %theta/2), 0
    0, EXP(-i * %theta/2)`
          },
          pyquil: {
            name: "vz",
            params: ["theta"],
            array: "[ [ quil_exp(-1j*p_theta/2), 0 ], [ 0, quil_exp(1j*p_theta/2) ] ]"
          },
          cirq: {
            name: "vz"
          },
          quest: {
            name: "vz",
            //@TODO add function
            func: "TODO"
          },
          qasm: {
            equivalent: [
              { name: "rz", params: { phi: "theta" }, wires: [0] }
            ]
          },
          qiskit: {
            equivalent: [
              { name: "rz", params: { phi: "theta" }, wires: [0] }
            ]
          },
          braket: {
            name: "unitary",
            params: ["theta"],
            array: "[ [ np.exp(-1j*p_theta/2), 0 ], [ 0, np.exp(1j*p_theta/2) ] ]"
          },
          aqasm: {
            matrix: [["exp(-i*theta/2)", 0], [0, "exp(i*theta/2)"]],
            array: "[ [ np.exp(-1j*p_theta/2), 0 ], [ 0, np.exp(1j*p_theta/2) ] ]",
            params: ["theta"]
          },
          ionq: {
            name: "vz",
            paramsKey: "phase"
          }
        }
      },
      cx: {
        description: "Controlled NOT (CNOT) gate",
        matrix: [
          [1, 0, 0, 0],
          [0, 1, 0, 0],
          [0, 0, 0, 1],
          [0, 0, 1, 0]
        ],
        numTargetQubits: 1,
        numControlQubits: 1,
        params: [],
        drawingInfo: {
          connectors: ["dot", "not"],
          label: "X",
          root: "x"
        },
        exportInfo: {
          quil: {
            name: "CNOT"
          },
          cirq: {
            name: "CNOT"
          },
          quest: {
            name: "controlledNot"
          },
          qsharp: {
            name: "CNOT"
          },
          quirk: {
            name: "X",
            controlled: !0
          },
          braket: {
            name: "cnot"
          },
          aqasm: {
            name: "CNOT"
          },
          ionq: {
            name: "cnot"
          }
        }
      },
      cy: {
        description: "Controlled Y gate (controlled rotation over Y-axis by PI)",
        matrix: [
          [1, 0, 0, 0],
          [0, 1, 0, 0],
          [0, 0, 0, "-i"],
          [0, 0, "i", 0]
        ],
        numTargetQubits: 1,
        numControlQubits: 1,
        params: [],
        drawingInfo: {
          connectors: ["dot", "box"],
          label: "Y",
          root: "y"
        },
        exportInfo: {
          quest: {
            name: "controlledPauliY"
          },
          cirq: {
            replacement: {
              name: "y",
              type: "controlled",
              notTfqSupported: !0
            }
          },
          quil: {
            name: "cy",
            defgate: `DEFGATE cy:
    1, 0, 0, 0
    0, 1, 0, 0
    0, 0, 0, -i
    0, 0, i, 0`
          },
          pyquil: {
            name: "cy",
            array: "[[1,0,0,0],[0,1,0,0],[0,0,0,-1j],[0,0,1j,0]]"
          },
          qsharp: {
            name: "Controlled Y"
          },
          quirk: {
            name: "Y",
            controlled: !0
          },
          braket: {
            name: "cy"
          },
          aqasm: {
            name: "Y",
            controlled: !0
          }
        }
      },
      cz: {
        description: "Controlled Z gate (controlled rotation over Z-axis by PI)",
        matrix: [
          [1, 0, 0, 0],
          [0, 1, 0, 0],
          [0, 0, 1, 0],
          [0, 0, 0, -1]
        ],
        numTargetQubits: 2,
        numControlQubits: 0,
        params: [],
        drawingInfo: {
          connectors: ["dot", "dot"],
          label: "Z",
          root: "z"
        },
        exportInfo: {
          quil: {
            name: "CZ"
          },
          cirq: {
            name: "CZ"
          },
          quest: {
            name: "controlledPhaseFlip"
          },
          qsharp: {
            name: "Controlled Z"
          },
          quirk: {
            name: "Z",
            controlled: !0
          },
          braket: {
            name: "cz"
          },
          aqasm: {
            name: "CSIGN"
          }
        }
      },
      ch: {
        description: "Controlled Hadamard gate",
        matrix: [
          [1, 0, 0, 0],
          [0, 1, 0, 0],
          [0, 0, "1 / sqrt(2)", "1 / sqrt(2)"],
          [0, 0, "1 / sqrt(2)", "-1 / sqrt(2)"]
        ],
        numTargetQubits: 1,
        numControlQubits: 1,
        params: [],
        drawingInfo: {
          connectors: ["dot", "box"],
          label: "H",
          root: "h"
        },
        exportInfo: {
          quest: {
            name: "controlledUnitary",
            matrix: [
              [["1/sqrt(2)", "0"], ["1/sqrt(2)", "0"]],
              [["1/sqrt(2)", "0"], ["-1/sqrt(2)", "0"]]
            ]
          },
          cirq: {
            replacement: {
              name: "h",
              type: "controlled",
              notTfqSupported: !0
            }
          },
          quil: {
            name: "ch",
            defgate: `DEFGATE ch:
    1, 0, 0, 0
    0, 1, 0, 0
    0, 0, 0.7071067811865475, 0.7071067811865475
    0, 0, 0.7071067811865475, -0.7071067811865475`
          },
          pyquil: {
            name: "ch",
            array: "[[1,0,0,0],[0,1,0,0],[0,0,1/np.sqrt(2),1/np.sqrt(2)],[0,0,1/np.sqrt(2),-1/np.sqrt(2)]]"
          },
          qsharp: {
            name: "Controlled H"
          },
          quirk: {
            name: "H",
            controlled: !0
          },
          braket: {
            name: "unitary",
            array: "[[1,0,0,0],[0,1,0,0],[0,0,1/np.sqrt(2),1/np.sqrt(2)],[0,0,1/np.sqrt(2),-1/np.sqrt(2)]]"
          },
          aqasm: {
            name: "H",
            controlled: !0
          }
        }
      },
      csrn: {
        description: "Controlled square root of NOT",
        matrix: [
          [1, 0, 0, 0],
          [0, 1, 0, 0],
          [0, 0, "0.5+0.5i", "0.5-0.5i"],
          [0, 0, "0.5-0.5i", "0.5+0.5i"]
        ],
        numTargetQubits: 1,
        numControlQubits: 1,
        params: [],
        drawingInfo: {
          connectors: ["dot", "box"],
          label: "&#x221A;X",
          root: "srn"
        },
        exportInfo: {
          quest: {
            name: "controlledUnitary",
            matrix: [
              [["-1/sqrt(2)", "0"], ["-1/sqrt(2)", "0"]],
              [["-1/sqrt(2)", "0"], ["1/sqrt(2)", "0"]]
            ]
          },
          cirq: {
            replacement: {
              name: "srn",
              type: "controlled",
              notTfqSupported: !0
            }
          },
          quil: {
            name: "csrn",
            defgate: `DEFGATE csrn:
    1, 0, 0, 0
    0, 1, 0, 0
    0, 0, 0.5+0.5i, 0.5-0.5i
    0, 0, 0.5-0.5i, 0.5+0.5i`
          },
          qasm: {
            name: "csx"
          },
          qiskit: {
            name: "csx"
          },
          pyquil: {
            name: "csrn",
            array: "[[1,0,0,0],[0,1,0,0],[0,0,0.5+0.5j,0.5-0.5j],[0,0,0.5-0.5j,0.5+0.5j]]"
          },
          braket: {
            name: "unitary",
            array: "[[1,0,0,0],[0,1,0,0],[0,0,0.5+0.5j,0.5-0.5j],[0,0,0.5-0.5j,0.5+0.5j]]"
          },
          aqasm: {
            matrix: [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, "0.5+0.5i", "0.5-0.5i"], [0, 0, "0.5-0.5i", "0.5+0.5i"]],
            array: "[[1,0,0,0],[0,1,0,0],[0,0,0.5+0.5j,0.5-0.5j],[0,0,0.5-0.5j,0.5+0.5j]]"
          }
        }
      },
      swap: {
        description: "Swaps the state of two qubits.",
        matrix: [
          [1, 0, 0, 0],
          [0, 0, 1, 0],
          [0, 1, 0, 0],
          [0, 0, 0, 1]
        ],
        numTargetQubits: 2,
        numControlQubits: 0,
        params: [],
        drawingInfo: {
          connectors: ["x", "x"],
          label: "SWP"
        },
        exportInfo: {
          quil: {
            name: "SWAP"
          },
          cirq: {
            name: "SWAP"
          },
          quest: {
            name: "swap",
            func: `void swap(Qureg qubits, const int q1, const int q2) {
    controlledNot(qubits, q1, q2);
    controlledNot(qubits, q2, q1);
    controlledNot(qubits, q1, q2);
}`
          },
          qsharp: {
            name: "SWAP"
          },
          quirk: {
            name: "Swap"
          },
          braket: {
            name: "swap"
          },
          aqasm: {
            name: "SWAP"
          },
          ionq: {
            name: "swap"
          }
        }
      },
      srswap: {
        description: "Square root of swap",
        matrix: [
          [1, 0, 0, 0],
          [0, "0.5 * (1 + i)", "0.5 * (1 - i)", 0],
          [0, "0.5 * (1 - i)", "0.5 * (1 + i)", 0],
          [0, 0, 0, 1]
        ],
        numTargetQubits: 2,
        numControlQubits: 0,
        params: [],
        drawingInfo: {
          connectors: ["box", "box"],
          label: "&#x221A;SWP"
        },
        exportInfo: {
          quil: {
            name: "srswap",
            defgate: `DEFGATE srswap:
    1, 0, 0, 0
    0, 0.5+0.5i, 0.5-0.5i, 0
    0, 0.5-0.5i, 0.5+0.5i, 0
    0, 0, 0, 1`
          },
          cirq: {
            name: "SWAP**(1/2)"
          },
          pyquil: {
            name: "srswap",
            array: "[[1,0,0,0],[0,0.5 * (1 + 1j),0.5 * (1 - 1j),0],[0,0.5 * (1 - 1j),0.5 * (1 + 1j),0],[0,0,0,1]]"
          },
          quest: {
            name: "srswap",
            func: `void srswap(Qureg qubits, const int q1, const int q2) {
    controlledNot(qubits, q2, q1);
    rotateY(qubits, q2, M_PI/2);
    rotateZ(qubits, q2, M_PI/16);
    controlledNot(qubits, q1, q2);
    rotateZ(qubits, q1, M_PI/8);
    rotateZ(qubits, q2, -M_PI/8);
    controlledNot(qubits, q1, q2);
    rotateZ(qubits, q2, M_PI/16);
    rotateY(qubits, q2, -M_PI/2);
    controlledNot(qubits, q2, q1);
}`
          },
          qasm: {
            equivalent: [
              { name: "u3", params: { theta: "pi/2", phi: "pi/2", lambda: "-1*pi" }, wires: [0] },
              { name: "u3", params: { theta: "pi/2", phi: "-1*pi/2", lambda: "pi" }, wires: [1] },
              { name: "cx", wires: [0, 1] },
              { name: "u3", params: { theta: "pi/4", phi: "-1*pi/2", lambda: "-1*pi/2" }, wires: [0] },
              { name: "u3", params: { theta: "pi/2", phi: "0", lambda: "7*pi/4" }, wires: [1] },
              { name: "cx", wires: [0, 1] },
              { name: "u3", params: { theta: "pi/4", phi: "-1*pi", lambda: "-1*pi/2" }, wires: [0] },
              { name: "u3", params: { theta: "pi/2", phi: "pi", lambda: "pi/2" }, wires: [1] },
              { name: "cx", wires: [0, 1] },
              { name: "u3", params: { theta: "pi/2", phi: "0", lambda: "-3*pi/2" }, wires: [0] },
              { name: "u3", params: { theta: "pi/2", phi: "pi/2", lambda: "0" }, wires: [1] }
            ]
          },
          qiskit: {
            equivalent: [
              { name: "u3", params: { theta: "pi/2", phi: "pi/2", lambda: "-1*pi" }, wires: [0] },
              { name: "u3", params: { theta: "pi/2", phi: "-1*pi/2", lambda: "pi" }, wires: [1] },
              { name: "cx", wires: [0, 1] },
              { name: "u3", params: { theta: "pi/4", phi: "-1*pi/2", lambda: "-1*pi/2" }, wires: [0] },
              { name: "u3", params: { theta: "pi/2", phi: "0", lambda: "7*pi/4" }, wires: [1] },
              { name: "cx", wires: [0, 1] },
              { name: "u3", params: { theta: "pi/4", phi: "-1*pi", lambda: "-1*pi/2" }, wires: [0] },
              { name: "u3", params: { theta: "pi/2", phi: "pi", lambda: "pi/2" }, wires: [1] },
              { name: "cx", wires: [0, 1] },
              { name: "u3", params: { theta: "pi/2", phi: "0", lambda: "-3*pi/2" }, wires: [0] },
              { name: "u3", params: { theta: "pi/2", phi: "pi/2", lambda: "0" }, wires: [1] }
            ]
          },
          braket: {
            name: "unitary",
            array: "[[1,0,0,0],[0,0.5 * (1 + 1j),0.5 * (1 - 1j),0],[0,0.5 * (1 - 1j),0.5 * (1 + 1j),0],[0,0,0,1]]"
          },
          aqasm: {
            name: "SQRTSWAP"
          }
        }
      },
      iswap: {
        description: "Swaps the state of two qubits, applying a -i phase to q1 when it is in the 1 state and a -i phase to q2 when it is in the 0 state",
        matrix: [
          [1, 0, 0, 0],
          [0, 0, "0+i", 0],
          [0, "0+i", 0, 0],
          [0, 0, 0, 1]
        ],
        numTargetQubits: 2,
        numControlQubits: 0,
        params: [],
        drawingInfo: {
          connectors: ["box", "box"],
          label: "iSWP"
        },
        exportInfo: {
          quil: {
            name: "ISWAP"
          },
          cirq: {
            name: "ISWAP"
          },
          qasm: {
            equivalent: [
              { name: "u3", params: { theta: "pi/2", phi: "-1*pi/2", lambda: "-1*pi" }, wires: [0] },
              { name: "u3", params: { theta: "pi/2", phi: "-1*pi/2", lambda: "pi" }, wires: [1] },
              { name: "cx", wires: [0, 1] },
              { name: "u3", params: { theta: "pi/2", phi: "0", lambda: "3*pi/2" }, wires: [0] },
              { name: "u3", params: { theta: "pi/2", phi: "3*pi/2", lambda: "0" }, wires: [1] },
              { name: "cx", wires: [0, 1] },
              { name: "u3", params: { theta: "pi/2", phi: "0", lambda: "0" }, wires: [0] },
              { name: "u3", params: { theta: "pi", phi: "pi/4", lambda: "-1*pi/4" }, wires: [1] }
            ]
          },
          qiskit: {
            equivalent: [
              { name: "u3", params: { theta: "pi/2", phi: "-1*pi/2", lambda: "-1*pi" }, wires: [0] },
              { name: "u3", params: { theta: "pi/2", phi: "-1*pi/2", lambda: "pi" }, wires: [1] },
              { name: "cx", wires: [0, 1] },
              { name: "u3", params: { theta: "pi/2", phi: "0", lambda: "3*pi/2" }, wires: [0] },
              { name: "u3", params: { theta: "pi/2", phi: "3*pi/2", lambda: "0" }, wires: [1] },
              { name: "cx", wires: [0, 1] },
              { name: "u3", params: { theta: "pi/2", phi: "0", lambda: "0" }, wires: [0] },
              { name: "u3", params: { theta: "pi", phi: "pi/4", lambda: "-1*pi/4" }, wires: [1] }
            ]
          },
          braket: {
            name: "iswap"
          },
          aqasm: {
            name: "ISWAP"
          }
        }
      },
      xx: {
        description: "XX gate",
        matrix: [
          ["cos(theta)", 0, 0, "-i*sin(theta)"],
          [0, "cos(theta)", "-i*sin(theta)", 0],
          [0, "-i*sin(theta)", "cos(theta)", 0],
          ["-i*sin(theta)", 0, 0, "cos(theta)"]
        ],
        numTargetQubits: 2,
        numControlQubits: 0,
        params: ["theta"],
        drawingInfo: {
          connectors: ["box", "box"],
          label: "XX"
        },
        exportInfo: {
          quil: {
            name: "xx",
            params: ["theta"],
            defgate: `DEFGATE xx(%theta):
    COS(%theta), 0, 0, -i*SIN(%theta)
    0, COS(%theta), -i*SIN(%theta), 0
    0, -i*SIN(%theta), COS(%theta), 0
    -i*SIN(%theta), 0, 0, COS(%theta)`
          },
          pyquil: {
            name: "xx",
            params: ["theta"],
            array: "[ [quil_cos(p_theta), 0, 0, -1j*quil_sin(p_theta)], [0, quil_cos(p_theta), -1j*quil_sin(p_theta), 0], [0, -1j*quil_sin(p_theta), quil_cos(p_theta), 0], [-1j*quil_sin(p_theta), 0, 0, quil_cos(p_theta)] ]"
          },
          cirq: {
            name: "xx"
          },
          quest: {
            name: "xx",
            //@TODO add function
            func: "TODO"
          },
          qasm: {
            name: "rxx"
          },
          qiskit: {
            name: "rxx"
          },
          braket: {
            name: "unitary",
            params: ["theta"],
            array: "[[np.cos(p_theta), 0, 0, -1j*np.sin(p_theta)], [0, np.cos(p_theta), -1j*np.sin(p_theta), 0], [0, -1j*np.sin(p_theta), np.cos(p_theta), 0], [-1j*np.sin(p_theta), 0, 0, np.cos(p_theta)] ]"
          },
          aqasm: {
            matrix: [["cos(theta)", 0, 0, "-i*sin(theta)"], [0, "cos(theta)", "-i*sin(theta)", 0], [0, "-i*sin(theta)", "cos(theta)", 0], ["-i*sin(theta)", 0, 0, "cos(theta)"]],
            array: "[[np.cos(p_theta), 0, 0, -1j*np.sin(p_theta)], [0, np.cos(p_theta), -1j*np.sin(p_theta), 0], [0, -1j*np.sin(p_theta), np.cos(p_theta), 0], [-1j*np.sin(p_theta), 0, 0, np.cos(p_theta)] ]",
            params: ["theta"]
          },
          ionq: {
            name: "xx",
            paramsKey: "phase"
          }
        }
      },
      yy: {
        description: "YY gate",
        matrix: [
          ["cos(theta)", 0, 0, "i*sin(theta)"],
          [0, "cos(theta)", "-i*sin(theta)", 0],
          [0, "-i*sin(theta)", "cos(theta)", 0],
          ["i*sin(theta)", 0, 0, "cos(theta)"]
        ],
        numTargetQubits: 2,
        numControlQubits: 0,
        params: ["theta"],
        drawingInfo: {
          connectors: ["box", "box"],
          label: "YY"
        },
        exportInfo: {
          quil: {
            name: "yy",
            params: ["theta"],
            defgate: `DEFGATE yy(%theta):
    COS(%theta), 0, 0, i*SIN(%theta)
    0, COS(%theta), -i*SIN(%theta), 0
    0, -i*SIN(%theta), COS(%theta), 0
    i*SIN(%theta), 0, 0, COS(%theta)`
          },
          cirq: {
            name: "YY"
          },
          pyquil: {
            name: "yy",
            params: ["theta"],
            array: "[ [quil_cos(p_theta), 0, 0, 1j*quil_sin(p_theta)], [0, quil_cos(p_theta), -1j*quil_sin(p_theta), 0], [0, -1j*quil_sin(p_theta), quil_cos(p_theta), 0], [1j*quil_sin(p_theta), 0, 0, quil_cos(p_theta)] ]"
          },
          quest: {
            name: "yy",
            //@TODO add function
            func: "TODO"
          },
          braket: {
            name: "yy",
            params: ["theta"]
          },
          aqasm: {
            matrix: [["cos(theta)", 0, 0, "i*sin(theta)"], [0, "cos(theta)", "-i*sin(theta)", 0], [0, "-i*sin(theta)", "cos(theta)", 0], ["i*sin(theta)", 0, 0, "cos(theta)"]],
            array: "[[np.cos(p_theta), 0, 0, 1j*np.sin(p_theta)], [0, np.cos(p_theta), -1j*np.sin(p_theta), 0], [0, -1j*np.sin(p_theta), np.cos(p_theta), 0], [1j*np.sin(p_theta), 0, 0, np.cos(p_theta)] ]",
            params: ["theta"]
          },
          qasm: {
            name: "ryy"
          },
          qiskit: {
            name: "ryy"
          },
          ionq: {
            name: "yy",
            paramsKey: "phase"
          }
        }
      },
      zz: {
        description: "Parametric 2-qubit rotation about ZZ",
        matrix: [
          ["exp(-i * theta / 2)", 0, 0, 0],
          [0, "exp(i * theta / 2)", 0, 0],
          [0, 0, "exp(i * theta / 2)", 0],
          [0, 0, 0, "exp(-i * theta / 2)"]
        ],
        numTargetQubits: 2,
        numControlQubits: 0,
        params: ["theta"],
        drawingInfo: {
          connectors: ["box", "box"],
          label: "ZZ"
        },
        exportInfo: {
          quil: {
            name: "zz",
            params: ["theta"],
            defgate: `DEFGATE zz(%theta):
    EXP(-i * %theta / 2), 0, 0, 0
    0, EXP(i * %theta / 2), 0, 0
    0, 0, EXP(i * %theta / 2), 0
    0, 0, 0, EXP(-i * %theta / 2)`
          },
          pyquil: {
            name: "zz",
            params: ["theta"],
            array: "[ [ quil_exp(-1j * p_theta / 2), 0, 0, 0 ], [ 0, quil_exp(1j * p_theta / 2), 0, 0], [ 0, 0, quil_exp(1j * p_theta / 2), 0 ], [ 0, 0, 0, quil_exp(-1j * p_theta / 2) ] ]"
          },
          qasm: {
            name: "rzz"
          },
          qiskit: {
            name: "rzz"
          },
          ionq: {
            name: "zz",
            paramsKey: "phase"
          }
        }
      },
      xy: {
        description: "XY gate",
        matrix: [
          [1, 0, 0, 0],
          [0, "cos(phi / 2)", "i * sin(phi / 2)", 0],
          [0, "i * sin(phi / 2)", "cos(phi / 2)", 0],
          [0, 0, 0, 1]
        ],
        numTargetQubits: 2,
        numControlQubits: 0,
        params: ["phi"],
        drawingInfo: {
          connectors: ["box", "box"],
          label: "XY"
        },
        exportInfo: {
          quil: {
            name: "XY",
            params: [
              "phi"
            ]
          },
          qasm: {
            equivalent: [
              { name: "rz", params: { phi: "3*pi/4" }, wires: [0] },
              { name: "rx", params: { theta: "pi/2" }, wires: [0] },
              { name: "rz", params: { phi: "-3*pi/4" }, wires: [1] },
              { name: "rx", params: { theta: "pi/2" }, wires: [1] },
              { name: "cz", wires: [1, 0] },
              { name: "rz", params: { phi: "-1*pi/2" }, wires: [0] },
              { name: "rx", params: { theta: "pi/2" }, wires: [0] },
              { name: "rz", params: { phi: "phi/2" }, wires: [0] },
              { name: "rx", params: { theta: "-1*pi/2" }, wires: [0] },
              { name: "rz", params: { phi: "pi/2" }, wires: [1] },
              { name: "rx", params: { theta: "pi/2" }, wires: [1] },
              { name: "rz", params: { phi: "phi/2" }, wires: [1] },
              { name: "rx", params: { theta: "-1*pi/2" }, wires: [1] },
              { name: "cz", wires: [1, 0] },
              { name: "rz", params: { phi: "-1*pi/2" }, wires: [0] },
              { name: "rx", params: { theta: "pi/2" }, wires: [0] },
              { name: "rz", params: { phi: "pi/4" }, wires: [0] },
              { name: "rz", params: { phi: "-1*pi/2" }, wires: [1] },
              { name: "rx", params: { theta: "-1*pi/2" }, wires: [1] },
              { name: "rz", params: { phi: "3*pi/4" }, wires: [1] }
            ]
          },
          qiskit: {
            equivalent: [
              { name: "rz", params: { phi: "3*pi/4" }, wires: [0] },
              { name: "rx", params: { theta: "pi/2" }, wires: [0] },
              { name: "rz", params: { phi: "-3*pi/4" }, wires: [1] },
              { name: "rx", params: { theta: "pi/2" }, wires: [1] },
              { name: "cz", wires: [1, 0] },
              { name: "rz", params: { phi: "-1*pi/2" }, wires: [0] },
              { name: "rx", params: { theta: "pi/2" }, wires: [0] },
              { name: "rz", params: { phi: "phi/2" }, wires: [0] },
              { name: "rx", params: { theta: "-1*pi/2" }, wires: [0] },
              { name: "rz", params: { phi: "pi/2" }, wires: [1] },
              { name: "rx", params: { theta: "pi/2" }, wires: [1] },
              { name: "rz", params: { phi: "phi/2" }, wires: [1] },
              { name: "rx", params: { theta: "-1*pi/2" }, wires: [1] },
              { name: "cz", wires: [1, 0] },
              { name: "rz", params: { phi: "-1*pi/2" }, wires: [0] },
              { name: "rx", params: { theta: "pi/2" }, wires: [0] },
              { name: "rz", params: { phi: "pi/4" }, wires: [0] },
              { name: "rz", params: { phi: "-1*pi/2" }, wires: [1] },
              { name: "rx", params: { theta: "-1*pi/2" }, wires: [1] },
              { name: "rz", params: { phi: "3*pi/4" }, wires: [1] }
            ]
          },
          cirq: {
            name: "xy",
            params: ["phi"],
            array: "[[1, 0, 0, 0], [0, np.cos(p_phi/2), 1j*np.sin(p_phi/2), 0], [0, 1j*np.sin(p_phi/2), np.cos(p_phi/2), 0], [0, 0, 0, 1]]",
            notTfqSupported: !0
          },
          braket: {
            name: "xy",
            params: ["phi"]
          },
          aqasm: {
            matrix: [[1, 0, 0, 0], [0, "cos(phi / 2)", "i * sin(phi / 2)", 0], [0, "i * sin(phi / 2)", "cos(phi / 2)", 0], [0, 0, 0, 1]],
            array: "[[1, 0, 0, 0], [0, np.cos(p_phi/2), 1j*np.sin(p_phi/2), 0], [0, 1j*np.sin(p_phi/2), np.cos(p_phi/2), 0], [0, 0, 0, 1]]",
            params: ["phi"]
          }
        }
      },
      ms: {
        description: "Mølmer-Sørensen gate",
        matrix: [
          ["1/sqrt(2)", 0, 0, "(-i*exp(-i*(phi0+phi1)))/sqrt(2)"],
          [0, "1/sqrt(2)", "(-i*exp(-i*(phi0-phi1)))/sqrt(2)", 0],
          [0, "(-i*exp(i*(phi0-phi1)))/sqrt(2)", "1/sqrt(2)", 0],
          ["(-i*exp(i*(phi0+phi1)))/sqrt(2)", 0, 0, "1/sqrt(2)"]
        ],
        numTargetQubits: 2,
        numControlQubits: 0,
        params: ["phi0", "phi1"],
        drawingInfo: {
          connectors: ["box", "box"],
          label: "MS"
        },
        exportInfo: {
          quil: {
            name: "ms",
            params: ["phi0", "phi1"],
            defgate: `DEFGATE ms(%phi0, %phi1):
    1/SQRT(2), 0, 0, (-i*EXP(-i*(%phi0+%phi1)))/SQRT(2)
    0, 1/SQRT(2), (-i*EXP(-i*(%phi0-%phi1)))/SQRT(2), 0
    0, (-i*EXP(i*(%phi0-%phi1)))/SQRT(2), 1/SQRT(2), 0
    (-i*EXP(i*(%phi0+%phi1)))/SQRT(2), 0, 0, 1/SQRT(2)`
          },
          pyquil: {
            name: "ms",
            params: ["phi0", "phi1"],
            array: "[ [ 1/quil_sqrt(2), 0, 0, (-1j*quil_exp(-1j*(p_phi0+p_phi1)))/quil_sqrt(2) ], [ 0, 1/quil_sqrt(2), (-1j*quil_exp(-1j*(p_phi0-p_phi1)))/quil_sqrt(2), 0 ], [ 0, (-1j*quil_exp(1j*(p_phi0-p_phi1)))/quil_sqrt(2), 1/quil_sqrt(2), 0 ], [ (-1j*quil_exp(1j*(p_phi0+p_phi1)))/quil_sqrt(2), 0, 0, 1/quil_sqrt(2) ] ]"
          },
          cirq: {
            name: "ms"
          },
          quest: {
            name: "ms",
            //@TODO add function
            func: "TODO"
          },
          qasm: {
            name: "ms"
          },
          qiskit: {
            name: "ms"
          },
          braket: {
            name: "unitary",
            params: ["phi0", "phi1"],
            array: "[ [ 1/np.sqrt(2), 0, 0, (-1j*np.exp(-1j*(p_phi0+p_phi1)))/np.sqrt(2) ], [ 0, 1/np.sqrt(2), (-1j*np.exp(-1j*(p_phi0-p_phi1)))/np.sqrt(2), 0 ], [ 0, (-1j*np.exp(1j*(p_phi0-p_phi1)))/np.sqrt(2), 1/np.sqrt(2), 0 ], [ (-1j*np.exp(1j*(p_phi0+p_phi1)))/np.sqrt(2), 0, 0, 1/np.sqrt(2) ] ]"
          },
          aqasm: {
            matrix: [["1/sqrt(2)", 0, 0, "(-1i*exp(-1i*(phi0+phi1)))/sqrt(2)"], [0, "1/sqrt(2)", "(-1i*exp(-1i*(phi0-phi1)))/sqrt(2)", 0], [0, "(-1i*exp(1i*(phi0-phi1)))/sqrt(2)", "1/sqrt(2)", 0], ["(-1i*exp(1i*(phi0+phi1)))/sqrt(2)", 0, 0, "1/sqrt(2)"]],
            array: "[ [ 1/np.sqrt(2), 0, 0, (-1j*np.exp(-1j*(p_phi0+p_phi1)))/np.sqrt(2) ], [ 0, 1/np.sqrt(2), (-1j*np.exp(-1j*(p_phi0-p_phi1)))/np.sqrt(2), 0 ], [ 0, (-1j*np.exp(1j*(p_phi0-p_phi1)))/np.sqrt(2), 1/np.sqrt(2), 0 ], [ (-1j*np.exp(1j*(p_phi0+p_phi1)))/np.sqrt(2), 0, 0, 1/np.sqrt(2) ] ]",
            params: ["phi0", "phi1"]
          },
          ionq: {
            name: "ms",
            paramsKey: "phases"
          }
        }
      },
      cr2: {
        description: "Controlled PI/2 rotation over Z-axis",
        matrix: [
          [1, 0, 0, 0],
          [0, 1, 0, 0],
          [0, 0, 1, 0],
          [0, 0, 0, "exp(i * pi / 2)"]
        ],
        numTargetQubits: 2,
        numControlQubits: 0,
        params: [],
        drawingInfo: {
          connectors: ["dot", "box"],
          label: "Z&#x1D6D1;/2",
          root: "r2"
        },
        exportInfo: {
          quil: {
            replacement: {
              name: "cu1",
              params: {
                lambda: "pi/2"
              }
            }
          },
          cirq: {
            replacement: {
              name: "cu1",
              params: {
                lambda: "pi/2"
              }
            }
          },
          quest: {
            name: "controlledPhaseShift",
            params: { theta: "M_PI/2" }
          },
          qsharp: {
            replacement: {
              name: "cu1",
              params: {
                lambda: "pi/2"
              }
            }
          },
          qasm: {
            replacement: [
              { name: "cu1", params: { lambda: "pi/2" } }
            ]
          },
          qiskit: {
            replacement: [
              { name: "cu1", params: { lambda: "pi/2" } }
            ]
          },
          quirk: {
            name: "Z^½",
            controlled: !0
          },
          braket: {
            name: "unitary",
            array: "[[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, np.exp(1j * np.pi / 2)] ]"
          },
          aqasm: {
            name: "S",
            controlled: !0
          }
        }
      },
      cr4: {
        description: "Controlled PI/4 rotation over Z-axis",
        matrix: [
          [1, 0, 0, 0],
          [0, 1, 0, 0],
          [0, 0, 1, 0],
          [0, 0, 0, "exp(i * pi / 4)"]
        ],
        numTargetQubits: 2,
        numControlQubits: 0,
        params: [],
        drawingInfo: {
          connectors: ["dot", "box"],
          label: "Z&#x1D6D1;/4",
          root: "r4"
        },
        exportInfo: {
          quil: {
            replacement: {
              name: "cu1",
              params: {
                lambda: "pi/4"
              }
            }
          },
          cirq: {
            replacement: {
              name: "cu1",
              params: {
                lambda: "pi/4"
              }
            }
          },
          quest: {
            name: "controlledPhaseShift",
            params: { theta: "M_PI/4" }
          },
          qsharp: {
            replacement: {
              name: "cu1",
              params: {
                lambda: "pi/4"
              }
            }
          },
          qasm: {
            replacement: [
              { name: "cu1", params: { lambda: "pi/4" } }
            ]
          },
          qiskit: {
            replacement: [
              { name: "cu1", params: { lambda: "pi/4" } }
            ]
          },
          quirk: {
            name: "Z^¼",
            controlled: !0
          },
          braket: {
            name: "unitary",
            array: "[[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, np.exp(1j * np.pi / 4)] ]"
          },
          aqasm: {
            name: "T",
            controlled: !0
          }
        }
      },
      cr8: {
        description: "Controlled PI/8 rotation over Z-axis",
        matrix: [
          [1, 0, 0, 0],
          [0, 1, 0, 0],
          [0, 0, 1, 0],
          [0, 0, 0, "exp(i * pi / 8)"]
        ],
        numTargetQubits: 2,
        numControlQubits: 0,
        params: [],
        drawingInfo: {
          connectors: ["dot", "box"],
          label: "Z&#x1D6D1;/8",
          root: "r8"
        },
        exportInfo: {
          quil: {
            replacement: {
              name: "cu1",
              params: {
                lambda: "pi/8"
              }
            }
          },
          cirq: {
            replacement: {
              name: "cu1",
              params: {
                lambda: "pi/8"
              }
            }
          },
          quest: {
            name: "controlledPhaseShift",
            params: { theta: "M_PI/8" }
          },
          qsharp: {
            replacement: {
              name: "cu1",
              params: {
                lambda: "pi/8"
              }
            }
          },
          qasm: {
            replacement: [
              { name: "cu1", params: { lambda: "pi/8" } }
            ]
          },
          qiskit: {
            replacement: [
              { name: "cu1", params: { lambda: "pi/8" } }
            ]
          },
          quirk: {
            name: "Z^⅛",
            controlled: !0
          },
          braket: {
            name: "unitary",
            array: "[[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, np.exp(1j * np.pi / 8)] ]"
          },
          aqasm: {
            matrix: [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, "exp(i * pi / 8)"]],
            array: "[[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, np.exp(1j * np.pi / 8)] ]"
          }
        }
      },
      crx: {
        description: "Controlled rotation around the X-axis by given angle",
        matrix: [
          [1, 0, 0, 0],
          [0, 1, 0, 0],
          [0, 0, "cos(theta / 2)", "-i * sin(theta / 2)"],
          [0, 0, "-i * sin(theta / 2)", "cos(theta / 2)"]
        ],
        numTargetQubits: 1,
        numControlQubits: 1,
        params: ["theta"],
        drawingInfo: {
          connectors: ["dot", "box"],
          label: "RX",
          root: "rx"
        },
        exportInfo: {
          quil: {
            name: "crx",
            params: ["theta"],
            defgate: `DEFGATE crx(%theta):
    1, 0, 0, 0
    0, 1, 0, 0
    0, 0, COS(%theta/2), -i*SIN(%theta/2)
    0, 0, -i*SIN(%theta/2), COS(%theta/2)`
          },
          cirq: {
            replacement: {
              name: "rx",
              params: { theta: "theta" },
              type: "controlled",
              notTfqSupported: !0
            }
          },
          pyquil: {
            name: "crx",
            params: ["theta"],
            array: "[[ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, quil_cos(p_theta / 2), -1j*quil_sin(p_theta / 2) ], [ 0, 0, -1j*quil_sin(p_theta / 2), quil_cos(p_theta / 2) ]]"
          },
          quest: {
            name: "controlledUnitary",
            params: ["theta"],
            matrix: [
              [["cos(theta/2)", "0"], ["0", "-sin(theta/2)"]],
              [["0", "-sin(theta/2)"], ["cos(theta/2)", "0"]]
            ]
          },
          qsharp: {
            name: "Controlled Rx",
            params: ["theta"]
          },
          qasm: {
            replacement: [
              { name: "cu3", params: { theta: "theta", phi: "-1*pi/2", lambda: "pi/2" } }
            ]
          },
          qiskit: {
            replacement: [
              { name: "cu3", params: { theta: "theta", phi: "-1*pi/2", lambda: "pi/2" } }
            ]
          },
          braket: {
            name: "unitary",
            params: ["theta"],
            array: "[[ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, np.cos(p_theta / 2), -1j*np.sin(p_theta / 2) ], [ 0, 0, -1j*np.sin(p_theta / 2), np.cos(p_theta / 2) ]]"
          },
          aqasm: {
            name: "RX",
            controlled: !0
          }
        }
      },
      cry: {
        description: "Controlled rotation around the Y-axis by given angle",
        matrix: [
          [1, 0, 0, 0],
          [0, 1, 0, 0],
          [0, 0, "cos(theta / 2)", "-1 * sin(theta / 2)"],
          [0, 0, "sin(theta / 2)", "cos(theta / 2)"]
        ],
        numTargetQubits: 1,
        numControlQubits: 1,
        params: ["theta"],
        drawingInfo: {
          connectors: ["dot", "box"],
          label: "RY",
          root: "ry"
        },
        exportInfo: {
          quil: {
            name: "cry",
            params: ["theta"],
            defgate: `DEFGATE cry(%theta):
    1, 0, 0, 0
    0, 1, 0, 0
    0, 0, COS(%theta/2), -1*SIN(%theta/2)
    0, 0, SIN(%theta/2), COS(%theta/2)`
          },
          cirq: {
            replacement: {
              name: "ry",
              params: { theta: "theta" },
              type: "controlled",
              notTfqSupported: !0
            }
          },
          pyquil: {
            name: "cry",
            params: ["theta"],
            array: "[[ 1, 0, 0, 0 ],[ 0, 1, 0, 0 ],[ 0, 0, quil_cos(p_theta / 2), -1*quil_sin(p_theta / 2) ],[ 0, 0, quil_sin(p_theta / 2), quil_cos(p_theta / 2) ]]"
          },
          quest: {
            name: "controlledUnitary",
            params: ["theta"],
            matrix: [
              [["cos(theta/2)", "0"], ["-sin(theta/2)", "0"]],
              [["sin(theta/2)", "0"], ["cos(theta/2)", "0"]]
            ]
          },
          qsharp: {
            name: "Controlled Ry",
            params: ["theta"]
          },
          qasm: {
            equivalent: [
              { name: "u3", params: { theta: "theta/2", phi: "0", lambda: "0" }, wires: [1] },
              { name: "cx", wires: [0, 1] },
              { name: "u3", params: { theta: "-1*theta / 2", phi: "0", lambda: "0" }, wires: [1] },
              { name: "cx", wires: [0, 1] }
            ]
          },
          qiskit: {
            equivalent: [
              { name: "u3", params: { theta: "theta/2", phi: "0", lambda: "0" }, wires: [1] },
              { name: "cx", wires: [0, 1] },
              { name: "u3", params: { theta: "-1*theta / 2", phi: "0", lambda: "0" }, wires: [1] },
              { name: "cx", wires: [0, 1] }
            ]
          },
          braket: {
            name: "unitary",
            params: ["theta"],
            array: "[[ 1, 0, 0, 0 ],[ 0, 1, 0, 0 ],[ 0, 0, np.cos(p_theta / 2), -1*np.sin(p_theta / 2) ],[ 0, 0, np.sin(p_theta / 2), np.cos(p_theta / 2) ]]"
          },
          aqasm: {
            name: "RY",
            controlled: !0
          }
        }
      },
      crz: {
        description: "Controlled rotation around the Z-axis by given angle",
        matrix: [
          [1, 0, 0, 0],
          [0, 1, 0, 0],
          [0, 0, "cos(phi / 2) - i * sin(phi / 2)", 0],
          [0, 0, 0, "cos(phi / 2) + i * sin(phi / 2)"]
        ],
        numTargetQubits: 1,
        numControlQubits: 1,
        params: ["phi"],
        drawingInfo: {
          connectors: ["dot", "dot"],
          label: "RZ",
          root: "rz"
        },
        exportInfo: {
          quil: {
            name: "crz",
            params: ["phi"],
            defgate: `DEFGATE crz(%phi):
    1, 0, 0, 0
    0, 1, 0, 0
    0, 0, COS(%phi / 2) - i * SIN(%phi / 2), 0
    0, 0, 0, COS(%phi / 2) + i * SIN(%phi / 2)`
          },
          pyquil: {
            name: "crz",
            params: ["phi"],
            array: "[[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, quil_cos(p_phi / 2) - 1j * quil_sin(p_phi / 2), 0], [0, 0, 0, quil_cos(p_phi / 2) + 1j * quil_sin(p_phi / 2)]]"
          },
          cirq: {
            replacement: {
              name: "rz",
              params: { phi: "phi" },
              type: "controlled"
            }
          },
          quest: {
            name: "controlledRotateZ",
            params: ["theta"]
          },
          qsharp: {
            name: "Controlled Rz",
            params: ["phi"]
          },
          braket: {
            name: "unitary",
            params: ["phi"],
            array: "[[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, np.cos(p_phi / 2) - 1j * np.sin(p_phi / 2), 0], [0, 0, 0, np.cos(p_phi / 2) + 1j * np.sin(p_phi / 2)]]"
          },
          aqasm: {
            name: "RZ",
            controlled: !0
          }
        }
      },
      cu1: {
        description: "Controlled rotation about the Z axis",
        matrix: [
          [1, 0, 0, 0],
          [0, 1, 0, 0],
          [0, 0, 1, 0],
          [0, 0, 0, "exp(i * lambda)"]
        ],
        numTargetQubits: 2,
        numControlQubits: 0,
        params: ["lambda"],
        drawingInfo: {
          connectors: ["dot", "box"],
          label: "CU1",
          root: "u1"
        },
        exportInfo: {
          quil: {
            name: "CPHASE",
            params: ["lambda"]
          },
          cirq: {
            name: "cu1",
            params: ["lambda"],
            array: "[[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, np.exp(1j*p_lambda)]]",
            notTfqSupported: !0
          },
          quest: {
            name: "controlledPhaseShift",
            params: ["theta"]
          },
          braket: {
            name: "unitary",
            params: ["lambda"],
            array: "[[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, np.exp(1j*p_lambda)]]"
          },
          aqasm: {
            name: "PH",
            controlled: !0
          },
          qiskit: {
            name: "cp"
          }
        }
      },
      cu2: {
        description: "Controlled rotation about the X+Z axis",
        matrix: [
          [1, 0, 0, 0],
          [0, 1, 0, 0],
          [0, 0, "1 / sqrt(2)", "-exp(i * lambda) * 1 / sqrt(2)"],
          [0, 0, "exp(i * phi) * 1 / sqrt(2)", "exp(i * lambda + i * phi) * 1 / sqrt(2)"]
        ],
        numTargetQubits: 1,
        numControlQubits: 1,
        params: ["phi", "lambda"],
        drawingInfo: {
          connectors: ["dot", "box"],
          label: "CU2",
          root: "u2"
        },
        exportInfo: {
          quil: {
            name: "cu2",
            params: ["phi", "lambda"],
            defgate: `DEFGATE cu2(%phi, %lambda):
    1, 0, 0, 0
    0, 1, 0, 0
    0, 0, 1/SQRT(2), -1*EXP(i*%lambda)*1/SQRT(2)
    0, 0, EXP(i*%phi)*1/SQRT(2), EXP(i*%lambda + i*%phi)*1/SQRT(2)`
          },
          pyquil: {
            name: "cu2",
            params: ["phi", "lambda"],
            array: "[[1,0,0,0],[0,1,0,0],[0, 0, 1/quil_sqrt(2), -quil_exp(1j*p_lambda)*1/quil_sqrt(2)],[0, 0, quil_exp(1j*p_phi)*1/quil_sqrt(2), quil_exp(1j*p_lambda+1j*p_phi)*1/quil_sqrt(2)]]"
          },
          cirq: {
            name: "cu2",
            params: ["phi", "lambda"],
            array: "[[1,0,0,0],[0,1,0,0],[0, 0, 1/np.sqrt(2), -np.exp(1j*p_lambda)*1/np.sqrt(2)],[0, 0, np.exp(1j*p_phi)*1/np.sqrt(2), np.exp(1j*p_lambda+1j*p_phi)*1/np.sqrt(2)]]",
            notTfqSupported: !0
          },
          quest: {
            name: "controlledUnitary",
            params: ["phi", "lambda"],
            matrix: [
              [["1/sqrt(2)", "0"], ["-cos(lambda)/sqrt(2)", "-sin(lambda)/sqrt(2)"]],
              [["cos(phi)/sqrt(2)", "sin(phi)/sqrt(2)"], ["cos(lambda+phi)/sqrt(2)", "sin(lambda+phi)/sqrt(2)"]]
            ]
          },
          qasm: {
            replacement: [
              { name: "cu3", params: { theta: "pi/2", phi: "phi", lambda: "lambda" } }
            ]
          },
          qiskit: {
            replacement: [
              { name: "cu3", params: { theta: "pi/2", phi: "phi", lambda: "lambda" } }
            ]
          },
          braket: {
            name: "unitary",
            params: ["phi", "lambda"],
            array: "[[1,0,0,0],[0,1,0,0],[0, 0, 1/np.sqrt(2), -np.exp(1j*p_lambda)*1/np.sqrt(2)],[0, 0, np.exp(1j*p_phi)*1/np.sqrt(2), np.exp(1j*p_lambda+1j*p_phi)*1/np.sqrt(2)]]"
          },
          aqasm: {
            matrix: [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, "1 / sqrt(2)", "-exp(i * lambda) * 1 / sqrt(2)"], [0, 0, "exp(i * phi) * 1 / sqrt(2)", "exp(i * lambda + i * phi) * 1 / sqrt(2)"]],
            array: "[[1,0,0,0],[0,1,0,0],[0, 0, 1/np.sqrt(2), -np.exp(1j*p_lambda)*1/np.sqrt(2)],[0, 0, np.exp(1j*p_phi)*1/np.sqrt(2), np.exp(1j*p_lambda+1j*p_phi)*1/np.sqrt(2)]]",
            params: ["phi", "lambda"]
          }
        }
      },
      cu3: {
        description: "Controlled rotation gate with 3 Euler angles",
        matrix: [
          [1, 0, 0, 0],
          [0, 1, 0, 0],
          [0, 0, "cos(theta/2)", "-exp(i * lambda) * sin(theta / 2)"],
          [0, 0, "exp(i * phi) * sin(theta / 2)", "exp(i * lambda + i * phi) * cos(theta / 2)"]
        ],
        numTargetQubits: 1,
        numControlQubits: 1,
        params: ["theta", "phi", "lambda"],
        drawingInfo: {
          connectors: ["dot", "box"],
          label: "CU3",
          root: "u3"
        },
        exportInfo: {
          quil: {
            name: "cu3",
            params: ["theta", "phi", "lambda"],
            defgate: `DEFGATE cu3(%theta, %phi, %lambda):
    1, 0, 0, 0
    0, 1, 0, 0
    0, 0, COS(%theta/2), -1*EXP(i*%lambda)*SIN(%theta/2)
    0, 0, EXP(i*%phi)*SIN(%theta/2), EXP(i*%lambda + i*%phi)*COS(%theta/2)`
          },
          pyquil: {
            name: "cu3",
            params: ["theta", "phi", "lambda"],
            array: "[[1,0,0,0],[0,1,0,0],[0, 0, quil_cos(p_theta/2),-quil_exp(1j*p_lambda)*quil_sin(p_theta/2)],[0, 0, quil_exp(1j*p_phi)*quil_sin(p_theta/2),quil_exp(1j*p_lambda+1j*p_phi)*quil_cos(p_theta/2)]]"
          },
          cirq: {
            name: "cu3",
            params: ["theta", "phi", "lambda"],
            array: "[[1,0,0,0],[0,1,0,0],[0, 0, np.cos(p_theta/2),-np.exp(1j*p_lambda)*np.sin(p_theta/2)],[0, 0, np.exp(1j*p_phi)*np.sin(p_theta/2),np.exp(1j*p_lambda+1j*p_phi)*np.cos(p_theta/2)]]",
            notTfqSupported: !0
          },
          quest: {
            name: "controlledUnitary",
            params: ["theta", "phi", "lambda"],
            matrix: [
              [["cos(theta/2)", "0"], ["-cos(lambda)*sin(theta/2)", "-sin(lambda)*sin(theta/2)"]],
              [["cos(phi)*sin(theta/2)", "sin(phi)*sin(theta/2)"], ["cos(lambda+phi)*cos(theta/2)", "sin(lambda+phi)*cos(theta/2)"]]
            ]
          },
          braket: {
            name: "unitary",
            params: ["theta", "phi", "lambda"],
            array: "[[1,0,0,0],[0,1,0,0],[0, 0, np.cos(p_theta/2),-np.exp(1j*p_lambda)*np.sin(p_theta/2)],[0, 0, np.exp(1j*p_phi)*np.sin(p_theta/2),np.exp(1j*p_lambda+1j*p_phi)*np.cos(p_theta/2)]]"
          },
          aqasm: {
            matrix: [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, "cos(theta/2)", "-exp(i * lambda) * sin(theta / 2)"], [0, 0, "exp(i * phi) * sin(theta / 2)", "exp(i * lambda + i * phi) * cos(theta / 2)"]],
            array: "[[1,0,0,0],[0,1,0,0],[0, 0, np.cos(p_theta/2),-np.exp(1j*p_lambda)*np.sin(p_theta/2)],[0, 0, np.exp(1j*p_phi)*np.sin(p_theta/2),np.exp(1j*p_lambda+1j*p_phi)*np.cos(p_theta/2)]]",
            params: ["theta", "phi", "lambda"]
          },
          qiskit: {
            name: "cu"
          }
        }
      },
      cs: {
        description: "Controlled PI/2 rotation over Z-axis (synonym for `cr2`)",
        matrix: [
          [1, 0, 0, 0],
          [0, 1, 0, 0],
          [0, 0, 1, 0],
          [0, 0, 0, "exp(i * pi / 2)"]
        ],
        numTargetQubits: 2,
        numControlQubits: 0,
        params: [],
        drawingInfo: {
          connectors: ["dot", "box"],
          label: "S",
          root: "s"
        },
        exportInfo: {
          quil: {
            replacement: {
              name: "cu1",
              params: {
                lambda: "pi/2"
              }
            }
          },
          cirq: {
            replacement: {
              name: "cu1",
              params: {
                lambda: "pi/2"
              }
            }
          },
          quest: {
            name: "controlledPhaseShift",
            params: { theta: "M_PI/2" }
          },
          qsharp: {
            replacement: {
              name: "cu1",
              params: {
                lambda: "pi/2"
              }
            }
          },
          qasm: {
            replacement: [
              { name: "cu1", params: { lambda: "pi/2" } }
            ]
          },
          qiskit: {
            replacement: [
              { name: "cu1", params: { lambda: "pi/2" } }
            ]
          },
          quirk: {
            name: "Z^½",
            controlled: !0
          },
          braket: {
            name: "unitary",
            array: "[[1,0,0,0],[0,1,0,0],[0, 0, 1, 0],[0, 0, 0, np.exp(1j * np.pi / 2)]]"
          },
          aqasm: {
            name: "S",
            controlled: !0
          }
        }
      },
      ct: {
        description: "Controlled PI/4 rotation over Z-axis (synonym for `cr4`)",
        matrix: [
          [1, 0, 0, 0],
          [0, 1, 0, 0],
          [0, 0, 1, 0],
          [0, 0, 0, "exp(i * pi / 4)"]
        ],
        numTargetQubits: 2,
        numControlQubits: 0,
        params: [],
        drawingInfo: {
          connectors: ["dot", "box"],
          label: "T",
          root: "t"
        },
        exportInfo: {
          quil: {
            replacement: {
              name: "cu1",
              params: {
                lambda: "pi/4"
              }
            }
          },
          cirq: {
            replacement: {
              name: "cu1",
              params: {
                lambda: "pi/4"
              }
            }
          },
          quest: {
            name: "controlledPhaseShift",
            params: { theta: "M_PI/4" }
          },
          qsharp: {
            replacement: {
              name: "cu1",
              params: {
                lambda: "pi/4"
              }
            }
          },
          qasm: {
            replacement: [
              { name: "cu1", params: { lambda: "pi/4" } }
            ]
          },
          qiskit: {
            replacement: [
              { name: "cu1", params: { lambda: "pi/4" } }
            ]
          },
          quirk: {
            name: "Z^¼",
            controlled: !0
          },
          braket: {
            name: "unitary",
            array: "[[1,0,0,0],[0,1,0,0],[0, 0, 1, 0],[0, 0, 0, np.exp(1j * np.pi / 4)]]"
          },
          aqasm: {
            name: "T",
            controlled: !0
          }
        }
      },
      csdg: {
        description: "Controlled (-PI/2) rotation over Z-axis",
        matrix: [
          [1, 0, 0, 0],
          [0, 1, 0, 0],
          [0, 0, 1, 0],
          [0, 0, 0, "exp(-i * pi / 2)"]
        ],
        numTargetQubits: 2,
        numControlQubits: 0,
        params: [],
        drawingInfo: {
          connectors: ["dot", "box"],
          label: "S&#8224;",
          root: "sdg"
        },
        exportInfo: {
          quil: {
            replacement: {
              name: "cu1",
              params: {
                lambda: "-pi/2"
              }
            }
          },
          cirq: {
            replacement: {
              name: "cu1",
              params: {
                lambda: "-pi/2"
              }
            }
          },
          quest: {
            name: "controlledPhaseShift",
            params: { theta: "-M_PI/2" }
          },
          qsharp: {
            replacement: {
              name: "cu1",
              params: {
                lambda: "-pi/2"
              }
            }
          },
          qasm: {
            replacement: [
              { name: "cu1", params: { lambda: "-1*pi/2" } }
            ]
          },
          qiskit: {
            replacement: [
              { name: "cu1", params: { lambda: "-1*pi/2" } }
            ]
          },
          quirk: {
            name: "Z^-½",
            controlled: !0
          },
          braket: {
            name: "unitary",
            array: "[[1,0,0,0],[0,1,0,0],[0, 0, 1, 0],[0, 0, 0, np.exp(-1j * np.pi / 2)]]"
          },
          aqasm: {
            name: "S",
            controlled: !0,
            dagger: !0
          }
        }
      },
      ctdg: {
        description: "Controlled (-PI/4) rotation over Z-axis",
        matrix: [
          [1, 0, 0, 0],
          [0, 1, 0, 0],
          [0, 0, 1, 0],
          [0, 0, 0, "exp(-i * pi / 4)"]
        ],
        numTargetQubits: 2,
        numControlQubits: 0,
        params: [],
        drawingInfo: {
          connectors: ["dot", "box"],
          label: "T&#8224;",
          root: "tdg"
        },
        exportInfo: {
          quil: {
            replacement: {
              name: "cu1",
              params: {
                lambda: "-pi/4"
              }
            }
          },
          cirq: {
            replacement: {
              name: "cu1",
              params: {
                lambda: "-pi/4"
              }
            }
          },
          quest: {
            name: "controlledPhaseShift",
            params: { theta: "-M_PI/4" }
          },
          qsharp: {
            replacement: {
              name: "cu1",
              params: {
                lambda: "-pi/4"
              }
            }
          },
          qasm: {
            replacement: [
              { name: "cu1", params: { lambda: "-1*pi/4" } }
            ]
          },
          qiskit: {
            replacement: [
              { name: "cu1", params: { lambda: "-1*pi/4" } }
            ]
          },
          quirk: {
            name: "Z^-¼",
            controlled: !0
          },
          braket: {
            name: "unitary",
            array: "[[1,0,0,0],[0,1,0,0],[0, 0, 1, 0],[0, 0, 0, np.exp(-1j * np.pi / 4)]]"
          },
          aqasm: {
            name: "T",
            controlled: !0,
            dagger: !0
          }
        }
      },
      ccx: {
        description: 'Toffoli aka "CCNOT" gate',
        matrix: [
          [1, 0, 0, 0, 0, 0, 0, 0],
          [0, 1, 0, 0, 0, 0, 0, 0],
          [0, 0, 1, 0, 0, 0, 0, 0],
          [0, 0, 0, 1, 0, 0, 0, 0],
          [0, 0, 0, 0, 1, 0, 0, 0],
          [0, 0, 0, 0, 0, 1, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 1],
          [0, 0, 0, 0, 0, 0, 1, 0]
        ],
        numTargetQubits: 1,
        numControlQubits: 2,
        params: [],
        drawingInfo: {
          connectors: ["dot", "dot", "not"],
          label: "CCNOT",
          root: "x"
        },
        exportInfo: {
          quil: {
            name: "CCNOT"
          },
          cirq: {
            name: "CCX",
            notTfqSupported: !0
          },
          quest: {
            name: "ccx",
            func: `void ccx(Qureg qubits, const int q1, const int q2, const int q3) {
    hadamard(qubits, q3);
    controlledNot(qubits, q2, q3);
    phaseShift(qubits, q3, -M_PI/4);
    controlledNot(qubits, q1, q3);
    tGate(qubits, q3);
    controlledNot(qubits, q2, q3);
    phaseShift(qubits, q3, -M_PI/4);
    controlledNot(qubits, q1, q3);
    tGate(qubits, q2);
    tGate(qubits, q3);
    controlledNot(qubits, q1, q2);
    hadamard(qubits, q3);
    tGate(qubits, q1);
    phaseShift(qubits, q2, -M_PI/4);
    controlledNot(qubits, q1, q2);
}`
          },
          qsharp: {
            name: "CCNOT"
          },
          quirk: {
            name: "X",
            controlled: !0
          },
          braket: {
            name: "ccnot"
          },
          aqasm: {
            name: "CCNOT"
          }
        }
      },
      cswap: {
        description: 'Controlled swap aka "Fredkin" gate',
        matrix: [
          [1, 0, 0, 0, 0, 0, 0, 0],
          [0, 1, 0, 0, 0, 0, 0, 0],
          [0, 0, 1, 0, 0, 0, 0, 0],
          [0, 0, 0, 1, 0, 0, 0, 0],
          [0, 0, 0, 0, 1, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 1, 0],
          [0, 0, 0, 0, 0, 1, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 1]
        ],
        numTargetQubits: 2,
        numControlQubits: 1,
        params: [],
        drawingInfo: {
          connectors: ["dot", "x", "x"],
          label: "SWP",
          root: "swap"
        },
        exportInfo: {
          cirq: {
            name: "CSWAP"
          },
          quest: {
            name: "cswap",
            func: `void cswap(Qureg qubits, const int q1, const int q2, const int q3) {
    controlledNot(qubits, q3, q2);
    hadamard(qubits, q3);
    controlledNot(qubits, q2, q3);
    phaseShift(qubits, q3, -M_PI/4);
    controlledNot(qubits, q1, q3);
    tGate(qubits, q3);
    controlledNot(qubits, q2, q3);
    phaseShift(qubits, q3, -M_PI/4);
    controlledNot(qubits, q1, q3);
    tGate(qubits, q2);
    tGate(qubits, q3);
    hadamard(qubits, q3);
    controlledNot(qubits, q1, q2);
    tGate(qubits, q1);
    phaseShift(qubits, q2, -M_PI/4);
    controlledNot(qubits, q2, q3);
    controlledNot(qubits, q3, q2);
}`
          },
          qsharp: {
            name: "Controlled SWAP"
          },
          quil: {
            name: "CSWAP"
          },
          pyquil: {
            name: "CSWAP"
          },
          quirk: {
            name: "Swap",
            controlled: !0
          },
          braket: {
            name: "unitary",
            array: "[[1,0,0,0,0,0,0,0], [0,1,0,0,0,0,0,0], [0,0,1,0,0,0,0,0], [0,0,0,1,0,0,0,0], [0,0,0,0,1,0,0,0], [0,0,0,0,0,0,1,0], [0,0,0,0,0,1,0,0], [0,0,0,0,0,0,0,1]]"
          },
          aqasm: {
            name: "SWAP",
            controlled: !0
          }
        }
      },
      csrswap: {
        description: "Controlled square root of swap",
        matrix: [
          [1, 0, 0, 0, 0, 0, 0, 0],
          [0, 1, 0, 0, 0, 0, 0, 0],
          [0, 0, 1, 0, 0, 0, 0, 0],
          [0, 0, 0, 1, 0, 0, 0, 0],
          [0, 0, 0, 0, 1, 0, 0, 0],
          [0, 0, 0, 0, 0, "0.5 * (1 + i)", "0.5 * (1 - i)", 0],
          [0, 0, 0, 0, 0, "0.5 * (1 - i)", "0.5 * (1 + i)", 0],
          [0, 0, 0, 0, 0, 0, 0, 1]
        ],
        numTargetQubits: 2,
        numControlQubits: 1,
        params: [],
        drawingInfo: {
          connectors: ["dot", "box", "box"],
          label: "&#x221A;SWP",
          root: "srswap"
        },
        exportInfo: {
          quest: {
            name: "csrswap",
            //@TODO add function
            func: "TODO"
          },
          cirq: {
            replacement: {
              name: "srswap",
              type: "controlled",
              notTfqSupported: !0
            }
          },
          quil: {
            name: "csrswap",
            defgate: `DEFGATE csrswap:
    1, 0, 0, 0, 0, 0, 0, 0
    0, 1, 0, 0, 0, 0, 0, 0
    0, 0, 1, 0, 0, 0, 0, 0
    0, 0, 0, 1, 0, 0, 0, 0
    0, 0, 0, 0, 1, 0, 0, 0
    0, 0, 0, 0, 0, 0.5+0.5i, 0.5-0.5i, 0
    0, 0, 0, 0, 0, 0.5-0.5i, 0.5+0.5i, 0
    0, 0, 0, 0, 0, 0, 0, 1`
          },
          pyquil: {
            name: "csrswap",
            array: "[[1,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,0,1,0,0,0,0],[0,0,0,0,1,0,0,0],[0,0,0,0,0,0.5 * (1 + 1j),0.5 * (1 - 1j),0],[0,0,0,0,0,0.5 * (1 - 1j),0.5 * (1 + 1j),0],[0,0,0,0,0,0,0,1]]"
          },
          braket: {
            name: "unitary",
            array: "[[1,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,0,1,0,0,0,0],[0,0,0,0,1,0,0,0],[0,0,0,0,0,0.5 * (1 + 1j),0.5 * (1 - 1j),0],[0,0,0,0,0,0.5 * (1 - 1j),0.5 * (1 + 1j),0],[0,0,0,0,0,0,0,1]]"
          },
          aqasm: {
            name: "SQRTSWAP",
            controlled: !0
          }
        }
      },
      reset: {
        description: "Resets qubit",
        matrix: [],
        params: [],
        drawingInfo: {
          connectors: ["box"],
          label: "RST"
        },
        exportInfo: {
          quil: {
            name: "RESET"
          },
          cirq: {
            name: "reset",
            notTfqSupported: !0
          },
          quest: {
            name: "reset",
            //@TODO add function
            func: "TODO"
          },
          qsharp: {
            name: "Reset"
          }
        }
      },
      measure: {
        description: "Measures qubit and stores chance (0 or 1) into classical bit",
        matrix: [],
        params: [],
        drawingInfo: {
          connectors: ["gauge"],
          label: ""
        },
        exportInfo: {
          quil: {
            name: "MEASURE"
          },
          cirq: {
            name: "measure"
          },
          quest: {
            name: "measure"
          },
          qsharp: {
            name: "M"
          }
        }
      }
    }, this.init(a);
  };
  b.prototype.defaultHybridOptions = function() {
    return {
      optimizer: "Powell",
      tolerance: 1e-3,
      costFunction: {
        python: "",
        javascript: ""
      }
    };
  };
  b.prototype.init = function(a, t) {
    t = t || {}, this.numQubits = a || 1, this.gates = [], this.partitionMap = [], this.partitionCount = 0, this.partitionInfo = {}, this.params = [], this.options = {
      params: {},
      hybrid: !1,
      hybridOptions: this.defaultHybridOptions()
    }, t.keepCustomGates || (this.customGates = {}), this.cregs = {}, this.collapsed = [], this.prob = [], this.measureResetsQubit = !1, this.reverseBitOrder = !1, this.clear();
  };
  b.prototype.clearGates = function() {
    this.gates = [];
    for (var a = 0; a < this.numQubits; a++)
      this.gates.push([]);
  };
  b.prototype.clear = function() {
    this.clearGates(), this.initState();
  };
  b.prototype.resetState = function() {
    this.state = {}, this.stateBits = 0, this.partitionCache = {};
    for (var a in this.cregs) {
      var t = this.cregs[a].length || 0;
      this.cregs[a] = [];
      for (var r = 0; r < t; r++)
        this.cregs[a].push(0);
    }
    this.collapsed = [], this.prob = [], this.stats = {
      duration: 0
    };
  };
  b.prototype.initState = function() {
    this.resetState(), this.state[0] = x.complex(1, 0);
  };
  b.prototype.formatComplex = function(a, t) {
    return Yr(a.re, a.im, t);
  };
  b.prototype.multiplySquareMatrices = function(a, t) {
    for (var r = a.length, n = r, s = r, e = r, o = []; n--; )
      for (o[n] = [], s = r; s--; )
        for (o[n][s] = 0, e = r; e--; )
          a[n][e] && t[e][s] && (o[n][s] ? o[n][s] = x.add(o[n][s], x.multiply(a[n][e], t[e][s])) : o[n][s] = x.multiply(a[n][e], t[e][s]));
    return o;
  };
  b.prototype.isIdentityMatrix = function(a, t) {
    typeof t == "undefined" && (t = 14);
    for (var r = 0; r < a.length; r++)
      for (var n = 0; n < a.length; n++)
        if (x.round(a[r][n], t) != (r == n ? 1 : 0))
          return !1;
    return !0;
  };
  b.prototype.isUnitaryMatrix = function(a, t) {
    return this.isIdentityMatrix(x.multiply(a, x.ctranspose(a)), t);
  };
  b.prototype.isHermitianMatrix = function(a, t) {
    var r = this.matrixDiff(a, x.ctranspose(a));
    return r <= x.pow(10, -1 * (t || 14));
  };
  b.prototype.matrixDiff = function(a, t) {
    for (var r = 0, n = 0, s = 0; s < a.length; s++)
      for (var e = a[s], o = t[s], u = 0; u < e.length; u++) {
        var p = e[u], v = o[u], f = typeof p == "object" ? p : x.complex(p), h = typeof v == "object" ? v : x.complex(v), m = x.abs(x.subtract(f, h));
        r += m, n++;
      }
    var l = n ? r / n : 0;
    return l;
  };
  b.prototype.parseMathString = function(a) {
    var t = [], r = function(e, o) {
      if (e.isSymbolNode) {
        if (e.name == "j")
          return "i";
        t.indexOf(e.name) < 0 && t.push(e.name);
      }
    }, n = x.parse(a.replace(/[\t\n\r]/gm, "")), s = n.toString({ handler: r });
    return {
      expression: s,
      variables: t,
      node: n
    };
  };
  b.prototype.evalMathString = function(a, t) {
    t = t || {};
    var r = this.parseMathString(a), n = x.evaluate(r.expression, t);
    return n instanceof x.Matrix ? n.toArray() : n;
  };
  b.prototype.parseMatrix = function(a, t) {
    var r = this, n = null;
    typeof a == "string" ? n = r.evalMathString(a, t) : n = a;
    var s = [];
    return n.map(function(e, o) {
      Array.isArray(e) ? (s.push([]), e.map(function(u, p) {
        typeof u == "string" ? s[o].push(r.evalMathString(u, t)) : s[o].push(u);
      })) : typeof e == "string" ? s.push(r.evalMathString(e, t)) : s.push(e);
    }), s;
  };
  b.prototype.matrixHasComplexElement = function(a) {
    for (var t = 0; t < a.length; t++) {
      var r = a[t];
      if (r instanceof Array)
        for (var n = 0; n < r.length; n++) {
          var s = r[n];
          if (s instanceof x.Complex || typeof s == "object" && (s.mathjs && s.mathjs == "Complex" || s.type && s.type == "Complex"))
            return !0;
        }
      else if (r instanceof x.Complex || typeof r == "object" && (r.mathjs && r.mathjs == "Complex" || r.type && r.type == "Complex"))
        return !0;
    }
    return !1;
  };
  b.prototype.matrixZeroImagToReal = function(a) {
    for (var t = 0; t < a.length; t++) {
      var r = a[t];
      if (r instanceof Array)
        for (var n = 0; n < r.length; n++) {
          var s = r[n];
          (s instanceof x.Complex || typeof s == "object" && (s.mathjs && s.mathjs == "Complex" || s.type && s.type == "Complex")) && x.im(s) == 0 && (a[t][n] = x.re(s));
        }
      else
        (r instanceof x.Complex || typeof r == "object" && (r.mathjs && r.mathjs == "Complex" || r.type && r.type == "Complex")) && x.im(r) == 0 && (a[t] = x.re(r));
    }
    return a;
  };
  b.prototype.stringifyMatrix = function(a, t) {
    var r = this, n = a.toArray ? a.toArray() : a;
    t = t || {};
    var s = !1;
    t.fixedWidth && (s = this.matrixHasComplexElement(n));
    var e = "";
    return e += "[", n.map(function(o, u) {
      u > 0 && (e += ","), t.minify ? e += " " : e += `
  `, o instanceof Array ? (e += "[", o.map(function(p, v) {
        v > 0 && (e += ", "), p instanceof x.Complex ? e += r.formatComplex(p, t) : typeof p == "object" && (p.mathjs && p.mathjs == "Complex" || p.type && p.type == "Complex") ? e += Yr(p.re, p.im, t) : typeof p == "string" ? e += p : s ? e += Yr(p, 0, t) : e += Vr(p, t);
      }), e += "]") : o instanceof x.Complex ? e += r.formatComplex(o, t) : typeof o == "object" && (o.mathjs && o.mathjs == "Complex" || o.type && o.type == "Complex") ? e += Yr(el.re, el.im, t) : typeof o == "string" ? e += o : s ? e += Yr(o, 0, t) : e += Vr(o, t);
    }), n.length && (t.minify ? e += " " : e += `
`), e += "]", e;
  };
  b.prototype.matrixRe = function(a) {
    for (var t = [], r = 0; r < a.length; r++) {
      var n = a[r];
      if (Array.isArray(n)) {
        for (var s = [], e = 0; e < n.length; e++)
          typeof n[e] == "object" ? s.push(n[e].re) : s.push(n[e]);
        t.push(s);
      } else
        typeof n == "object" ? s.push(n.re) : s.push(n);
    }
    return t;
  };
  b.prototype.matrixIm = function(a) {
    for (var t = [], r = 0; r < a.length; r++) {
      var n = a[r];
      if (Array.isArray(n)) {
        for (var s = [], e = 0; e < n.length; e++)
          typeof n[e] == "object" ? s.push(n[e].im) : s.push(0);
        t.push(s);
      } else
        typeof n == "object" ? s.push(n.im) : s.push(0);
    }
    return t;
  };
  b.prototype.matrixAbs = function(a) {
    for (var t = [], r = 0; r < a.length; r++) {
      var n = a[r];
      if (Array.isArray(n)) {
        for (var s = [], e = 0; e < n.length; e++)
          s.push(x.abs(n[e]));
        t.push(s);
      } else
        t.push(x.abs(n));
    }
    return t;
  };
  b.prototype.matrixArg = function(a) {
    for (var t = [], r = 0; r < a.length; r++) {
      var n = a[r];
      if (Array.isArray(n)) {
        for (var s = [], e = 0; e < n.length; e++)
          s.push(x.arg(n[e]));
        t.push(s);
      } else
        t.push(x.arg(n));
    }
    return t;
  };
  b.prototype.setCombinedState = function(a) {
    for (var t = {}, r = 0, n = 0, s = 0; s < a.length; s++) {
      var e = a[s];
      e.wires.map(function(T) {
        T + 1 > n && (n = T + 1);
      });
    }
    for (var o = [], s = 0; s < a.length; s++) {
      var e = a[s], u = [];
      e.wires.map(function(S, O) {
        u.push({
          and: 1 << n - 1 - S,
          or: 1 << e.circuit.numQubits - 1 - O
        });
      }), o.push(u);
    }
    for (var p = 1 << n, v = 0; v < p; v++) {
      for (var f = null, s = 0; s < a.length; s++) {
        for (var h = o[s], m = 0, l = 0; l < h.length; l++)
          v & h[l].and && (m |= h[l].or);
        var e = a[s], d = e.circuit.state[m];
        d ? f == null ? f = d : f = x.multiply(d, f) : f = x.complex(0, 0);
      }
      f && (f.re || f.im) && (t[v] = f, r |= v);
    }
    if (this.resetState(), this.numQubits < n) {
      for (this.numQubits = n; this.gates.length < this.numQubits; )
        this.gates.push([]);
      for (var c = this.numCols(), l = 0; l < this.gates.length; l++)
        for (; this.gates[l].length < c; )
          this.gates[l].push(null);
    }
    this.state = t, this.stateBits = r, this.stateBits == 0 && Object.keys(this.state).length == 0 && (this.state[0] = x.complex(1, 0));
  };
  b.prototype._setCombinedState = function(a, t, r) {
    r = r || {};
    var n = a.numQubits, s = t.numQubits;
    if (!r.wireMap) {
      r.wireMap = {
        c1: [],
        c2: []
      };
      for (var e = 0; e < n; e++)
        r.wireMap.c1.push(e);
      for (var e = 0; e < s; e++)
        r.wireMap.c2.push(e + n);
    }
    var o = 0;
    r.wireMap.c1.map(function(k) {
      k + 1 > o && (o = k + 1);
    }), r.wireMap.c2.map(function(k) {
      k + 1 > o && (o = k + 1);
    });
    var u = [];
    r.wireMap.c1.map(function(k, Q) {
      u.push({ and: 1 << o - 1 - k, or: 1 << n - 1 - Q });
    });
    var p = [];
    r.wireMap.c2.map(function(k, Q) {
      p.push({ and: 1 << o - 1 - k, or: 1 << s - 1 - Q });
    });
    for (var v = 0, e = 0; e < o; e++)
      r.wireMap.c1.indexOf(e) < 0 && r.wireMap.c2.indexOf(e) < 0 && (v |= 1 << o - 1 - e);
    for (var f = {}, h = 0, m = 1 << o, l = 0; l < m; l++)
      if (!(l & v)) {
        for (var d = 0, e = 0; e < u.length; e++)
          l & u[e].and && (d |= u[e].or);
        for (var c = 0, e = 0; e < p.length; e++)
          l & p[e].and && (c |= p[e].or);
        var T = a.state[d];
        if (T) {
          var _ = t.state[c];
          if (_) {
            var S = x.multiply(T, _);
            (S.re || S.im) && (f[l] = S, h |= l);
          }
        }
      }
    if (this.resetState(), this.numQubits < o) {
      for (this.numQubits = o; this.gates.length < this.numQubits; )
        this.gates.push([]);
      for (var O = this.numCols(), e = 0; e < this.gates.length; e++)
        for (; this.gates[e].length < O; )
          this.gates[e].push(null);
    }
    this.state = f, this.stateBits = h, this.stateBits == 0 && Object.keys(this.state).length == 0 && (this.state[0] = x.complex(1, 0));
  };
  b.prototype.appendQubits = function(a) {
    var t = new b(a);
    this._setCombinedState(this, t);
  };
  b.prototype.numAmplitudes = function(a) {
    if (a) {
      var t = 0;
      for (var r in this.state) {
        var n = x.round(this.state[r], 14);
        (n.re || n.im) && t++;
      }
      return t;
    }
    return x.pow(2, this.numQubits);
  };
  b.prototype.numCols = function() {
    return this.gates.length ? this.gates[0].length : 0;
  };
  b.prototype.numGates = function(a) {
    var t = null;
    a ? (t = new b(), t.load(this.save(!0))) : t = this;
    for (var r = 0, n = t.numCols(), s = 0; s < n; s++)
      for (var e = 0; e < t.numQubits; e++) {
        var o = t.getGateAt(s, e);
        o && o.connector == 0 && r++;
      }
    return r;
  };
  b.prototype.isEmptyCell = function(a, t) {
    if (this.gates[t] && this.gates[t][a])
      return !1;
    for (var r = 0; r < this.numQubits; r++) {
      var n = this.getGateAt(a, r);
      if (n && (n.name == "measure" || n.options && n.options.condition && n.options.condition.creg || Math.min.apply(null, n.wires) < t && Math.max.apply(null, n.wires) > t))
        return !1;
    }
    return !0;
  };
  b.prototype.isEmptyPlace = function(a, t, r) {
    var n = Math.min.apply(null, t), s = Math.max.apply(null, t);
    if (r) {
      var e = this.numQubits - 1;
      e > s && (s = e);
    }
    for (var o = !0, u = n; u <= s; u++)
      if (!this.isEmptyCell(a, u)) {
        o = !1;
        break;
      }
    return o;
  };
  b.prototype.lastNonEmptyPlace = function(a, t) {
    var r = this.numCols(), n = !0, s = Math.min.apply(null, a), e = Math.max.apply(null, a);
    if (t) {
      var o = this.numQubits - 1;
      o > e && (e = o);
    }
    for (; n && r--; )
      for (var u = s; u <= e; u++)
        if (!this.isEmptyCell(r, u)) {
          n = !1;
          break;
        }
    return r;
  };
  b.prototype.insertColumn = function(a) {
    for (var t = 0; t < this.numQubits; t++)
      this.gates[t].splice(a || 0, 0, null);
  };
  b.prototype.randomString = function(a) {
    a = a || 17;
    var t = "", r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    t += r.charAt(Math.floor(Math.random() * r.length)), r += "0123456789";
    for (var n = 0; n < a; n++)
      t += r.charAt(Math.floor(Math.random() * r.length));
    return t;
  };
  b.prototype.addGate = function(a, t, r, n) {
    var s = [];
    if (Array.isArray(r))
      for (var e = 0; e < r.length; e++)
        s.push(r[e]);
    else
      s.push(r);
    t < 0 && (t = this.lastNonEmptyPlace(s, a == "measure" || n && n.condition && n.condition.creg) + 1);
    for (var o = s.length, u = this.randomString(), p = 0; p < o; p++) {
      var v = s[p];
      for (v + 1 > this.numQubits && (this.numQubits = v + 1); this.gates.length < this.numQubits; )
        this.gates.push([]);
      var f = this.numCols();
      t + 1 > f && (f = t + 1);
      for (var e = 0; e < this.gates.length; e++)
        for (; this.gates[e].length < f; )
          this.gates[e].push(null);
      var h = {
        id: u,
        name: a,
        connector: p,
        options: {}
      };
      if (n && (h.options = n, n.creg && n.creg.name && typeof n.creg.bit != "undefined")) {
        var m = parseInt(n.creg.bit || 0);
        isNaN(m) && (m = 0);
        var l = this.cregs[n.creg.name] || [], d = l.length > m ? l[n.creg.bit] : 0;
        this.setCregBit(n.creg.name, m, d);
      }
      this.gates[v][t] = h;
    }
    return u;
  };
  b.prototype.appendGate = function(a, t, r) {
    return this.addGate(a, -1, t, r);
  };
  b.prototype.insertGate = function(a, t, r, n) {
    var s = [];
    if (Array.isArray(r))
      for (var e = 0; e < r.length; e++)
        s.push(r[e]);
    else
      s.push(r);
    t < 0 && (t = this.lastNonEmptyPlace(s, !!a && a == "measure" || n && n.condition && n.condition.creg) + 1);
    for (var o = s.length, u = 0; u < o; u++) {
      var p = s[u];
      for (p + 1 > this.numQubits && (this.numQubits = p + 1); this.gates.length < this.numQubits; )
        this.gates.push([]);
      var v = this.numCols();
      t + 1 > v && (v = t + 1);
      for (var e = 0; e < this.gates.length; e++)
        for (; this.gates[e].length < v; )
          this.gates[e].push(null);
    }
    this.isEmptyPlace(t, s, !!a && a == "measure" || n && n.condition && n.condition.creg) || this.insertColumn(t);
    var f = null;
    return a && (f = this.addGate(a, t, s, n)), f;
  };
  b.prototype.insertSpace = function(a, t) {
    return this.insertGate(null, a, t, null);
  };
  b.prototype.removeGateAt = function(a, t) {
    if (this.gates[t]) {
      var r = this.gates[t][a];
      if (r)
        for (var n = r.id, s = this.gates.length, e = 0; e < s; e++) {
          var o = this.gates[e][a];
          o && o.id == n && (this.gates[e][a] = null);
        }
    }
  };
  b.prototype.removeGate = function(a) {
    var t = this.getGatePosById(a);
    !t || t.col < 0 || !t.wires.length || this.removeGateAt(t.col, t.wires[0]);
  };
  b.prototype.addMeasure = function(a, t, r) {
    this.addGate("measure", -1, a, { creg: { name: t, bit: r } });
  };
  b.prototype.appendCircuit = function(a, t) {
    for (var r = this.numCols(), n = a.numCols(), s = 0; s < n; s++)
      for (var e = 0; e < a.numQubits; e++) {
        var o = a.getGateAt(s, e);
        o && o.connector == 0 && (!this.basicGates[o.name] && a.customGates[o.name] && this.registerGate(o.name, a.customGates[o.name]), this.addGate(o.name, s + r, o.wires, o.options));
      }
  };
  b.prototype.removeTrailingColumns = function() {
    for (var a = this.numCols(), t = a - 1; t >= 0; t--) {
      for (var r = !0, n = 0; n < this.numQubits; n++) {
        var s = this.gates[n][t];
        if (s) {
          r = !1;
          break;
        }
      }
      if (!r)
        return;
      for (var n = 0; n < this.numQubits; n++)
        this.gates[n].pop();
    }
  };
  b.prototype.removeLeadingColumns = function() {
    for (var a = 0, t = this.numCols(), r = 0; r < t; r++) {
      for (var n = !0, s = 0; s < this.numQubits; s++) {
        var e = this.gates[s][r];
        if (e) {
          n = !1;
          break;
        }
      }
      if (!n)
        break;
      a++;
    }
    for (var o = 0; o < a; o++)
      for (var s = 0; s < this.numQubits; s++)
        this.gates[s].shift();
  };
  b.prototype.removeTrailingRows = function() {
    for (var a = this.numCols(), t = this.numQubits - 1; t >= 0; t--) {
      for (var r = !0, n = 0; n < a; n++) {
        var s = this.gates[t][n];
        if (s) {
          r = !1;
          break;
        }
      }
      if (!r)
        return;
      this.gates.pop(), this.numQubits--;
    }
  };
  b.prototype.removeQubit = function(a) {
    if (this.gates[a]) {
      this.resetState();
      for (var t = this.numCols(), r = 0; r < t; r++)
        this.removeGateAt(r, a);
      for (var n = a + 1; n < this.numQubits; n++)
        for (var r = 0; r < t; r++)
          this.gates[n - 1][r] = this.gates[n][r];
      this.gates.pop(), this.numQubits--;
    }
  };
  b.prototype.flipVertically = function() {
    this.resetState();
    for (var a = this.numCols(), t = this.numQubits - 1, r = 0; r < this.numQubits / 2; r++)
      for (var n = 0; n < a; n++) {
        var s = this.gates[r][n];
        this.gates[r][n] = this.gates[t - r][n], this.gates[t - r][n] = s;
      }
  };
  b.prototype.flipHorizontally = function() {
    this.resetState();
    for (var a = this.numCols(), t = a - 1, r = 0; r < this.numQubits; r++)
      for (var n = 0; n < a / 2; n++) {
        var s = this.gates[r][n];
        this.gates[r][n] = this.gates[r][t - n], this.gates[r][t - n] = s;
      }
  };
  b.prototype.applyTransform = function(a, t) {
    var r = {}, n = 0;
    if (t = t.slice(0), this.reverseBitOrder)
      for (var s = 0; s < t.length; s++)
        t[s] = this.numQubits - 1 - t[s];
    t.reverse();
    for (var e = [], s = 0; s < this.numQubits; s++)
      t.indexOf(s) < 0 && e.push(s);
    var o = e.length, u = 1 << o;
    function p(j) {
      var y = 0;
      return t.map(function(Z, G) {
        j & 1 << G && (y |= 1 << Z);
      }), y;
    }
    function v() {
      var j = 0;
      return t.map(function(y, Z) {
        j |= 1 << y;
      }), j + 1;
    }
    function f() {
      var j = 0;
      return e.map(function(y, Z) {
        j |= 1 << y;
      }), j;
    }
    for (var h = x.complex(0, 0), m = 0; m < a.length; m++)
      for (var l = p(m), d = 0; d < a[m].length; d++) {
        var c = p(d);
        if ((this.stateBits & c) == c) {
          var T = a[m][d];
          if (T)
            for (var _ = l, S = c, O = u, k = p(0), Q = v(), R = f(), g = k; O--; ) {
              var q = this.state[S];
              q && (_ = g | l, T == 1 ? r[_] = x.add(r[_] || h, q) : r[_] = x.add(r[_] || h, x.multiply(T, q)), n |= _), g = g + Q & R, S = g | c;
            }
        }
      }
    this.state = r, this.stateBits = n, this.stateBits == 0 && Object.keys(this.state).length == 0 && (this.state[0] = x.complex(1, 0));
  };
  b.prototype.transformMatrix = function(a, t, r, n) {
    r = r.slice(0);
    var s = !1;
    if (n ? s = n == "big" : s = !this.reverseBitOrder, s)
      for (var e = 0; e < r.length; e++)
        r[e] = a - 1 - r[e];
    r.reverse();
    for (var o = [], e = 0; e < a; e++)
      r.indexOf(e) < 0 && o.push(e);
    var u = o.length, p = 1 << u;
    function v(j) {
      var y = 0;
      return r.map(function(Z, G) {
        j & 1 << G && (y |= 1 << Z);
      }), y;
    }
    function f() {
      var j = 0;
      return r.map(function(y, Z) {
        j |= 1 << y;
      }), j + 1;
    }
    function h() {
      var j = 0;
      return o.map(function(y, Z) {
        j |= 1 << y;
      }), j;
    }
    for (var m = x.zeros([1 << a, 1 << a]), l = 0; l < t.length; l++)
      for (var d = v(l), c = 0; c < t[l].length; c++) {
        var T = v(c), _ = t[l][c];
        if (_)
          for (var S = d, O = T, k = p, Q = v(0), R = f(), g = h(), q = Q; k--; )
            S = q | d, m[S][O] = _, q = q + R & g, O = q | T;
      }
    return m;
  };
  b.prototype.circuitMatrix = function(a) {
    var t = new b();
    if (t.load(this.save(!0)), t.gotClassicalControl())
      return [];
    for (var r = [], n = t.numCols() - 1; n >= 0; n--)
      for (var s = t.numQubits - 1; s >= 0; s--) {
        var e = t.getGateAt(n, s);
        if (e && e.connector == 0) {
          var o = t.basicGates[e.name];
          if (!o)
            throw new Error('Unknown gate "' + e.name + '"');
          if (o.matrix && o.matrix.length) {
            var u = t.getRawGate(o, e.options), p = t.transformMatrix(t.numQubits, u, e.wires, a);
            !r || !r.length ? r = p : r = this.multiplySquareMatrices(r, p);
          }
        }
      }
    return r;
  };
  b.prototype.eigenvalues2x2 = function(a) {
    var t = this.parseMatrix(a), r = [0, 0], n = x.add(t[0][0], t[1][1]);
    return r[0] = x.divide(x.add(n, x.sqrt(x.add(x.multiply(x.multiply(4, t[0][1]), t[1][0]), x.pow(x.subtract(t[0][0], t[1][1]), 2)))), 2), r[1] = x.divide(x.subtract(n, x.sqrt(x.add(x.multiply(x.multiply(4, t[0][1]), t[1][0]), x.pow(x.subtract(t[0][0], t[1][1]), 2)))), 2), r;
  };
  b.prototype.getBipartiteState = function(a, t) {
    var r = {}, n = 0;
    function s(f, h) {
      var m = x.add(f, h), l = m.arg();
      return x.complex({ abs: x.sqrt(x.pow(x.abs(f), 2) + x.pow(x.abs(h), 2)), arg: l });
    }
    for (var e in this.state) {
      var o = parseInt(e), u = 0, p = o & 1 << a ? 1 : 0, v = o & 1 << t ? 2 : 0;
      u |= p, u |= v, typeof r[u] != "undefined" ? r[u] = s(r[u], this.state[e]) : r[u] = this.state[e], n++;
    }
    return n || (r[0] = x.complex(1, 0)), r;
  };
  b.prototype.chanceMap = function() {
    for (var a = {}, t = 0; t < this.numQubits; t++)
      for (var r = 0; r < this.numQubits; r++)
        a[t] || (a[t] = {}), r == t ? a[t][r] = null : a[t][r] = {};
    for (var t = 0; t < this.numQubits; t++)
      for (var r = t + 1; r < this.numQubits; r++) {
        var n = this.getBipartiteState(t, r), s = new b(2);
        s.state = n;
        var e = x.abs(s.angles()[0].radius), o = x.round(1 - x.pow(e, 2), 7);
        a[t][r].entangled = o > 0, a[t][r].concurence = o, a[t][r].concurencePercent = x.round(o * 100, 2), a[r][t].entangled = o > 0, a[r][t].concurence = o, a[r][t].concurencePercent = x.round(o * 100, 2);
      }
    return a;
  };
  function Dr(a, t) {
    for (var r = a.toString(2); r.length < t; )
      r = "0" + r;
    return r;
  }
  function rt(a, t) {
    return parseInt(Dr(a, t).split("").reverse().join(""), 2);
  }
  b.prototype.resetQubit = function(a, t) {
    var r = [
      [0, 0],
      [0, 0]
    ], n = null;
    this.reverseBitOrder ? n = x.pow(2, this.numQubits - 1 - a) : n = x.pow(2, a);
    var s = 0;
    for (var e in this.state) {
      var o = parseInt(e);
      (t ? o & n : !(o & n)) && (s += x.pow(x.abs(this.state[e]), 2));
    }
    s = x.round(s, 14), s != 1 && (t ? s == 0 ? r[1][0] = 1 : r[1][1] = x.sqrt(1 / s) : s == 0 ? r[0][1] = 1 : r[0][0] = x.sqrt(1 / s), this.collapsed = [], this.prob = [], this.applyTransform(r, [a]));
  };
  b.prototype.applyGate = function(a, t, r, n) {
    if (a == "measure") {
      if (!n.creg)
        throw 'Error: "measure" gate requires destination.';
      var s = this.measure(r[0], n.creg.name, n.creg.bit), e = this.measureResetsQubit;
      if (!e)
        for (var o = t; o < this.numCols(); o++) {
          for (var u = o == t ? r[0] : 0, p = u; p < this.numQubits; p++) {
            var v = this.gates[p][o];
            if (v && v.name != "measure") {
              e = !0;
              break;
            }
          }
          if (e)
            break;
        }
      e && this.resetQubit(r[0], s);
      return;
    }
    if (a == "reset") {
      this.resetQubit(r[0], 0);
      return;
    }
    var f = this.basicGates[a];
    if (!f) {
      console.log('Unknown gate "' + a + '".');
      return;
    }
    var h = this.getRawGate(f, n);
    this.collapsed = [], this.prob = [], this.applyTransform(h, r);
  };
  b.prototype.getRawGate = function(a, t, r) {
    var n = r && r.params ? r.params : this.options && this.options.params ? this.options.params : {}, n = JSON.parse(JSON.stringify(n));
    for (var s in n)
      n[s] = x.evaluate(n[s]);
    var e = [];
    return a.matrix.map(function(o) {
      var u = [];
      o.map(function(p) {
        if (typeof p == "string") {
          var v = t ? t.params || {} : {}, f = {};
          a.params.map(function(m, l) {
            Array.isArray(v) ? f[m] = v.length > l ? x.evaluate(v[l], n) : null : f[m] = x.evaluate(v[m], n);
          });
          var h = x.evaluate(p, f);
          u.push(h);
        } else
          u.push(p);
      }), e.push(u);
    }), e;
  };
  b.prototype.countParameterizedGates = function() {
    for (var a = 0, t = this.numCols(), r = 0; r < t; r++)
      for (var n = 0; n < this.numQubits; n++) {
        var s = this.getGateAt(r, n);
        if (s && s.connector == 0 && s.options && s.options.params) {
          var e = 0;
          for (paramName in s.options.params)
            e++;
          e > 0 && a++;
        }
      }
    return a;
  };
  b.prototype.findGlobalParams = function() {
    for (var a = {
      globalParams: [],
      cells: []
    }, t = function(m) {
      var l = [], d = function(T, _) {
        T.isSymbolNode && !T.isFunctionNode && !x[T.name] && l.push(T.name);
      }, c = x.parse(m);
      return c.toString({ handler: d }), l;
    }, r = this.numCols(), n = 0; n < r; n++)
      for (var s = 0; s < this.numQubits; s++) {
        var e = this.getGateAt(n, s);
        if (e && e.connector == 0 && e.options && e.options.params) {
          var o = !1;
          for (var u in e.options.params) {
            var p = e.options.params[u];
            if (typeof p == "string") {
              var v = t(p);
              if (v.length) {
                for (var f = 0; f < v.length; f++)
                  a.globalParams.indexOf(v[f]) < 0 && a.globalParams.push(v[f]);
                if (!o) {
                  var h = Math.max.apply(null, e.wires);
                  a.cells.push([n, h]), o = !0;
                }
              }
            }
          }
        }
      }
    return a;
  };
  b.prototype.getGlobalParams = function() {
    var a = this.findGlobalParams().globalParams;
    return a;
  };
  b.prototype.gotGlobalParams = function() {
    var a = this.getGlobalParams();
    return a.length > 0;
  };
  b.prototype.updateGlobalParams = function() {
    this.params = this.getGlobalParams(), this.options = this.options || {}, this.options.params = this.options.params || {};
    for (var a = 0; a < this.params.length; a++) {
      var t = this.params[a];
      typeof this.options.params[t] == "undefined" && (this.options.params[t] = 0);
    }
    for (var t in this.options.params)
      this.params.indexOf(t) < 0 && delete this.options.params[t];
    return this.params;
  };
  b.prototype.makeAllParamsGlobal = function() {
    for (var a = this.getGlobalParams(), t = function(d) {
      var c = [], T = function(S, O) {
        S.isSymbolNode && !S.isFunctionNode && !x[S.name] && c.push(S.name);
      }, _ = x.parse(d);
      return _.toString({ handler: T }), c;
    }, r = this.numCols(), n = 0; n < r; n++)
      for (var s = 0; s < this.numQubits; s++) {
        var e = this.getGateAt(n, s);
        if (e && e.connector == 0 && e.options && e.options.params)
          for (var o in e.options.params) {
            var u = e.options.params[o], p = !1;
            if (typeof u == "string") {
              var v = t(u);
              v.length && (p = !0);
            }
            if (!p) {
              for (var f = 0; a.indexOf("var" + f) >= 0; )
                f++;
              var h = "var" + f;
              a.push(h);
              for (var m = 0; m < e.wires.length; m++) {
                var l = this.gates[e.wires[m]][n];
                l.options.params[o] = h;
              }
              this.params.push(h), this.options.params[h] = u;
            }
          }
      }
  };
  b.prototype.decompose = function(a) {
    if (!a.gates.length)
      return a;
    this.updateGlobalParams();
    function t(Q, R, g) {
      return Q.slice(0, g).concat(R).concat(Q.slice(g));
    }
    for (var r = 0; r < a.gates[0].length; r++)
      for (var n = 0; n < a.numQubits; n++) {
        var s = a.gates[n][r];
        if (s && s.connector == 0 && !this.basicGates[s.name]) {
          var e = new b(), o = a.customGates[s.name];
          if (o) {
            if (e.load(o), e.params.length && s.options && s.options.params)
              for (var u = s.options.params, p = 0; p < e.gates[0].length; p++)
                for (var v = 0; v < e.numQubits; v++) {
                  var f = e.gates[v][p];
                  if (f && f.connector == 0 && f.options && f.options.params)
                    for (var h in f.options.params) {
                      var m = x.parse(f.options.params[h]), l = m.transform(function(Q, R, g) {
                        return Q.isSymbolNode && u.hasOwnProperty(Q.name) ? x.parse("(" + u[Q.name] + ")") : Q;
                      });
                      f.options.params[h] = l.toString();
                    }
                }
            if (s.options && s.options.condition)
              for (var p = 0; p < e.gates[0].length; p++)
                for (var v = 0; v < e.numQubits; v++) {
                  var f = e.gates[v][p];
                  f && (f.options = f.options || {}, f.options.condition = s.options.condition);
                }
            var d = e.save(!0);
            if (!d.gates[0].length)
              for (var c = 0; c < d.gates.length; c++)
                d.gates[c].push(null);
            for (var T = [], _ = 0; _ < d.gates[0].length - 1; _++)
              T.push(null);
            for (var S = 0; S < a.numQubits; S++) {
              var O = a.gates[S][r];
              if (O && O.id == s.id) {
                a.gates[S].splice(r, 1);
                for (var k = JSON.parse(JSON.stringify(d.gates[O.connector])), c = 0; c < k.length; c++)
                  k[c] && (k[c].id = k[c].id + "_" + s.id);
                a.gates[S] = t(a.gates[S], k, r);
              } else
                a.gates[S] = t(a.gates[S], T, r + 1);
            }
          }
        }
      }
    return a.customGates = {}, a;
  };
  b.prototype.decomposeGateAt = function(a, t) {
    var r = this, n = this.getGateAt(a, t);
    if (n && this.customGates[n.name]) {
      var s = new b();
      s.load(this.save());
      for (var e = 0; e < s.gates[0].length; e++)
        for (var o = 0; o < s.numQubits; o++) {
          var u = s.gates[o][e];
          u && u.id != n.id && s.removeGateAt(e, o);
        }
      var p = new b();
      p.load(s.save(!0)), p.removeLeadingColumns(), p.removeTrailingColumns();
      for (var v = 0; v < p.gates[0].length - 1; v++)
        this.insertSpace(a + v, n.wires);
      this.removeGate(n.id);
      for (var f = a, e = 0; e < p.gates[0].length; e++) {
        var h = p.getGatesAtColumn(e);
        h.map(function(l) {
          r.addGate(l.name, f, l.wires, l.options);
        }), f++;
      }
      return p;
    }
  };
  b.prototype.removeMeasurementAndClassicalControl = function() {
    for (var a = this.numCols(), t = 0; t < a; t++)
      for (var r = 0; r < this.numQubits; r++) {
        var n = this.gates[r][t];
        n && n.name == "measure" && (this.gates[r][t] = null, n = null), n && n.options && n.options.condition && delete this.gates[r][t].options.condition;
      }
    this.cregs = {}, this.options && (this.options.hybrid = !1, this.options.hybridOptions && delete this.options.hybridOptions);
  };
  b.prototype.convertToCustomGate = function(a, t, r) {
    for (var n = this.numCols(), s = 0; s < n; s++)
      for (var e = 0; e < this.numQubits; e++) {
        var o = this.gates[e][s];
        o && o.name == "measure" && (this.gates[e][s] = null, o = null), o && o.options && o.options.condition && delete this.gates[e][s].options.condition;
      }
    this.cregs = {};
    var u = this.save(t);
    if (u.options && (u.options.hybrid = !1, u.options.hybridOptions && delete u.options.hybridOptions), this.clear(), this.customGates[a] = u, r) {
      for (var p = [], v = 0; v < this.numQubits; v++)
        p.push(v);
      var f = JSON.parse(JSON.stringify(this.customGates[a].options));
      this.addGate(a, -1, p, f);
    } else
      this.removeTrailingRows();
  };
  b.prototype.validCustomGateName = function(a) {
    a = (a || "sub") + "";
    var t = [];
    if (this.customGates) {
      if (!this.basicGates[a] && !this.customGates[a])
        return a;
      for (var r in this.basicGates)
        t.push(r);
      for (var r in this.customGates)
        t.push(r);
    }
    var n = 0, s = "";
    do
      n++, s = a + n;
    while (t.indexOf(s) >= 0);
    return s;
  };
  b.prototype.splitIntoBlocks = function(a, t) {
    t = t || {};
    var r = [], n = "{}", s = !0, e = null, o = new b();
    o.load(this.save(!0));
    for (var u = o.numCols(), p = 0; p < u; p++)
      for (var v = 0; v < o.numQubits; v++) {
        var f = o.getGateAt(p, v);
        if (f && f.connector == 0 && !f.addedToBlock) {
          var h = this.basicGates[f.name], m = f.options && f.options.condition ? JSON.stringify(f.options.condition) : "{}", l = h && !!(h.matrix && h.matrix.length), d = JSON.parse(JSON.stringify(e ? e.wires : []));
          if (f.wires.map(function(L) {
            d.indexOf(L) < 0 && d.push(L);
          }), !r.length || m != n || !l || !s || !(d.length <= a) ? (e = {
            wires: f.wires,
            gates: [f]
          }, r.push(e), f.options && f.options.condition && (e.condition = f.options.condition)) : (e.wires = d, e.gates.push(f)), f.wires.map(function(L) {
            o.gates[L][p].addedToBlock = !0;
          }), n = m, s = l, !t.verticalOnly) {
            var c = p + 1, T = JSON.parse(JSON.stringify(e.wires));
            for (T.sort(); c < u && T.length; ) {
              for (extWire = T[0]; T.length && extWire <= T[T.length - 1]; ) {
                var _ = o.getGateAt(c, extWire);
                if (_ && !_.addedToBlock) {
                  var S = this.basicGates[_.name], O = _.options && _.options.condition ? JSON.stringify(_.options.condition) : "{}", k = S && !!(S.matrix && S.matrix.length), Q = k && O == m;
                  if (Q) {
                    for (var R = 0; R < _.wires.length; R++)
                      if (T.indexOf(_.wires[R]) < 0) {
                        Q = !1;
                        break;
                      }
                  }
                  if (Q)
                    e.gates.push(_), _.wires.map(function(L) {
                      o.gates[L][c].addedToBlock = !0;
                    });
                  else {
                    for (var g = [], R = 0; R < T.length; R++) {
                      var q = T[R];
                      _.wires.indexOf(q) < 0 && g.push(q);
                    }
                    T = g;
                  }
                }
                if (T.length) {
                  for (var j = T[T.length - 1] + 1, R = T.length - 1; R >= 0; R--) {
                    var q = T[R];
                    q > extWire && (j = q);
                  }
                  extWire = j;
                }
              }
              c++;
            }
          }
        }
      }
    for (var y = new b(), Z = 0, G = 0; G < r.length; G++) {
      var E = r[G], W = !1;
      if (E.wires.length <= a || t.flexibleBlockSize)
        for (var A = 0; A < E.gates.length; A++) {
          var f = E.gates[A], h = this.basicGates[f.name];
          h.matrix && h.matrix.length && (W = !0);
        }
      if (W) {
        Z++;
        for (var Y = new b(), A = 0; A < E.gates.length; A++) {
          var f = E.gates[A];
          f.options.condition && delete f.options.condition;
          var $ = [];
          f.wires.map(function(z) {
            $.push(E.wires.indexOf(z));
          }), f.wires = $, Y.appendGate(f.name, $, f.options);
        }
        var C = "block" + Z;
        y.registerGate(C, Y);
        var K = {};
        E.condition && (K.condition = E.condition), y.appendGate(C, E.wires, K);
      } else
        E.gates.map(function(L) {
          y.appendGate(L.name, L.wires, L.options);
        });
    }
    this.load(y.save(!1));
  };
  b.prototype.usedGates = function(a) {
    a = a || {};
    var t = new b();
    t.load(this.save(!0));
    for (var r = [], n = 0; n < t.numQubits; n++)
      for (var s = 0; s < t.numCols(); s++) {
        var e = t.gates[n][s];
        if (e && r.indexOf(e.name) < 0) {
          var o = !1;
          if (a.unitariesOnly) {
            var u = t.basicGates[e.name];
            (!u || !u.matrix || !u.matrix.length) && (o = !0);
          }
          o || r.push(e.name);
        }
      }
    if (!a.noCustomGates)
      for (var p in this.customGates)
        this.customGates[p], r.indexOf(p) < 0 && r.push(p);
    return r;
  };
  b.prototype.countOps = function(a, t) {
    t = t || {}, t.shallow = t.shallow || !1, a || (a = this);
    for (var r = {}, n = 0; n < a.gates.length; n++)
      for (var s = 0; s < a.gates[n].length; s++) {
        var e = a.gates[n][s];
        if (e && e.connector == 0) {
          var o = this.basicGates[e.name];
          if (o)
            r[e.name] ? r[e.name]++ : r[e.name] = 1;
          else {
            var u = this.customGates[e.name];
            if (u && (r[e.name] ? r[e.name]++ : r[e.name] = 1, !t.shallow)) {
              var p = this.countOps(u, t);
              for (subName in p)
                r[subName] ? r[subName] += p[subName] : r[subName] = p[subName];
            }
          }
        }
      }
    return r;
  };
  b.prototype.getCouplingMap = function(a) {
    a = a || {};
    var t = "", r = new b();
    r.load(this.save(!0));
    for (var n = 0; n < r.numQubits; n++)
      for (var s = 0; s < r.numCols(); s++) {
        var e = r.getGateAt(s, n);
        if (e && e.connector == 0) {
          var o = !1;
          if (a.unitariesOnly) {
            var u = r.basicGates[e.name];
            (!u || !u.matrix || !u.matrix.length) && (o = !0);
          }
          if (!o) {
            var p = JSON.stringify(e.wires);
            t.indexOf(p) < 0 && (t && (t += ","), t += p);
          }
        }
      }
    return JSON.parse("[" + t + "]");
  };
  b.prototype.getGateDef = function(a) {
    var t = this.basicGates[a];
    return t || (t = this.customGates[a]), t;
  };
  b.prototype.importRaw = function(a, t) {
    var r = a && a.qubits || 0;
    if (this.init(r), !a)
      if (t)
        t([]);
      else
        return;
    if (a.cregs)
      for (var n = 0; n < a.cregs.length; n++) {
        var s = a.cregs[n];
        if (!s.name) {
          var e = "Classical register " + n + ` doesn't have a "name".`;
          if (t) {
            t([{ msg: e, line: 0, col: 0 }]);
            return;
          } else
            throw new Error(e);
        }
        this.createCreg(s.name, s.len || 0);
      }
    if (a.program)
      for (var n = 0; n < a.program.length; n++) {
        var o = a.program[n];
        if (!o.name) {
          var e = "Gate " + n + ` doesn't have a "name". Name is optional and this is OK for QubitToaster but we cannot import gate from matrix. Not implemented yet.`;
          if (t) {
            t([{ msg: e, line: 0, col: 0 }]);
            return;
          } else
            throw new Error(e);
        }
        var u = this.basicGates[o.name];
        if (!u) {
          var e = 'Unknown gate "' + o.name + '". Name is optional and this is OK for QubitToaster but we cannot import gate from matrix. We can import only gates by name from set of known gates.';
          if (t) {
            t([{ msg: e, line: 0, col: 0 }]);
            return;
          } else
            throw new Error(e);
        }
        var p = JSON.parse(JSON.stringify(o.wires || [])), v = JSON.parse(JSON.stringify(o.options || {})), f = u.matrix && u.matrix.length ? x.log2(u.matrix.length) : 1;
        if (p.length != f) {
          var e = 'Gate "' + o.name + '" has ' + p.length + " wires but should have " + f + " wires.";
          if (t) {
            t([{ msg: e, line: 0, col: 0 }]);
            return;
          } else
            throw new Error(e);
        }
        if (u.params && u.params.length) {
          if (!v.params) {
            var e = 'Missing parameters for gate "' + o.name + '". Expecting ' + u.params.length + " parameters.";
            if (t) {
              t([{ msg: e, line: 0, col: 0 }]);
              return;
            } else
              throw new Error(e);
          }
          for (var h = 0; h < u.params.length; h++) {
            var m = u.params[h];
            if (typeof v.params[m] == "undefined") {
              var e = 'Missing parameter "' + m + '" for gate "' + o.name + '".';
              if (t) {
                t([{ msg: e, line: 0, col: 0 }]);
                return;
              } else
                throw new Error(e);
            }
          }
        }
        this.appendGate(o.name, p, v);
      }
    t && t([]);
  };
  b.prototype.exportRaw = function() {
    var a = this.options && this.options.params ? this.options.params : {}, a = JSON.parse(JSON.stringify(a));
    for (var t in a)
      a[t] = x.evaluate(a[t]);
    var r = new b();
    r.load(this.save(!0));
    for (var n = r.numCols(), s = [], e = 0; e < n; e++)
      for (var o = 0; o < r.numQubits; o++) {
        var u = r.getGateAt(e, o);
        if (u && u.connector == 0) {
          var p = r.basicGates[u.name];
          if (!p) {
            console.log('Unknown gate "' + u.name + '".');
            return;
          }
          var v = r.getRawGate(p, u.options), f = [];
          v.map(function(c) {
            var T = [];
            c.map(function(_) {
              _ = JSON.parse(JSON.stringify(_)), typeof _ == "object" && _.mathjs && typeof _.mathjs == "string" && (_.type = _.mathjs.toLowerCase(), delete _.mathjs), T.push(_);
            }), f.push(T);
          });
          var h = {};
          if (u.options && (h = JSON.parse(JSON.stringify(u.options))), h.params)
            for (var m in h.params)
              h.params[m] = x.evaluate(h.params[m], a);
          s.push({
            name: u.name,
            matrix: f,
            wires: u.wires,
            options: h
          });
        }
      }
    var l = [];
    for (var d in r.cregs)
      l.push({
        name: d,
        len: r.cregs[d].length || 0
      });
    return {
      qubits: r.numQubits,
      cregs: l,
      program: s
    };
  };
  b.prototype.exportToGenerator = function(a) {
    a = a || {};
    var t = this.exportQASM(null, !1, null, !1, !0), r = this.usedGates({ noCustomGates: !0, unitariesOnly: !0 }), n = this.getCouplingMap({ unitariesOnly: !0 }), s = {
      source: {
        circuit: {
          qasm: t
        }
      },
      problem: [],
      type: "circuit",
      settings: {
        allowed_gates: r.join(","),
        coupling_map: n
      }
    }, e = new b();
    if (e.load(this.save(!0)), a.fromMatrix) {
      var o = e.circuitMatrix(), u = [];
      return o.map(function(l) {
        l.map(function(d) {
          typeof d == "object" ? u.push([d.re, d.im]) : u.push(d);
        });
      }), s.problem.push({
        unitary: u
      }), s;
    }
    if (!a.noVectors) {
      for (var p = new b(), v = a.numSamples || (this.numQubits < 3 ? 8 : this.numQubits < 5 ? (1 << this.numQubits) + 1 : this.numQubits < 9 ? this.numQubits * 4 : this.numQubits), f = 0; f < v + 1; f++) {
        var h = { input: [], output: [] }, m = [];
        f > 0 ? (p.randomCircuit(this.numQubits, 20, { useGates: a.useGates || ["u3", "cx"], noClassicControl: !0, noMeasure: !0, noReset: !0 }), p.run(), p.stateAsArray().map(function(l) {
          h.input.push([l.amplitude.re, l.amplitude.im]);
        }), m = p.state) : (e.initState(), e.stateAsArray().map(function(l) {
          h.input.push([l.amplitude.re, l.amplitude.im]);
        }), m = e.state), e.run(null, { initialState: m }), e.stateAsArray().map(function(l) {
          h.output.push([l.amplitude.re, l.amplitude.im]);
        }), s.problem.push(h);
      }
      return s;
    }
    return s;
  };
  b.prototype.save = function(a, t) {
    this.updateGlobalParams();
    var r = {
      numQubits: this.numQubits,
      params: JSON.parse(JSON.stringify(this.params)),
      options: JSON.parse(JSON.stringify(this.options)),
      gates: JSON.parse(JSON.stringify(this.gates)),
      customGates: JSON.parse(JSON.stringify(this.customGates)),
      cregs: JSON.parse(JSON.stringify(this.cregs))
    }, n = null;
    if (a ? n = this.decompose(r) : n = r, t && (n.gates && n.gates.map(function(o) {
      o && o.map(function(u) {
        u && u.id && delete u.id;
      });
    }), n.customGates))
      for (var s in n.customGates) {
        var e = n.customGates[s];
        e && e.gates && e.gates.map(function(o) {
          o && o.map(function(u) {
            u && u.id && delete u.id;
          });
        });
      }
    return n;
  };
  b.prototype.load = function(a) {
    this.numQubits = a.numQubits || 1, this.clear(), this.params = JSON.parse(JSON.stringify(a.params || [])), this.options = JSON.parse(JSON.stringify(a.options || {})), this.gates = JSON.parse(JSON.stringify(a.gates || [])), this.customGates = JSON.parse(JSON.stringify(a.customGates || {})), this.cregs = JSON.parse(JSON.stringify(a.cregs || {})), this.options.params = this.options.params || {}, this.options.hybrid = this.options.hybrid || !1, this.options.hybridOptions || (this.options.hybridOptions = this.defaultHybridOptions());
  };
  var ot = function(a) {
    if (a <= 0)
      throw new Error("Cannot generate the gray code for less than 1 bit.");
    var t = [0];
    for (i = 0; i < a; i++) {
      var r = [].concat(t).reverse();
      r.map(function(s) {
        t.push(s + x.pow(2, i));
      });
    }
    var n = [];
    return t.map(function(s) {
      n.push(Dr(s, a));
    }), n;
  };
  b.prototype.grayCodeChain = function(a, t, r) {
    function n(m, l) {
      for (var d = [], c = 0; c < m.length; c++)
        d.push(m[c] != l[c]);
      return d;
    }
    function s(m, l) {
      for (var d = [], c = 0; c < m.length; c++)
        m[c] == l && d.push(c);
      return d;
    }
    function e(m, l) {
      for (var d = 0, c = 0; c < m.length; c++)
        m[c] == l && d++;
      return d;
    }
    for (var o = [], u = 0; u < a; u++)
      o.push(u);
    var p = a, v = ot(a), f = null, h = [];
    return v.map(function(m) {
      var l = m.indexOf("1");
      if (l >= 0) {
        f || (f = m);
        var d = n(m, f), c = d.indexOf(!0);
        if (c >= 0)
          if (c != l)
            h.push({ gateName: "cx", wires: [o[c], o[l]], options: null });
          else
            for (var T = s(m, "1"), _ = 1; _ < T.length; _++)
              h.push({ gateName: "cx", wires: [o[T[_]], o[l]], options: null });
        if (e(m, "1") % 2)
          h.push({ gateName: t, wires: [o[l], p], options: r });
        else {
          var S = null;
          if (r && (S = JSON.parse(JSON.stringify(r)), S.params))
            for (key in S.params) {
              var O = S.params[key];
              typeof O == "number" ? O = 0 - O : O = "-(" + O + ")", S.params[key] = O;
            }
          h.push({ gateName: t, wires: [o[l], p], options: S });
        }
        f = m;
      }
    }), h;
  };
  b.prototype.MCU1Circuit = function(a) {
    var t = 0, r = [];
    if (typeof a == "number")
      t = a;
    else {
      t = a.length || 0;
      for (var n = 0; n < t; n++)
        (!a[n] || typeof a[n] == "number" && a[n] < 0) && r.push(n);
    }
    if (t == 0)
      throw new Error("Cannot create multi-controlled gate with zero control qubits.");
    function s(v, f) {
      f.map(function(h) {
        v.appendGate("x", h);
      });
    }
    var e = "lambda / " + x.pow(2, t - 1), o = { params: { lambda: e } }, u = new b();
    if (t == 1)
      return s(u, r), u.appendGate("cu1", [0, 1], o), s(u, r), u;
    s(u, r);
    var p = this.grayCodeChain(t, "cu1", o);
    return p.map(function(v) {
      u.appendGate(v.gateName, v.wires, v.options);
    }), s(u, r), u;
  };
  b.prototype.MCXCircuit = function(a) {
    var t = 0, r = [];
    if (typeof a == "number")
      t = a;
    else {
      t = a.length || 0;
      for (var n = 0; n < t; n++)
        (!a[n] || typeof a[n] == "number" && a[n] < 0) && r.push(n);
    }
    var s = new b();
    if (t == 0)
      throw new Error("Cannot create multi-controlled gate with zero control qubits.");
    function e(v, f) {
      f.map(function(h) {
        v.appendGate("x", h);
      });
    }
    if (t == 1)
      return e(s, r), s.appendGate("cx", [0, 1]), e(s, r), s;
    if (t == 2)
      return e(s, r), s.appendGate("ccx", [0, 1, 2]), e(s, r), s;
    for (var o = s.MCU1Circuit(t), u = "mcu1_" + t, p = [], n = 0; n < t + 1; n++)
      p.push(n);
    return s.registerGate(u, o), e(s, r), s.appendGate("h", t), s.appendGate(u, p, { params: { lambda: "pi" } }), e(s, r), s.appendGate("h", t), s;
  };
  b.prototype.registerGate = function(a, t) {
    if (t instanceof b ? this.customGates[a] = t.save() : this.customGates[a] = t, this.isMultiControlledGate(a)) {
      var r = this.decodeMultiControlledGateName(a);
      if (r.numCtrlQubits != this.customGates[a].numQubits - 1) {
        r.numCtrlQubits = this.customGates[a].numQubits - 1;
        for (var n = [], s = 0; s < r.numCtrlQubits; s++)
          n.push(typeof r.ctrlQubits[s] == "undefined" ? !0 : r.ctrlQubits[s]);
        r.ctrlQubits = n;
      }
      var e = this.basicGates[r.rootName];
      if (e && e.drawingInfo && e.drawingInfo.connectors) {
        this.customGates[a].drawingInfo || (this.customGates[a].drawingInfo = {});
        var o = [];
        r.ctrlQubits.map(function(u) {
          u ? o.push("dot") : o.push("ndot");
        }), o.push(e.drawingInfo.connectors[e.drawingInfo.connectors.length - 1]), this.customGates[a].drawingInfo.connectors = o, this.customGates[a].drawingInfo.root = e.drawingInfo.root;
      }
    }
  };
  b.prototype.registerMCXGate = function(a) {
    var t = this.multiControlledGateName("mcx", a);
    return this.registerGate(t, this.MCXCircuit(a).save(!0)), t;
  };
  b.prototype.registerMCU1Gate = function(a) {
    var t = this.multiControlledGateName("mcu1", a);
    return this.registerGate(t, this.MCU1Circuit(a).save(!0)), t;
  };
  b.prototype.registerMultiControlledGate = function(a, t) {
    switch (a) {
      case "cx":
        return this.registerMCXGate(t);
      case "cu1":
        return this.registerMCU1Gate(t);
    }
    return "";
  };
  b.prototype.getOrRegisterMultiControlledEquivalent = function(a, t) {
    var r = this.basicGates[a];
    if (r) {
      if (r.drawingInfo && (a == "x" || a == "u1" || r.drawingInfo.root == "x" || r.drawingInfo.root == "u1"))
        if (!this.basicGates["c" + a] || t) {
          for (var n = "c" + (r.drawingInfo.root || a), s = x.log2(r.matrix.length), e = [], o = 0; o < s - 1; o++)
            e.push(!0);
          return e.unshift(!t), this.registerMultiControlledGate(n, e);
        } else
          return "c" + a;
      for (var u in this.basicGates) {
        var p = this.basicGates[u];
        if (p && p.drawingInfo && p.drawingInfo.root && p.drawingInfo.root == a && !t)
          return u;
      }
      return null;
    }
    if (this.customGates[a]) {
      var v = this.decodeMultiControlledGateName(a);
      return !v || !v.numCtrlQubits ? null : v.rootName == "cx" || v.rootName == "cu1" ? (v.ctrlQubits.unshift(!t), this.registerMultiControlledGate(v.rootName, v.ctrlQubits)) : null;
    }
    return null;
  };
  b.prototype.removeUnusedMultiControlledGates = function() {
    var a = this.countOps(null, { shallow: !1 });
    for (gateName in this.customGates)
      a[gateName] || this.isMultiControlledGate(gateName) && delete this.customGates[gateName];
  };
  b.prototype.decodeMultiControlledGateName = function(a) {
    if (!a)
      return null;
    var t = {}, r = a.split("_");
    if (r.length > 0 && (t.name = r[0], t.rootName = t.name.substring(1), t.rootName != "cx" && t.rootName != "cu1"))
      return null;
    if (r.length > 1) {
      var n = parseInt(r[1]);
      !isNaN(n) && n <= 20 && (t.numCtrlQubits = n);
    }
    if (t.numCtrlQubits) {
      var s = [];
      if (r.length > 2)
        for (var e = 0; e < r[2].length; e++)
          r[2][e] == "0" && s.push(!1), r[2][e] == "1" && s.push(!0);
      if (!s.length)
        for (var e = 0; e < n; e++)
          s.push(!0);
      t.ctrlQubits = s;
    }
    return t;
  };
  b.prototype.multiControlledGateName = function(a, t) {
    var r = a + "_";
    if (typeof t == "number")
      r += t;
    else {
      r += t.length || 0;
      var n = "";
      t.map(function(s) {
        !s || typeof s == "number" && s < 0 ? n += "0" : n += "1";
      }), n.indexOf("0") < 0 && (n = ""), n && (r += "_" + n);
    }
    return r;
  };
  b.prototype.isMultiControlledGate = function(a) {
    var t = this.decodeMultiControlledGateName(a), r = !!this.customGates[a] && !!t && !!t.numCtrlQubits;
    return r;
  };
  b.prototype.isControllableGate = function(a) {
    var t = this.basicGates[a];
    if (t) {
      if (t.drawingInfo && (t.drawingInfo.root == "x" || t.drawingInfo.root == "u1"))
        return !0;
      for (var r in this.basicGates) {
        var t = this.basicGates[r];
        if (t && t.drawingInfo && t.drawingInfo.root && t.drawingInfo.root == a)
          return !0;
      }
    }
    return this.isMultiControlledGate(a);
  };
  b.prototype.getGatePosById = function(a) {
    for (var t = this, r = t.numCols(), n = 0; n < r; n++)
      for (var s = 0; s < t.numQubits; s++) {
        var e = t.getGateAt(n, s);
        if (e && e.id == a)
          return {
            wires: e.wires,
            col: n
          };
      }
    return {
      wires: [],
      col: -1
    };
  };
  b.prototype.getGateById = function(a) {
    for (var t = this, r = t.numCols(), n = 0; n < r; n++)
      for (var s = 0; s < t.numQubits; s++) {
        var e = t.getGateAt(n, s);
        if (e && e.id == a)
          return e;
      }
    return null;
  };
  b.prototype.getGateBefore = function(a, t) {
    for (var r = null, n = a - 1; n >= 0 && !r; )
      r = this.getGateAt(n, t), n--;
    return r;
  };
  b.prototype.getGateAt = function(a, t) {
    if (!this.gates[t] || !this.gates[t][a])
      return null;
    var r = JSON.parse(JSON.stringify(this.gates[t][a]));
    if (!r)
      return null;
    r.column = a, r.wires = [];
    for (var n = r.id, s = this.gates.length, t = 0; t < s; t++) {
      var e = this.gates[t][a];
      e && e.id == n && (r.wires[e.connector] = t);
    }
    return r;
  };
  b.prototype.getGatesAtColumn = function(a) {
    for (var t = [], r = this.gates.length, n = 0; n < r; n++) {
      var s = this.getGateAt(a, n);
      s && s.connector == 0 && t.push(s);
    }
    return t;
  };
  b.prototype.getControllableGatesAtColumn = function(a) {
    for (var t = this.getGatesAtColumn(a), r = [], n = 0; n < t.length; n++) {
      var s = t[n];
      this.isControllableGate(s.name) && r.push(s);
    }
    return r;
  };
  b.prototype.exportJavaScript = function(a, t, r, n) {
    var s = this, e = null;
    t ? (e = new b(), e.load(this.save(!0))) : e = this;
    var o = "";
    if (a) {
      var u = (a || "").split(`
`);
      u.map(function(j) {
        j.length >= 2 && j[0] != "/" && j[1] != "/" && (o += "// "), o += j, o += `
`;
      });
    }
    var p = "", v = "";
    if (r)
      p = "    ", v = "circ", o += "const " + r + ` = function() {
`, o += p + "const " + v + " = new QuantumCircuit(" + e.numQubits + `);

`, e.params && e.params.length && (o += p + v + ".params = " + JSON.stringify(e.params) + `

`);
    else {
      p = "", v = "circuit", o += p + `const QuantumCircuit = require("quantum-circuit");

`, o += p + "const " + v + " = new QuantumCircuit(" + e.numQubits + `);

`;
      var f = e.usedGates();
      if (!t) {
        var h = [];
        f.map(function(j) {
          var y = e.basicGates[j];
          if (!y) {
            var Z = s.customGates[j];
            if (Z) {
              var G = new b();
              G.load(Z), o += G.exportJavaScript("", !0, j), h.push(j);
            }
          }
        }), h.map(function(j) {
          o += p + v + '.registerGate("' + j + '", ' + j + `());
`;
        }), h.length > 0 && (o += `
`);
      }
    }
    var m = 0;
    for (var l in this.cregs)
      o += p + v + '.createCreg("' + l + '", ' + (this.cregs[l].length || 1) + `);
`, m++;
    m > 0 && (o += `
`);
    for (var d = e.numCols(), c = 0; c < d; c++)
      for (var T = 0; T < this.numQubits; T++) {
        var _ = e.getGateAt(c, T);
        if (_ && _.connector == 0) {
          var S = _.name;
          if (S == "measure" && _.options && _.options.creg)
            o += p + v + ".addMeasure(" + T + ', "' + _.options.creg.name + '", ' + _.options.creg.bit + `);
`;
          else {
            if (o += p + v + '.appendGate("' + _.name + '"', _.wires.length == 1)
              o += ", ", o += _.wires[0];
            else {
              o += ", [";
              for (var O = 0; O < _.wires.length; O++)
                O > 0 && (o += ","), o += _.wires[O];
              o += "]";
            }
            if (_.options) {
              var k = {};
              for (var Q in _.options)
                if (_.options[Q]) {
                  var R = _.options[Q], g = !1;
                  typeof R == "object" && Object.keys(R).length === 0 && R.constructor === Object && (g = !0), g || (k[Q] = R);
                }
              o += ", " + JSON.stringify(k);
            }
            o += `);
`;
          }
        }
      }
    if (r ? (o += `
`, o += p + "return " + v + `;
`, o += `};

`) : (o += `
`, o += p + v + `.run();

`, o += p + `console.log("Probabilities:");
`, o += p + `console.log(JSON.stringify(circuit.probabilities()));

`, o += p + `console.log("Measure all:");
`, o += p + `console.log(JSON.stringify(circuit.measureAll()));

`, e.cregCount() && (o += p + `console.log("Classical registers:");
`, o += p + `console.log(circuit.cregsAsString());

`)), n) {
      var q = {
        metadata: {
          kernelspec: {
            display_name: "Javascript (Node.js)",
            language: "javascript",
            name: "javascript"
          },
          language_info: {
            file_extension: ".js",
            mimetype: "application/javascript",
            name: "javascript"
          }
        },
        nbformat: 4,
        nbformat_minor: 0,
        cells: [
          {
            cell_type: "code",
            source: o,
            metadata: {},
            outputs: [],
            execution_count: null
          }
        ]
      };
      return JSON.stringify(q);
    }
    return o;
  };
  b.prototype.exportQiskit = function(a, t, r, n, s, e, o, u, p, v, f) {
    var h = {
      comment: a,
      decompose: t,
      versionStr: n,
      providerName: s,
      backendName: e,
      asJupyter: o,
      shots: u,
      hybrid: f
    };
    return this.exportToQiskit(h, r, p, v);
  };
  b.prototype.exportQuEST = function(a, t, r, n) {
    var s = {
      comment: a,
      decompose: t
    };
    return this.exportToQuEST(s, r, n);
  };
  b.prototype.exportQASM = function(a, t, r, n, s, e) {
    var o = {
      comment: a,
      decompose: t,
      compatibilityMode: s
    };
    return this.exportToQASM(o, r, n, e);
  };
  b.prototype.importQASM = function(a, t, r) {
    this.init(), st(this, a, t, r);
  };
  b.prototype.exportPyquil = function(a, t, r, n, s, e, o, u, p) {
    var v = {
      comment: a,
      decompose: t,
      versionStr: n,
      lattice: s,
      asQVM: e,
      asJupyter: o,
      shots: u,
      hybrid: p
    };
    return this.exportToPyquil(v, r);
  };
  b.prototype.exportQuil = function(a, t, r, n) {
    var s = {
      comment: a,
      decompose: t,
      versionStr: n
    };
    return this.exportToQuil(s, r);
  };
  b.prototype.importQuil = function(a, t, r, n, s, e) {
    var o = this;
    r = r || {}, o.init(), s = s || {}, e = e || 0;
    function u($) {
      if (o.customGates && o.customGates[$])
        return { name: $, customGate: o.customGates[$] };
      for (var C in o.basicGates) {
        var K = o.basicGates[C];
        if (K.exportInfo) {
          if (K.exportInfo.quil && K.exportInfo.quil.name == $)
            return { name: C, gateDef: K, quilDef: K.exportInfo.quil };
          if (K.exportInfo.pyquil && K.exportInfo.pyquil.name == $)
            return { name: C, gateDef: K, quilDef: K.exportInfo.pyquil };
        }
      }
      return null;
    }
    var p = a.split(`
`), v = [], f = !1;
    p.map(function($, C) {
      if ($ = $.split("#")[0], $.length ? $ = $.trim() : f = !1, f) {
        var L = $.split(";");
        L.map(function(z) {
          z.trim().length && v[v.length - 1].body.push(z.trim());
        });
      } else if ($.length) {
        var K = $.split(";"), L = [];
        K.map(function(pr) {
          pr.trim().length && L.push(pr.trim());
        }), L.map(function(pr) {
          var z = pr.split(" "), J = z[z.length - 1];
          if (J.length && (J[J.length - 1] == ":" && (f = !0, J = J.substring(0, J.length - 1), z[z.length - 1] = J), z.length)) {
            var M = "GATE";
            (z[0] == "DEFGATE" || z[0] == "DEFCIRCUIT") && (M = z[0], z.splice(0, 1));
            var V = z.join(" "), I = [], F = V.indexOf("(");
            if (F >= 0) {
              var N = V.indexOf(")");
              N > F && (I = V.substring(F + 1, N).split(","), I.map(function(H, U) {
                for (H = H.trim(); H.length && H[0] == "%"; )
                  H = H.slice(1);
                I[U] = H;
              }), N + 1 <= V.length ? (tok = V.substring(N + 1, V.length).split(" "), z = [], tok.map(function(H) {
                H = H.trim(), H.length && z.push(H);
              })) : z = [], V = V.substring(0, F).trim());
            } else
              V = z.splice(0, 1)[0].trim();
            for (var X = [], er = 0; er < z.length; er++) {
              var D = z[er];
              if (n) {
                var tr = n.indexOf(D);
                tr >= 0 ? X.push(tr) : X.push(D);
              } else
                X.push(D);
            }
            v.push({ type: M, name: V, params: I, args: X, body: [], line: C, col: 0 });
          }
        });
      }
    });
    for (var h = v.length, m = 0; m < h; m++) {
      var l = v[m];
      switch (s[l.name] && (l.name = s[l.name]), l.type) {
        case "DEFGATE":
          if (l.name == l.name.toUpperCase()) {
            var d = l.name.toLowerCase();
            s[l.name] = d, l.name = d;
          }
          break;
        case "DEFCIRCUIT":
          {
            if (l.name == l.name.toUpperCase()) {
              var d = l.name.toLowerCase();
              s[l.name] = d, l.name = d;
            }
            var c = l.body.join(`
`), T = l.args, _ = new b();
            _.importQuil(c, t, r, T, s, l.line + 1), _.params = JSON.parse(JSON.stringify(l.params)), o.registerGate(l.name, _.save());
          }
          break;
        case "GATE":
          switch (l.name) {
            case "DECLARE":
              break;
            case "HALT":
              break;
            case "PRAGMA":
              break;
            default: {
              var S = u(l.name);
              if (S) {
                var k = {};
                if (S.gateDef) {
                  var Q = S.gateDef, R = S.quilDef;
                  if ((R.params || []).length != (l.params || []).length) {
                    var O = "Invalid number of params. Expected " + (R.params || []).length + " got " + (l.params || []).length + ".";
                    if (t) {
                      t([{ msg: O, line: e + l.line, col: l.col }]);
                      return;
                    } else
                      throw new Error(O);
                  } else
                    for (var g = 0; g < Q.params.length; g++) {
                      var q = Q.params[g], j = R.params.indexOf(q);
                      if (j < 0 || j >= l.params.length) {
                        var O = 'Internal error: QUIL definition for gate "' + l.name + " is invalid.";
                        if (t) {
                          t([{ msg: O, line: e + l.line, col: l.col }]);
                          return;
                        } else
                          throw new Error(O);
                      } else
                        k[q] = l.params[j];
                    }
                } else {
                  var Q = S.customGate;
                  if ((Q.params || []).length != (l.params || []).length) {
                    var O = "Invalid number of params. Expected " + (Q.params || []).length + " got " + (l.params || []).length + ".";
                    if (t) {
                      t([{ msg: O, line: e + l.line, col: l.col }]);
                      return;
                    } else
                      throw new Error(O);
                  } else
                    for (var g = 0; g < Q.params.length; g++) {
                      var q = Q.params[g];
                      k[q] = l.params[g];
                    }
                }
                if (l.name == "MEASURE") {
                  if (l.args.length != 2) {
                    var O = "Expecting 2 arguments (qubit and target register) but found " + l.args.length + ".";
                    if (t) {
                      t([{ msg: O, line: e + l.line, col: l.col }]);
                      return;
                    } else
                      throw new Error(O);
                  }
                } else {
                  var y = 1;
                  if (Q.numQubits ? y = Q.numQubits : Q.matrix && Q.matrix.length && (y = x.log2(Q.matrix.length)), l.args.length != y) {
                    var O = "Expecting " + y + " arguments but found " + l.args.length + ".";
                    if (t) {
                      t([{ msg: O, line: e + l.line, col: l.col }]);
                      return;
                    } else
                      throw new Error(O);
                  }
                }
                for (var Z = [], G = {}, g = 0; g < l.args.length; g++) {
                  var E = l.args[g];
                  if (l.name == "MEASURE") {
                    var W = E.indexOf("[");
                    if (W >= 0) {
                      var A = E.indexOf("]");
                      A > W && (cregBit = E.substring(W + 1, A), cregName = E.substring(0, W), G = {
                        bit: cregBit,
                        name: cregName
                      });
                    } else {
                      var Y = parseInt(E);
                      if (isNaN(Y))
                        if (g > 0)
                          Z.push(E);
                        else {
                          var O = 'Invalid argument "' + E + '"';
                          if (t) {
                            t([{ msg: O, line: e + l.line, col: l.col }]);
                            return;
                          } else
                            throw new Error(O);
                        }
                      Z.push(Y);
                    }
                  } else {
                    var Y = parseInt(E);
                    if (isNaN(Y)) {
                      var O = 'Invalid argument "' + E + '"';
                      if (t) {
                        t([{ msg: O, line: e + l.line, col: l.col }]);
                        return;
                      } else
                        throw new Error(O);
                    }
                    Z.push(Y);
                  }
                }
                o.appendGate(S.name, Z, { params: k, creg: G });
              } else {
                var O = 'Cannot recognize "' + l.name + '".';
                if (t) {
                  t([{ msg: O, line: e + l.line, col: l.col }]);
                  return;
                } else
                  throw new Error(O);
              }
            }
          }
          break;
      }
    }
    t && t([]);
  };
  b.prototype.importIonq = function(a, t) {
    var r = this, n = a.qubits || 1;
    if (r.init(n), !a.circuit) {
      var s = "Invalid file format.";
      if (t) {
        t([{ msg: s, line: -1, col: -1 }]);
        return;
      } else
        throw new Error(s);
    }
    function e(o) {
      if (r.customGates && r.customGates[o])
        return { name: o, customGate: r.customGates[o] };
      for (var u in r.basicGates) {
        var p = r.basicGates[u];
        if (p.exportInfo && p.exportInfo.ionq && (p.exportInfo.ionq.name && p.exportInfo.ionq.name == o || p.exportInfo.ionq.names && p.exportInfo.ionq.names.indexOf(o) >= 0))
          return { name: u, gateDef: p };
      }
      return null;
    }
    a.circuit.map(function(o) {
      var u = e(o.gate);
      if (!u) {
        var p = 'Unknown gate "' + o.gate + '"';
        if (t) {
          t([{ msg: p, line: -1, col: -1 }]);
          return;
        } else
          throw new Error(p);
      }
      var v = [];
      typeof o.control != "undefined" && v.push(o.control), typeof o.controls != "undefined" && (v = v.concat(o.controls)), typeof o.target != "undefined" && v.push(o.target), typeof o.targets != "undefined" && (v = v.concat(o.targets));
      var f = [];
      typeof o.rotation != "undefined" && f.push(o.rotation), typeof o.phase != "undefined" && f.push(o.phase), typeof o.phases != "undefined" && (f = f.concat(o.phases));
      var h = u.gateDef ? u.gateDef.matrix ? x.log2(u.gateDef.matrix.length) : 1 : u.customGate.numQubits || 1, m = u.gateDef ? u.gateDef.params || [] : u.customGate.params || [];
      if (v.length != h) {
        var p = 'Gate "' + o.gate + '": invalid number of qubits. Expected ' + h + " but got " + v.length + ".";
        if (t) {
          t([{ msg: p, line: -1, col: -1 }]);
          return;
        } else
          throw new Error(p);
      }
      if (f.length != m.length) {
        var p = 'Gate "' + o.gate + '": invalid number of params. Expected ' + m.length + " but got " + f.length + ".";
        if (t) {
          t([{ msg: p, line: -1, col: -1 }]);
          return;
        } else
          throw new Error(p);
      }
      var l = {};
      f.length && (l.params = {}, m.map(function(d, c) {
        l.params[d] = o.rotation ? f[c] : 2 * x.pi * f[c];
      })), r.appendGate(u.name, v, l);
    }), t && t([]);
  };
  b.prototype.exportToIonq = function(a, t) {
    var r = this.options && this.options.params ? this.options.params : {}, r = JSON.parse(JSON.stringify(r));
    for (var n in r)
      r[n] = x.evaluate(r[n]);
    var s = new b();
    s.load(this.save(!0));
    for (var e = {
      qubits: s.numQubits,
      circuit: []
    }, o = s.numCols(), u = 0; u < o; u++)
      for (var p = 0; p < s.numQubits; p++) {
        var v = s.getGateAt(u, p);
        if (v && v.connector == 0) {
          var f = s.getGateDef(v.name);
          if (f.exportInfo && f.exportInfo.ionq)
            if (f.exportInfo.ionq.name || f.exportInfo.ionq.names) {
              var h = {
                gate: f.exportInfo.ionq.name || f.exportInfo.ionq.names[0]
              };
              f.params && f.params.length && (h[f.exportInfo.ionq.paramsKey] = [], f.params.map(function(m) {
                var l = x.evaluate(v.options.params[m], r);
                f.exportInfo.ionq.paramsKey != "rotation" && (l = l / (2 * x.pi)), h[f.exportInfo.ionq.paramsKey].push(l);
              })), e.circuit.push(h);
            } else {
              var h = {
                gate: 'Export gate "' + v.name + '" to IONQ not supported yet. Comming soon.'
              };
              e.circuit.push(h);
            }
          else {
            var h = {
              gate: 'Export gate "' + v.name + '" to IONQ not supported yet. Comming soon.'
            };
            e.circuit.push(h);
          }
        }
      }
    return e;
  };
  b.prototype.exportQuirk = function(a) {
    var t = this, e = null;
    function r(D) {
      for (var tr = [], H = 0; H < D; H++)
        tr.push(H);
      return tr;
    }
    function n(D, tr) {
      return tr.indexOf(D) > -1;
    }
    a = !0;
    var s = this.save(a), e = new b(), o = new b();
    e.load(s), o.load(s);
    var u = {
      cols: [],
      gates: []
    }, p = null, v = this.options && this.options.params ? this.options.params : {}, f = new b(), h = {};
    if (!a)
      for (var y = o.numCols(), m = y - 1; m >= 0; m--)
        for (var l = 0; l < o.numQubits; l++) {
          var d = o.gates[l][m];
          if (d && d.connector == 0 && !o.basicGates[d.name]) {
            customDecomposedCircuit = o.decomposeGateAt(m, l);
            var c = !1;
            h[d.name] = { info: [], isDecomposeCustomCircuit: null };
            for (var T = 0; T < customDecomposedCircuit.numCols(); T++)
              for (var _ = 0; _ < customDecomposedCircuit.numQubits; _++) {
                var S = customDecomposedCircuit.getGateAt(T, _);
                if (S) {
                  var O = customDecomposedCircuit.basicGates[S.name];
                  O.exportInfo && !O.exportInfo.quirk && (c = c || !0), S.connector == 0 && h[d.name].info.push({ gateInCustomCircuit: S, column: m });
                }
                h[d.name].isDecomposeCustomCircuit = c;
              }
            c && e.gates.map(function(tr, H) {
              tr.map(function(U) {
                U && U.name == d.name && e.removeGate(U.id);
              });
            });
          }
        }
    gateKeys = Object.keys(h);
    for (var k = 0; k < gateKeys.length; k++)
      if (gateKey = gateKeys[k], h[gateKey].isDecomposeCustomCircuit)
        for (var Q = h[gateKey].info.length - 1; Q >= 0; Q--) {
          var R = h[gateKey].info[Q], g = R.gateInCustomCircuit;
          e.insertGate(g.name, R.column, g.wires, g.options);
        }
    for (var q = null, j = null, m = 0; m < y; m++)
      for (var l = 0; l < e.numQubits; l++) {
        var d = e.getGateAt(m, l);
        d && (j && j.name != d.name && j.connector != 0 && q == m && (e.removeGate(d.id), e.insertGate(d.name, d.column + 1, d.wires, d.options)), j = d, q = m);
      }
    for (var y = e.numCols(), m = 0; m < y; m++) {
      for (var Z = [], G = [], E = !1, l = 0; l < e.numQubits; l++) {
        var d = e.getGateAt(m, l);
        if (!d || d.name == "measure" || d.name == "reset")
          (E || !n(l, G)) && Z.push(1);
        else {
          var W = e.basicGates[d.name], A = x.max(d.wires), Y = x.min(d.wires), $ = d.wires.slice(), G = r(A);
          if (W) {
            var C = "", K = !1;
            if (E = !0, W.exportInfo && W.exportInfo.quirk && (C = W.exportInfo.quirk.name, K = W.exportInfo.quirk.controlled), W.matrix.length == 4 && (C && d.name == "swap" && d.connector < d.wires.length - 2 && K || d.name != "swap" && d.connector < d.wires.length - 1 && K) && (C = "•"), W.matrix.length == 8 && (C && d.name == "cswap" && d.connector < d.wires.length - 2 && K || d.name != "cswap" && d.connector < d.wires.length - 1 && K) && (C = "•"), C && Z.push(C), !C) {
              C = "~" + d.name, W.params.length && d.options.params && W.params.map(function(nr) {
                angle = x.round(x.evaluate(d.options.params[nr], v), 7), C += "_" + angle;
              });
              var L = "";
              L += "{";
              var pr = t.getRawGate(W, d.options), z = $.sort(), J = [];
              if (d.wires.map(function(nr) {
                J.push(z.indexOf(nr));
              }), A - Y + 1 > d.wires.length || d.wires[0] > d.wires[1] ? p = e.transformMatrix(A - Y + 1, pr, J) : p = pr, p.map(function(nr, xr) {
                xr > 0 && (L += ","), L += "{", nr.map(function(B, ur) {
                  ur > 0 && (L += ","), typeof B != "object" ? B = x.complex(B).toString() : B = B.toString(), L += B;
                }), L += "}";
              }), L += "}", d.connector == 0) {
                var M = u.gates.find(function(nr) {
                  return nr.id == C;
                });
                M || u.gates.push({
                  id: C,
                  matrix: L
                });
                for (var V = !1, I = 0; I < Z.length; I++)
                  Z[I] == C && (V = !0);
                V ? Z.push(1) : Z.push(C);
              } else if (l < d.wires[0]) {
                u.gates.push({
                  id: C,
                  matrix: L
                });
                var M = u.gates.find(function(B) {
                  return B.id == C;
                });
                M || u.gates.push({
                  id: C,
                  matrix: L
                });
                for (var V = !1, I = 0; I < Z.length; I++)
                  Z[I] == C && (V = !0);
                V ? Z.push(1) : Z.push(C);
              }
            }
          } else {
            var F = [];
            if (E = !1, d.connector == 0) {
              var N = f.gates.find(function(nr) {
                return nr && nr[0] && nr[0].name == d.name;
              });
              if (!N) {
                var X = d.wires[0];
                d.wires.map(function(nr) {
                  F.push(nr - X);
                }), f.registerGate(d.name, t.customGates[d.name]), f.appendGate(d.name, F);
              }
              Z.push("~" + d.name);
            } else
              Z.push(1);
          }
        }
      }
      u.cols.push(Z);
    }
    if (!a) {
      var er = e.usedGates();
      er.map(function(D) {
        var tr = e.basicGates[D];
        if (!tr) {
          var H = t.customGates[D];
          if (H) {
            var U = new b();
            for (customCol = 0; customCol < f.numCols(); customCol++)
              for (customWire = 0; customWire < f.numGates(); customWire++) {
                var nr = f.getGateAt(customCol, customWire);
                nr && nr.name == D && (customGateObj = f.decomposeGateAt(customCol, customWire), U.load(customGateObj));
              }
            u.gates.push({
              id: "~" + D,
              circuit: U.exportQuirk(!0)
            });
          }
        }
      });
    }
    return u;
  };
  b.prototype.exportCirq = function(a, t, r, n, s, e, o) {
    var u = {
      comment: a,
      decompose: t,
      versionStr: n,
      asJupyter: s,
      shots: e,
      exportTfq: o
    };
    return this.exportToCirq(u, r);
  };
  b.prototype.exportQSharp = function(a, t, r, n, s, e, o) {
    var u = {
      comment: a,
      decompose: t,
      versionStr: n,
      asJupyter: s,
      circuitName: e,
      indentDepth: o
    };
    return this.exportToQSharp(u, r);
  };
  b.prototype.exportQobj = function(a, t, r, n) {
    var s = {
      circuitName: a,
      experimentName: t,
      numShots: r
    };
    return this.exportToQobj(s, n);
  };
  b.prototype.importQobj = function(a, t) {
    var r = this;
    if (this.init(), !a || !a.experiments || !a.experiments.length) {
      t && t([{ msg: "Invalid input file: no experiments found." }]);
      return;
    }
    var n = a.experiments[0], s = n.header || {};
    this.init(parseInt(s.n_qubits || 0));
    var e = {};
    if (s.creg_sizes && s.creg_sizes.length)
      for (var o = 0, u = 0; u < s.creg_sizes.length; u++) {
        var p = s.creg_sizes[u];
        if (p.length > 1) {
          var v = p[0] + "", f = parseInt(p[1]);
          this.createCreg(v, f);
          var h = (1 << o + f) - (1 << o);
          e[v] = {
            mask: h,
            offset: o
          }, o += f;
        }
      }
    function m(G, E) {
      for (var W in e) {
        var A = e[W];
        if (A.mask == G)
          return {
            creg: W,
            value: E >> A.offset
          };
      }
    }
    function l(G) {
      var E = 0;
      for (var W in r.cregs) {
        var A = r.cregs[W];
        if (E + A.length > G)
          return {
            name: W,
            bit: G - E
          };
        E += A.length;
      }
      return null;
    }
    n.instructions;
    for (var d = {}, c = 0; c < n.instructions.length; c++) {
      var T = n.instructions[c];
      switch (T.name) {
        case "bfunc":
          {
            var _ = m(parseInt(T.mask), parseInt(T.val));
            if (!_) {
              var S = "Invalid classical condition.";
              if (t) {
                t([{ msg: S }]);
                return;
              } else
                throw new Error(S);
            }
            d[T.register] = _;
          }
          break;
        case "measure":
          for (var O = 0; O < T.qubits.length; O++) {
            var k = T.qubits[O], Q = T.memory[O], R = l(Q);
            if (!R) {
              var S = "Invalid measurement destination.";
              if (t) {
                t([{ msg: S }]);
                return;
              } else
                throw new Error(S);
            }
            var g = { creg: R };
            this.appendGate("measure", k, g);
          }
          break;
        case "barrier":
          break;
        default: {
          var g = {
            params: {},
            condition: {}
          }, q = T.name;
          switch (q) {
            case "iden":
              q = "id";
              break;
          }
          var j = this.basicGates[q];
          if (!j) {
            var S = 'Unknown gate "' + T.name + '".';
            if (t) {
              t([{ msg: S }]);
              return;
            } else
              throw new Error(S);
          }
          if (j.params && j.params.length) {
            if (!T.params || !T.params.length || T.params.length != j.params.length) {
              var S = 'Invalid number of params for gate "' + T.name + '".';
              if (t) {
                t([{ msg: S }]);
                return;
              } else
                throw new Error(S);
            }
            for (var y = 0; y < j.params.length; y++) {
              var Z = j.params[y];
              g.params[Z] = T.params[y];
            }
          }
          if (typeof T.conditional != "undefined") {
            var _ = d[T.conditional];
            if (!_) {
              var S = "Invalid classical condition.";
              if (t) {
                t([{ msg: S }]);
                return;
              } else
                throw new Error(S);
            }
            g.condition = _;
          }
          this.appendGate(q, T.qubits, g);
        }
      }
    }
    t && t([]);
  };
  b.prototype.exportTFQ = function(a, t, r, n, s, e) {
    var o = {
      comment: a,
      decompose: t,
      versionStr: n,
      asJupyter: s,
      shots: e
    };
    return this.exportToTFQ(o, r);
  };
  b.prototype.exportBraket = function(a, t, r, n, s, e, o, u) {
    var p = {
      comment: a,
      decompose: t,
      versionStr: n,
      asJupyter: s,
      shots: e,
      hybrid: o,
      indentDepth: u
    };
    return this.exportToBraket(p, r);
  };
  b.prototype.exportSVG = function(a, t) {
    var r = t || {};
    return r.embedded = !!a, this.exportToSVG(r);
  };
  b.prototype.exportToSVG = function(r) {
    var t = this, r = r || {};
    r.embedded = r.embedded || !1, r.cellWidth = r.cellWidth || 40, r.cellHeight = r.cellHeight || 40, r.hSpacing = r.hSpacing || 28, r.vSpacing = r.vSpacing || 34, r.blackboxPaddingX = r.blackboxPaddingX || 2, r.blackboxPaddingY = r.blackboxPaddingY || 2, r.blackboxLineColor = r.blackboxLineColor || "black", r.blackboxSelectedLineColor = r.blackboxSelectedLineColor || "black", r.wireColor = r.wireColor || "black", r.gateLineColor = r.gateLineColor || "black", r.gateSelectedLineColor = r.gateSelectedLineColor || "black", r.cWireColor = r.cWireColor || "silver", r.cWireSelectedColor = r.cWireSelectedColor || "silver", r.cArrowSize = r.cArrowSize || 10, r.hWireColor = r.hWireColor || "black", r.wireWidth = r.wireWidth || 1, r.wireTextHeight = r.wireTextHeight || 8, r.wireTextDown = r.wireTextDown || 16, r.wireMargin = r.wireMargin || 20, r.wireLabelWidth = r.wireLabelWidth || 40, r.dotRadius = r.dotRadius || 5, r.paramTextHeight = r.paramTextHeight || 6, r.selectionPaddingX = r.selectionPaddingX || 4, r.selectionPaddingY = r.selectionPaddingY || 4, r.selectionLineColor = r.selectionLineColor || "#2185D0", r.drawBlochSpheres = r.drawBlochSpheres || !1, typeof r.drawHybrid == "undefined" && (r.drawHybrid = this.options ? !!this.options.hybrid : !1);
    var n = function(P) {
      var rr = 0;
      for (var dr in t.cregs) {
        if (dr == P)
          return rr;
        rr++;
      }
      return rr;
    }, s = function(P) {
      return r.wireLabelWidth + (r.cellWidth + r.hSpacing) * P + r.hSpacing;
    }, e = function(P) {
      return (r.cellHeight + r.vSpacing) * P + r.vSpacing;
    }, o = this.numQubits, u = this.numCols(), p = this.cregCount(), v = u;
    r.drawBlochSpheres && v++;
    var f = v;
    r.drawHybrid && (v += 2);
    var h = s(v), m = s(f), l = (r.cellHeight + r.vSpacing) * (o + p + (r.drawHybrid ? 1 : 0)) + r.vSpacing;
    (r.cellHeight + r.vSpacing) * (o + p) + r.vSpacing;
    var d = (r.cellHeight + r.vSpacing) * (o + p) + (r.vSpacing + r.cellHeight / 2);
    function c(P, rr, dr, sr) {
      var ar = (sr - 90) * Math.PI / 180;
      return {
        x: P + dr * Math.cos(ar),
        y: rr + dr * Math.sin(ar)
      };
    }
    function T(P, rr, dr, sr, ar) {
      var or = c(P, rr, dr, ar), lr = c(P, rr, dr, sr), ir = "0", fr = [
        "M",
        or.x,
        or.y,
        "A",
        dr,
        dr,
        0,
        ir,
        0,
        lr.x,
        lr.y
      ].join(" ");
      return fr;
    }
    var _ = function(P) {
      return (r.cellHeight + r.vSpacing) * P + (r.vSpacing + r.cellHeight / 2);
    }, S = function(P) {
      return (r.cellHeight + r.vSpacing) * P + r.vSpacing;
    }, O = function(P) {
      return (r.cellHeight + r.vSpacing) * (o + n(P)) + (r.vSpacing + r.cellHeight / 2);
    };
    function k(P, rr, dr, sr, ar) {
      var or = r.cellWidth, lr = r.cellHeight, ir = "";
      return ir += '<rect class="qc-gate-box" x="' + P + '" y="' + rr + '" width="' + or + '" height="' + lr + '" stroke="' + (ar ? r.gateSelectedLineColor : r.gateLineColor) + '" fill="white" stroke-width="1" />', sr && (ir += '<text class="qc-gate-label" x="' + (P + or / 2) + '" y="' + (rr + lr / 2) + '" dominant-baseline="middle" text-anchor="middle" fill="' + (ar ? r.gateSelectedLineColor : r.gateLineColor) + '">' + sr + "</text>"), ir;
    }
    function Q(P, rr, dr, sr, ar) {
      var or = r.cellWidth * 2, lr = r.cellHeight, ir = "";
      return ir += '<rect class="qc-gate-rect" x="' + P + '" y="' + rr + '" width="' + or + '" height="' + lr + '" stroke="' + r.gateLineColor + '" fill="white" stroke-width="1" />', sr && (ir += '<text class="qc-gate-label" x="' + (P + or / 2) + '" y="' + (rr + lr / 2) + '" dominant-baseline="middle" text-anchor="middle">' + sr + "</text>"), ir;
    }
    function R(P, rr, dr, sr, ar) {
      var or = P + r.cellWidth / 2, lr = rr + r.cellHeight / 2, ir = r.cellWidth * 0.8, fr = r.cellHeight * 0.8, hr = P + (r.cellWidth - ir) / 2, kr = rr + (r.cellHeight - fr) / 2, jr = "";
      return jr += '<ellipse class="qc-gate-not" cx="' + or + '" cy="' + lr + '" rx="' + ir / 2 + '" ry="' + fr / 2 + '" stroke="' + (ar ? r.gateSelectedLineColor : r.gateLineColor) + '" fill="white" stroke-width="1" />', sr && (jr += '<text class="qc-gate-label" x="' + (hr + ir / 2) + '" y="' + (kr + fr / 2) + '" dominant-baseline="middle" text-anchor="middle">' + sr + "</text>"), jr;
    }
    function g(P, rr, dr, sr) {
      var ar = P + r.cellWidth / 2, or = rr + r.cellHeight / 2, lr = r.cellWidth * 0.8, ir = r.cellHeight * 0.8, fr = P + (r.cellWidth - lr) / 2, hr = rr + (r.cellHeight - ir) / 2, kr = "";
      return kr += '<ellipse class="qc-gate-not" cx="' + ar + '" cy="' + or + '" rx="' + lr / 2 + '" ry="' + ir / 2 + '" stroke="' + (sr ? r.gateSelectedLineColor : r.gateLineColor) + '" fill="white" stroke-width="1" />', kr += '<line class="qc-gate-not-line" x1="' + ar + '" x2="' + ar + '" y1="' + hr + '" y2="' + (hr + ir) + '" stroke="' + (sr ? r.gateSelectedLineColor : r.gateLineColor) + '" stroke-width="1" />', kr += '<line class="qc-gate-not-line" x1="' + fr + '" x2="' + (fr + lr) + '" y1="' + or + '" y2="' + or + '" stroke="' + (sr ? r.gateSelectedLineColor : r.gateLineColor) + '" stroke-width="1" />', kr;
    }
    function q(P, rr, dr, sr) {
      var ar = r.cellWidth, or = r.cellHeight, lr = P + ar / 2, ir = rr + or / 2, fr = or / 5, hr = "";
      return hr += '<rect class="qc-gate-box" x="' + P + '" y="' + rr + '" width="' + ar + '" height="' + or + '" stroke="' + (sr ? r.gateSelectedLineColor : r.gateLineColor) + '" fill="white" stroke-width="1" />', hr += '<path class="gc-gate-gauge-arc" d="' + T(lr, ir + fr, ar / 2.3, 300, 60) + '" stroke="' + (sr ? r.gateSelectedLineColor : r.gateLineColor) + '" fill="none" stroke-width="1" />', hr += '<line class="qc-gate-gauge-scale" x1="' + lr + '" x2="' + (P + ar - fr) + '" y1="' + (ir + fr) + '" y2="' + (rr + fr) + '" stroke="' + (sr ? r.gateSelectedLineColor : r.gateLineColor) + '" stroke-width="1" />', hr;
    }
    function j(P, rr, dr, sr) {
      var ar = r.cellWidth * 0.4, or = r.cellHeight * 0.4, lr = P + (r.cellWidth - ar) / 2, ir = rr + (r.cellHeight - or) / 2, fr = "";
      return fr += '<line class="qc-gate-x" x1="' + lr + '" x2="' + (lr + ar) + '" y1="' + ir + '" y2="' + (ir + or) + '" stroke="' + (sr ? r.gateSelectedLineColor : r.gateLineColor) + '" stroke-width="1" />', fr += '<line class="qc-gate-x" x1="' + lr + '" x2="' + (lr + ar) + '" y1="' + (ir + or) + '" y2="' + ir + '" stroke="' + (sr ? r.gateSelectedLineColor : r.gateLineColor) + '" stroke-width="1" />', fr;
    }
    function y(P, rr, dr, sr) {
      var ar = r.cellWidth, or = r.cellHeight, lr = P + ar / 2, ir = rr + or / 2, fr = "";
      return fr += '<circle class="qc-gate-dot" cx="' + lr + '" cy="' + ir + '" r="' + r.dotRadius + '" stroke="' + (sr ? r.gateSelectedLineColor : r.wireColor) + '" fill="' + (sr ? r.gateSelectedLineColor : r.wireColor) + '" stroke-width="1" />', fr;
    }
    function Z(P, rr, dr, sr) {
      var ar = r.cellWidth, or = r.cellHeight, lr = P + ar / 2, ir = rr + or / 2, fr = "";
      return fr += '<circle class="qc-gate-ndot" cx="' + lr + '" cy="' + ir + '" r="' + r.dotRadius + '" stroke="' + (sr ? r.gateSelectedLineColor : r.wireColor) + '" fill="white" stroke-width="1" />', fr;
    }
    function G(P, rr, dr, sr, ar, or, lr) {
      var ir = "";
      switch (ar != "box" && or && (ir += k(P, rr, dr, "", lr)), ar) {
        case "box":
          ir += k(P, rr, dr, sr, lr);
          break;
        case "rect":
          ir += Q(P, rr, dr, sr);
          break;
        case "circle":
          ir += R(P, rr, dr, sr, lr);
          break;
        case "not":
          ir += g(P, rr, dr, lr);
          break;
        case "x":
          ir += j(P, rr, dr, lr);
          break;
        case "dot":
          ir += y(P, rr, dr, lr);
          break;
        case "ndot":
          ir += Z(P, rr, dr, lr);
          break;
        case "gauge":
          ir += q(P, rr, dr, lr);
          break;
      }
      return ir;
    }
    function E(P, rr, dr) {
      var sr = t.basicGates[P.name] ? t.basicGates[P.name].drawingInfo : null;
      sr || (sr = t.customGates[P.name] ? t.customGates[P.name].drawingInfo : null);
      var ar = !1, or = r && r.selection && r.selection.indexOf(P.id) >= 0;
      for (sr || (P.wires.length == 1 ? sr = { connectors: ["box"] } : (sr = { connectors: [] }, ar = !0)); sr.connectors.length < P.wires.length; )
        sr.connectors.push("box");
      var lr = Math.min.apply(null, P.wires), ir = Math.max.apply(null, P.wires), fr = O(ir), hr = "";
      if (hr += '<g class="qc-gate-group" data-id="' + P.id + '" data-gate="' + P.name + '">', ar) {
        var kr = s(rr) - r.blackboxPaddingX, jr = S(lr) - r.blackboxPaddingY, Zr = r.cellWidth + 2 * r.blackboxPaddingX, Xr = S(ir) + r.cellHeight - jr + r.blackboxPaddingY, Br = kr + Zr / 2;
        fr = jr + Xr, hr += '<text class="qc-blackbox-label" x="' + Br + '" y="' + (jr - r.wireTextHeight - r.blackboxPaddingY * 2) + '" dominant-baseline="hanging" text-anchor="middle" font-size="75%">' + (sr.label || P.name) + "</text>", hr += '<rect class="qc-gate-blackbox" x="' + kr + '" y="' + jr + '" width="' + Zr + '" height="' + Xr + '" stroke="' + (or ? r.blackboxSelectedLineColor : r.blackboxLineColor) + '" fill="transparent" stroke-width="1" />';
      }
      if (or) {
        var kr = s(rr) - r.selectionPaddingX, jr = S(lr) - r.selectionPaddingY, Zr = r.cellWidth + 2 * r.selectionPaddingX, Xr = S(ir) + r.cellHeight - jr + r.selectionPaddingY, Br = kr + Zr / 2;
        fr = jr + Xr, hr += '<rect class="qc-gate-selection" x="' + kr + '" y="' + jr + '" width="' + Zr + '" height="' + Xr + '" stroke="' + r.selectionLineColor + '" fill="transparent" stroke-dasharray="4" stroke-width="1" />';
      }
      if (lr != ir && !ar) {
        var Gr = s(rr) + r.cellWidth / 2, Fr = e(lr) + r.cellHeight / 2, Mr = e(ir) + r.cellHeight / 2;
        hr += '<line class="qc-gate-link" x1="' + Gr + '" x2="' + Gr + '" y1="' + Fr + '" y2="' + Mr + '" stroke="' + (or ? r.gateSelectedLineColor : r.wireColor) + '" stroke-width="1" />';
      }
      var it = Math.max.apply(null, P.wires);
      if (P.wires.map(function(Or, Kr) {
        switch (sr.connectors[Kr]) {
          case "box":
            {
              var Wr = s(rr), Er = e(Or);
              hr = hr + k(Wr, Er, P.name, ar ? Cr(Kr, o) : sr.label || P.name, or), !ar && Or == ir && (fr = Er + r.cellHeight);
            }
            break;
          case "circle":
            {
              var Wr = s(rr), Er = e(Or);
              if (hr = hr + R(Wr, Er, P.name, ar ? Cr(Kr, o) : sr.label || P.name, or), !ar && Or == ir) {
                var Ur = r.cellHeight * 0.8;
                fr = Er + Ur + (r.cellHeight - Ur) / 2;
              }
            }
            break;
          case "not":
            {
              var Rr = s(rr), Hr = e(Or);
              if (hr = hr + g(Rr, Hr, P.name, or), !ar && Or == ir) {
                var Ur = r.cellHeight * 0.8;
                fr = Hr + Ur + (r.cellHeight - Ur) / 2;
              }
            }
            break;
          case "x":
            {
              var Rr = s(rr), Hr = e(Or);
              hr = hr + j(Rr, Hr, P.name, or), !ar && Or == ir && (fr = _(ir));
            }
            break;
          case "dot":
            {
              var Rr = s(rr), Hr = e(Or);
              hr = hr + y(Rr, Hr, P.name, or), !ar && Or == ir && (fr = _(ir) + r.dotRadius);
            }
            break;
          case "ndot":
            {
              var Rr = s(rr), Hr = e(Or);
              hr = hr + Z(Rr, Hr, P.name, or), !ar && Or == ir && (fr = _(ir) + r.dotRadius);
            }
            break;
          case "gauge":
            {
              var Wr = s(rr), Er = e(Or);
              hr = hr + q(Wr, Er, P.name, or), !ar && Or == ir && (fr = Er + r.cellHeight);
            }
            break;
        }
        if (P.options && P.options.params && Or == it) {
          var Wr = s(rr), Er = e(Or), at = Wr + r.cellWidth / 2, Nr = "", $r = 0;
          for (var et in P.options.params) {
            Nr && (Nr += ", ");
            var Jr = P.options.params[et];
            typeof Jr == "string" && Jr.match(/^[\+\-]?\d*\.?\d+(?:[Ee][\+\-]?\d+)?$/) && (Jr = parseFloat(Jr)), typeof Jr == "number" && (Jr = x.round(Jr, 3)), Nr += Jr, $r++;
          }
          Nr.length > 26 && (Nr = "(" + $r + " params)"), hr += '<text class="qc-gate-params" x="' + at + '" y="' + (Er + r.cellHeight + r.paramTextHeight) + '" dominant-baseline="hanging" text-anchor="middle" font-size="75%">' + Nr + "</text>";
        }
      }), P.name == "measure" && P.options && P.options.creg && P.options.creg.name) {
        var Gr = s(rr) + r.cellWidth / 2, Fr = fr, Mr = O(P.options.creg.name);
        hr += '<line class="qc-gate-link-c" x1="' + Gr + '" x2="' + Gr + '" y1="' + Fr + '" y2="' + Mr + '" stroke="' + (or ? r.cWireSelectedColor : r.cWireColor) + '" stroke-width="1" />', hr += '<line class="qc-gate-link-c" x2="' + Gr + '" x1="' + (Gr - r.cArrowSize / 2) + '" y1="' + (Mr - r.cArrowSize) + '" y2="' + Mr + '" stroke="' + (or ? r.cWireSelectedColor : r.cWireColor) + '" stroke-width="1" />', hr += '<line class="qc-gate-link-c" x2="' + Gr + '" x1="' + (Gr + r.cArrowSize / 2) + '" y1="' + (Mr - r.cArrowSize) + '" y2="' + Mr + '" stroke="' + (or ? r.cWireSelectedColor : r.cWireColor) + '" stroke-width="1" />', hr += '<text class="qc-wire-label" x="' + Gr + '" y="' + (Mr + r.wireTextHeight) + '" dominant-baseline="hanging" text-anchor="middle" font-size="75%">' + P.options.creg.bit + "</text>";
      }
      if (P.options && P.options.condition && P.options.condition.creg) {
        var Gr = s(rr) + r.cellWidth / 2, Fr = fr, Mr = O(P.options.condition.creg);
        hr += '<line class="qc-gate-link-c" x1="' + Gr + '" x2="' + Gr + '" y1="' + Fr + '" y2="' + Mr + '" stroke="' + (or ? r.cWireSelectedColor : r.cWireColor) + '" stroke-width="1" />', hr += '<circle class="qc-gate-dot-c" cx="' + Gr + '" cy="' + Mr + '" r="' + r.dotRadius + '" stroke="' + (or ? r.cWireSelectedColor : r.cWireColor) + '" fill="' + (or ? r.cWireSelectedColor : r.cWireColor) + '" stroke-width="1" />', hr += '<text class="qc-wire-label" x="' + Gr + '" y="' + (Mr + r.wireTextHeight) + '" dominant-baseline="hanging" text-anchor="middle" font-size="75%">== ' + P.options.condition.value + "</text>";
      }
      return hr += "</g>", hr;
    }
    function W(P, rr) {
      var dr = "", sr = r.cellWidth + r.hSpacing, ar = r.cellHeight + r.vSpacing, or = s(P) - r.hSpacing, lr = e(rr) - r.vSpacing;
      return rr == o && (ar = r.vSpacing), P == u && (sr = r.hSpacing), dr += '<rect class="qc-gate-placeholder" data-row="' + rr + '" data-col="' + P + '" x="' + or + '" y="' + lr + '" width="' + sr + '" height="' + ar + '" stroke="none" fill="transparent" stroke-width="0" />', dr;
    }
    function A(P, rr, dr) {
      var sr = "", ar = r.cellWidth, or = r.cellHeight, lr = s(rr), ir = e(dr);
      return sr += '<rect class="qc-gate-handle" data-id="' + P.id + '" data-gate="' + P.name + '" data-row="' + dr + '" data-col="' + rr + '" x="' + lr + '" y="' + ir + '" width="' + ar + '" height="' + or + '" stroke="none" fill="transparent" stroke-width="0" />', sr;
    }
    function Y(P, rr, dr, sr) {
      var ar = "", or = r.cellWidth, lr = r.cellHeight, ir = s(P), fr = e(rr);
      return ar += '<g class="' + dr + '" data-row="' + rr + '">', ar += '<rect class="qc-canvas-box" x="' + ir + '" y="' + fr + '" width="' + or + '" height="' + lr + '" stroke="transparent" fill="white" stroke-width="1" />', ar += '<foreignObject class="qc-canvas-object" x="' + ir + '" y="' + fr + '" width="' + or + '" height="' + lr + '">', ar += '<div style="position:relative;">', ar += '<canvas id="' + sr + "-" + rr + '" class="' + sr + '" width="' + or + '" height="' + lr + '">', ar += "</canvas>", ar += "</div>", ar += "</foreignObject>", ar += "</g>", ar;
    }
    function $(P) {
      return P.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    }
    if (r.gateGallery || r.gateGalleryRaw || r.customGateGallery) {
      var C = [];
      if (r.gateGallery || r.gateGalleryRaw) {
        var K = [];
        for (var L in this.basicGates) {
          var pr = this.basicGates[L], z = JSON.parse(JSON.stringify(pr.drawingInfo || { connectors: ["box"] }));
          if (z.connectors) {
            var J = z.label || L, M = z.connectors ? z.connectors[z.connectors.length - 1] : "box";
            r.gateGallery && (M == "x" || M == "dot") && (M = "box");
            var V = J + "|" + M;
            if (K.indexOf(V) < 0 && L != "ccx") {
              K.push(V);
              var I = "";
              r.embedded || (I += '<?xml version="1.0"?>', I += '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">'), I += '<svg class="qc-gate-gallery-item" data-gate="' + $(L) + '" data-content="' + $(pr.description) + '" width="' + r.cellWidth + '" height="' + r.cellHeight + '" version="1.1" xmlns="http://www.w3.org/2000/svg">', I = I + G(0, 0, L, J, M, !!r.gateGallery, !1), I += "</svg>", r.gateGallery ? C.push(I) : C.push({ name: L, svg: I });
            }
          }
        }
        var F = "";
        r.embedded || (F += '<?xml version="1.0"?>', F += '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">'), F += '<svg class="qc-gate-gallery-item" data-gate="dot" data-content="Control" width="' + r.cellWidth + '" height="' + r.cellHeight + '" version="1.1" xmlns="http://www.w3.org/2000/svg">', F = F + G(0, 0, "dot", "dot", "dot", !!r.gateGallery, !1), F += "</svg>", r.gateGallery ? C.push(F) : C.push({ name: "dot", svg: F });
        var N = "";
        r.embedded || (N += '<?xml version="1.0"?>', N += '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">'), N += '<svg class="qc-gate-gallery-item" data-gate="ndot" data-content="Control" width="' + r.cellWidth + '" height="' + r.cellHeight + '" version="1.1" xmlns="http://www.w3.org/2000/svg">', N = N + G(0, 0, "ndot", "ndot", "ndot", !!r.gateGallery, !1), N += "</svg>", r.gateGallery ? C.push(N) : C.push({ name: "dot", svg: N });
      }
      if (r.customGateGallery)
        for (var L in this.customGates) {
          var I = "";
          r.embedded || (I += '<?xml version="1.0"?>', I += '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">'), I += '<svg class="qc-custom-gate-gallery-item" data-gate="' + L + '" width="' + r.cellWidth * 2 + '" height="' + r.cellHeight + '" version="1.1" xmlns="http://www.w3.org/2000/svg">', I = I + G(0, 0, L, L, "rect", !1, !1), I += "</svg>", C.push(I);
        }
      return C;
    } else {
      var I = "";
      if (r.embedded || (I += '<?xml version="1.0"?>', I += '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">'), I += '<svg class="qc-circuit" width="' + h + '" height="' + l + '" version="1.1" xmlns="http://www.w3.org/2000/svg">', r.placeholders)
        for (var X = 0; X <= u; X++)
          for (var er = 0; er <= this.numQubits; er++)
            I += W(X, er);
      for (var er = 0; er < o; er++) {
        var D = _(er), tr = "0";
        r.customGate && (tr = Cr(er, o)), I += '<text class="qc-wire-init" x="0" y="' + D + '" dominant-baseline="middle" text-anchor="start">|' + tr + "&#x27E9;</text>", I += '<line class="qc-wire" x1="' + r.wireMargin + '" x2="' + m + '" y1="' + D + '" y2="' + D + '" stroke="' + r.wireColor + '" stroke-width="' + r.wireWidth + '" />', I += '<text class="qc-wire-label" x="' + r.wireMargin + '" y="' + (D - r.wireTextHeight * 2) + '" dominant-baseline="hanging" text-anchor="start" font-size="75%">q' + er + "</text>";
      }
      for (var H in this.cregs) {
        var D = O(H);
        I += '<text class="qc-wire-init" x="0" y="' + D + '" dominant-baseline="middle" text-anchor="start">0</text>', I += '<line class="qc-wire-c" x1="' + r.wireMargin + '" x2="' + m + '" y1="' + D + '" y2="' + D + '" stroke="' + r.cWireColor + '" stroke-width="' + r.wireWidth + '" />', I += '<text class="qc-wire-label" x="' + r.wireMargin + '" y="' + (D - r.wireTextHeight * 2) + '" dominant-baseline="hanging" text-anchor="start" font-size="75%">' + H + "</text>";
      }
      for (var X = 0; X < u; X++)
        for (var er = 0; er < this.numQubits; er++) {
          var pr = this.getGateAt(X, er);
          pr && pr.connector == 0 && (I += E(pr, X));
        }
      for (var X = 0; X < u; X++)
        for (var er = 0; er < this.numQubits; er++) {
          var pr = this.getGateAt(X, er);
          pr && r.placeholders && (I += A(pr, X, er));
        }
      if (r.drawBlochSpheres) {
        var U = v - 1;
        r.drawHybrid && (U -= 2);
        for (var er = 0; er < this.numQubits; er++)
          I += Y(U, er, "qc-bloch-group", "qc-bloch-canvas");
      }
      if (r.drawHybrid) {
        var U = v - 2, nr = U, xr = s(nr) + r.blackboxPaddingX, B = S(0) + r.blackboxPaddingY, ur = r.cellWidth - 2 * r.blackboxPaddingX, cr = S(o + p - 1) + r.cellHeight - B - r.blackboxPaddingY, vr = xr + ur / 2, yr = B + cr / 2;
        cLinkTopY = B + cr, I += '<rect class="qc-cost-h" x="' + xr + '" y="' + B + '" width="' + ur + '" height="' + cr + '" stroke="' + r.hWireColor + '" fill="white" stroke-width="1" rx="8" />', I += '<text class="qc-label-h" x="' + vr + '" y="' + yr + '" dominant-baseline="middle" text-anchor="middle" fill="' + r.hWireColor + '" transform="rotate(-90, ' + vr + ", " + yr + ')">Cost</text>';
        var Sr = s(nr + 1) + r.blackboxPaddingX, qr = Sr + ur / 2;
        I += '<marker id="qc-arrow-head" orient="auto" markerWidth="8" markerHeight="10" refX="8" refY="5"><path d="M0,0 V10 L8,5 Z" fill="' + r.hWireColor + '"/></marker>', I += '<line class="qc-link-h" x1="' + (xr + ur) + '" x2="' + Sr + '" y1="' + yr + '" y2="' + yr + '" stroke="' + r.hWireColor + '" stroke-width="' + r.wireWidth + '" marker-end="url(#qc-arrow-head)" />', I += '<rect class="qc-optimizer-h" x="' + Sr + '" y="' + B + '" width="' + ur + '" height="' + cr + '" stroke="' + r.hWireColor + '" fill="white" stroke-width="1" rx="8" />', I += '<text class="qc-label-h" x="' + qr + '" y="' + yr + '" dominant-baseline="middle" text-anchor="middle" fill="' + r.hWireColor + '" transform="rotate(-90, ' + qr + ", " + yr + ')">Optimizer</text>';
        var Ir = qr, Tr = cLinkTopY, Lr = d;
        I += '<line class="qc-wire-h" x1="' + Ir + '" x2="' + Ir + '" y1="' + Tr + '" y2="' + Lr + '" stroke="' + r.hWireColor + '" stroke-dasharray="4" stroke-width="1" />';
        var _r = 0, br = this.findGlobalParams();
        if (br.globalParams.length) {
          _r = s(br.cells[0][0]) + r.cellWidth + r.hSpacing / 2;
          for (var mr = 0; mr < br.cells.length; mr++) {
            var Qr = br.cells[mr], gr = s(Qr[0]) + r.cellWidth + r.hSpacing / 2, wr = e(Qr[1]) + r.cellHeight + r.vSpacing - r.paramTextHeight / 2, Ar = d, zr = s(Qr[0]) + r.cellWidth, Pr = e(Qr[1]) + r.cellHeight + r.paramTextHeight * 2 + 4;
            I += '<line class="qc-wire-h" x1="' + gr + '" x2="' + gr + '" y1="' + Ar + '" y2="' + wr + '" stroke="' + r.hWireColor + '" stroke-dasharray="4" stroke-width="1" />', I += '<line class="qc-wire-h" x1="' + gr + '" x2="' + zr + '" y1="' + wr + '" y2="' + Pr + '" stroke="' + r.hWireColor + '" stroke-dasharray="4" stroke-width="1" marker-end="url(#qc-arrow-head)" />';
          }
          var D = d;
          I += '<line class="qc-wire-h" x1="' + _r + '" x2="' + qr + '" y1="' + D + '" y2="' + D + '" stroke="' + r.hWireColor + '" stroke-dasharray="4" stroke-width="' + r.wireWidth + '" />';
        } else {
          _r = s(f + 1);
          var D = d;
          I += '<line class="qc-wire-h" x1="' + qr + '" x2="' + _r + '" y1="' + D + '" y2="' + D + '" stroke="' + r.hWireColor + '" stroke-dasharray="4" stroke-width="' + r.wireWidth + '"  marker-end="url(#qc-arrow-head)" />', I += '<text class="qc-warning-params-h" x="' + (_r - 5) + '" y="' + D + '" dominant-baseline="middle" text-anchor="end">(no global params)</text>';
        }
      }
      I += "</svg>";
    }
    return I;
  };
  b.prototype.exportToQiskit = function(a, t, r, n) {
    a = a || {};
    var s = a.comment, e = a.decompose, o = a.versionStr, u = a.providerName, p = a.backendName, v = a.asJupyter, f = a.shots, h = a.hybrid;
    typeof h == "undefined" && (h = this.options ? !!this.options.hybrid : !1);
    var m = this.options && this.options.hybridOptions && this.options.hybridOptions.costFunction && this.options.hybridOptions.costFunction.python || "", l = this;
    u = u || "Aer", p = p || "", u == "Aer" && (p || (h && m.indexOf("state") >= 0 ? p = "statevector_simulator" : p = "qasm_simulator"), p == "aer_simulator" && (p = "qasm_simulator"), p == "aer_simulator_statevector" && (p = "statevector_simulator")), u == "IONQ" && (p || (p = "ionq_simulator")), f = f || 1024;
    var d = new b();
    d.load(this.save(e));
    var c = "";
    if (s) {
      var T = (s || "").split(`
`);
      T.map(function(B) {
        B.length >= 1 && B[0] != "#" && (c += "# "), c += B, c += `
`;
      });
    }
    var _ = function(B, ur) {
      if (B.isSymbolNode) {
        var cr = ["pi", "sin", "cos", "tan", "asin", "acos", "atan"];
        if (cr.indexOf(B.name) >= 0)
          return "np." + B.name;
        var vr = B.name;
        if (ur.replaceVars && typeof ur.replaceVars[vr] != "undefined")
          return vr = ur.replaceVars[vr], l.params.indexOf(vr) >= 0 && h ? "params[" + l.params.indexOf(vr) + "]" : vr;
        if (l.params.indexOf(B.name) >= 0 && h)
          return "params[" + l.params.indexOf(B.name) + "]";
      }
    }, S = function(B, ur) {
      var cr = "", vr = B.split(`
`), yr = -1;
      vr.map(function(Ir) {
        var Tr = Ir.search(/\S/);
        Tr >= 0 && (yr < 0 || Tr < yr) && (yr = Tr);
      }), yr < 0 && (yr = 0);
      var Sr = "";
      if (yr < ur.length)
        for (var qr = 0; qr < ur.length - yr; qr++)
          Sr += " ";
      return vr.map(function(Ir) {
        cr += Sr + Ir + `
`;
      }), cr;
    };
    if (t) {
      if (c += "def " + t + "(qc", d.params && d.params.length)
        for (var O = 0; O < d.params.length; O++)
          c += ", ", c += d.params[O];
      for (var k = 0; k < d.numQubits; k++)
        c += ", ", c += Cr(k, d.numQubits);
      c += `):
`;
    } else if (!r) {
      var Q = d.usedGates();
      c += `from qiskit import QuantumCircuit, QuantumRegister, ClassicalRegister
`;
      var R = !1, g = !1;
      switch (u) {
        case "Aer":
          c += "from qiskit import execute, " + u + `
`, h && m.indexOf("state") >= 0 && p != "statevector_simulator" && (c += `from qiskit_experiments.library import StateTomography
`);
          break;
        case "IBMQ":
          c += "from qiskit import execute, " + u + `
from qiskit.providers.ibmq import least_busy
`, h && m.indexOf("state") >= 0 && (c += `from qiskit_experiments.library import StateTomography
`);
          break;
        case "IONQ":
          R = !0, c += `from qiskit_ionq import IonQProvider
`, h && m.indexOf("state") >= 0 && (c += `from qiskit_experiments.library import StateTomography
`);
          break;
      }
      (Q.indexOf("ms") >= 0 || Q.indexOf("gpi") >= 0 || Q.indexOf("gpi2") >= 0) && (R = !0, c += `from qiskit_ionq import GPIGate, GPI2Gate, MSGate
`), R && (c += `from qiskit import transpile
`), h && (c += `from scipy.optimize import minimize
`, c += `from collections import Counter
`), c += `import numpy as np
`, c += `
`;
      var q = "";
      switch (u) {
        case "Aer":
          c += q + "backend = Aer.get_backend('" + p + `')
`, c += `
`;
          break;
        case "IBMQ":
          c += q + `IBMQ.load_account()
`, c += q + `provider = IBMQ.get_provider(hub="ibm-q", group="open", project="main")
`, p ? c += q + 'backend = provider.get_backend("' + p + `")
` : (c += q + `backends = provider.backends()
`, c += q + `backend = least_busy(backends)
`), c += `
`;
          break;
        case "IONQ":
          {
            var j = ["measure", "delay", "barrier", "reset", "snapshot", "ms", "gpi2", "gpi"];
            g = !0, Q.map(function(B) {
              j.indexOf(B) < 0 && (g = !1);
            }), c += q + `# Requires QISKIT_IONQ_API_TOKEN environment variable to be set
`, c += q + `provider = IonQProvider()
`, c += q + 'backend = provider.get_backend("' + p + '"', g && (c += ', gateset="native"'), c += `)

`;
          }
          break;
      }
      f && (c += "shots = " + f + `
`, c += `
`);
      var y = this.options && this.options.params ? this.options.params : {};
      if (this.params.length) {
        for (var k = 0; k < this.params.length; k++) {
          var Z = this.params[k], G = x.parse(y[Z]), E = G.toString({ handler: _ });
          c += Z + " = " + E + `
`;
        }
        c += `
`;
      }
      h && (c += "tolerance = " + (this.options && this.options.hybridOptions && this.options.hybridOptions.tolerance && this.options.hybridOptions.tolerance || "0.001") + `
`, c += `
`), e || Q.map(function(B) {
        var ur = d.basicGates[B];
        if (!ur) {
          var cr = l.customGates[B];
          if (cr) {
            var vr = new b();
            vr.load(cr);
            var yr = {
              comment: "",
              decompose: !0,
              versionStr: o,
              providerName: "",
              backendName: !1,
              asJupyter: !1,
              shots: !1,
              hybrid: null
            };
            c += vr.exportToQiskit(yr, B, r, n);
          }
        }
      }), h && (q = "  ", c += `def objective_function(params):
`), c += q + `qc = QuantumCircuit()
`, c += `
`, c += q + "q = QuantumRegister(" + d.numQubits + `, 'q')
`;
      for (var W in this.cregs)
        c += q + W + " = ClassicalRegister(" + (this.cregs[W].length || 1) + ", '" + W + `')
`;
      c += `
`, c += q + `qc.add_register(q)
`;
      for (var W in this.cregs)
        c += q + "qc.add_register(" + W + `)
`;
      c += `
`;
    }
    for (var A = d.numCols(), Y = 0; Y < A; Y++)
      for (var $ = 0; $ < this.numQubits; $++) {
        var C = d.getGateAt(Y, $), K = null, L = null, pr = null;
        if (C && C.connector == 0) {
          pr = C.options && C.options.condition && C.options.condition.creg ? C.options.condition : null;
          var z = d.getGateDef(C.name);
          if (z && z.exportInfo && !g && (z.exportInfo.qiskit && z.exportInfo.qiskit.replacement ? (K = z.exportInfo.qiskit.replacement, K.map(function(B) {
            var ur = new b();
            if (C.options && C.options.params) {
              var cr = Object.keys(C.options.params), vr = Object.keys(B.params);
              cr.map(function(Sr) {
                vr.indexOf(Sr) > -1 && (B.params[Sr] = C.options.params[Sr]);
              });
            }
            ur.addGate(B.name, Y, C.wires, { params: B.params, condition: pr });
            var yr = {
              comment: "",
              decompose: !1,
              versionStr: !1,
              providerName: !1,
              backendName: !1,
              asJupyter: !1,
              shots: !1,
              hybrid: null
            };
            c += S(ur.exportToQiskit(yr, !1, !0, !!t || n), q);
          })) : z.exportInfo.qiskit && z.exportInfo.qiskit.equivalent && (L = z.exportInfo.qiskit.equivalent, L.map(function(B) {
            var ur = new b(), cr = B.wires.length > 1 ? C.wires : C.wires[B.wires[0]], vr = {};
            if (B.params) {
              var yr = {};
              if (C.options && C.options.params)
                for (var Sr in C.options.params) {
                  var qr = x.parse(C.options.params[Sr]), Ir = qr.toString({ handler: _ });
                  yr[Sr] = Ir;
                }
              for (var Tr in B.params) {
                var qr = x.parse(B.params[Tr]), Ir = qr.toString({ handler: _, replaceVars: yr });
                vr[Tr] = Ir;
              }
            }
            ur.addGate(B.name, Y, cr, { params: vr, condition: pr });
            var Lr = {
              comment: "",
              decompose: !1,
              versionStr: !1,
              providerName: !1,
              backendName: !1,
              asJupyter: !1,
              shots: !1,
              hybrid: null
            };
            c += S(ur.exportToQiskit(Lr, !1, !0, !!t || n), q);
          }))), !K && !L && (t || n || h) && (c += "  "), !K && !L) {
            var J = C.name, M = C.options && C.options.params ? C.options.params : {};
            p == "statevector_simulator" && J == "measure" && h && (c += "# "), this.basicGates[J] && (c += "qc."), z && z.exportInfo && z.exportInfo.qiskit && z.exportInfo.qiskit.name ? J = z.exportInfo.qiskit.name : J = C.name;
            var V = !1, I = !1;
            J == "ms" && (V = !0, I = !0, J = "MSGate"), J == "gpi" && g && (V = !0, I = !0, J = "GPIGate"), J == "gpi2" && g && (V = !0, I = !0, J = "GPI2Gate"), V && (c += "append("), c += J + "(";
            var F = 0;
            if (M) {
              var z = this.basicGates[C.name];
              if (z || (z = this.customGates[C.name], c += "qc", F++), z) {
                var N = z.params || [], X = N.length;
                if (X) {
                  for (var er = 0; er < X; er++) {
                    F > 0 && (c += ", ");
                    var D = N[er];
                    if (M[D] || M[D].toString()) {
                      var G = x.parse(M[D]), tr = G.toString({ handler: _ });
                      I && (tr = "(" + tr + ") / (2*np.pi)"), c += tr;
                    }
                    F++;
                  }
                  J == "cu" && !M.gamma && (c += ", 0", F++);
                }
              }
            }
            if (V) {
              F && (c += "), "), c += "[";
              for (var H = 0; H < C.wires.length; H++)
                H > 0 && (c += ", "), t || n ? c += Cr(C.wires[H], d.numQubits) : c += C.wires[H], F++;
              c += "]";
            } else
              for (var H = 0; H < C.wires.length; H++)
                F > 0 && (c += ", "), t || n ? c += Cr(C.wires[H], d.numQubits) : c += "q[" + C.wires[H] + "]", F++;
            J == "measure" && C.options && C.options.creg && (F > 0 && (c += ", "), c += C.options.creg.name + "[" + C.options.creg.bit + "]", F++), c += ")", C.options && C.options.condition && C.options.condition.creg && (c += ".c_if(" + C.options.condition.creg + ", " + C.options.condition.value + ")"), c += `
`;
          }
        }
      }
    if (!r) {
      if (t)
        c += `
`;
      else {
        c += `
`, R && (c += q + `qc = transpile(qc, backend)
`);
        var q = "";
        if (h && (q = "  "), u == "Aer") {
          var U = "";
          U += q + "job = execute(qc, backend=backend", f && (U += ", shots=shots"), U += `)
`, U += q + `job_result = job.result()
`, h ? (p == "statevector_simulator" ? (c += U, c += q + `state = job_result.get_statevector(qc).data
`, c += `
`) : m.indexOf("state") >= 0 ? (c += q + `qst = StateTomography(qc)
`, c += q + `qst_analysis = qst.run(backend).block_for_results()
`, c += q + `density = qst_analysis.analysis_results("state").value
`, c += q + `state = np.diag(density)
`) : (c += U, c += q + `counts = Counter(job_result.get_counts(qc))
`, c += `
`), m.trim() || (m = `# CALCULATE COST HERE
cost = 0`), c += S(m, q), c += `
`, c += q + `return cost
`) : (c += U, c += q + `print(job_result.get_counts(qc))
`);
        }
        if (u == "IBMQ") {
          var U = "";
          U += q + "job = execute(qc, backend=backend", f && (U += ", shots=shots"), U += `)
`, U += q + `job_result = job.result()
`, h ? (m.indexOf("state") >= 0 ? (c += q + `qst = StateTomography(qc)
`, c += q + `qst_analysis = qst.run(backend).block_for_results()
`, c += q + `density = qst_analysis.analysis_results("state").value
`, c += q + `state = np.diag(density)
`, c += `
`) : (c += U, c += q + `counts = Counter(job_result.get_counts(qc))
`, c += `
`), m.trim() || (m = `# CALCULATE COST HERE
cost = 0`), c += S(m, q), c += `
`, c += q + `return cost
`) : (c += U, c += q + `print(job_result.get_counts(qc))
`);
        }
        if (u == "IONQ") {
          var U = "";
          U += q + "job = backend.run(qc", f && (U += ", shots=shots"), U += `)
`, U += q + `job_result = job.result()
`, h ? (m.indexOf("state") >= 0 ? (c += q + `qst = StateTomography(qc)
`, c += q + `qst_analysis = qst.run(backend).block_for_results()
`, c += q + `density = qst_analysis.analysis_results("state").value
`, c += q + `state = np.diag(density)
`) : (c += U, c += q + `counts = Counter(job.get_counts())
`, c += `
`), m.trim() || (m = `# CALCULATE COST HERE
cost = 0`), c += S(m, q), c += `
`, c += q + `return cost
`) : (c += U, c += q + `print(job.get_counts())
`);
        }
        if (h) {
          var nr = "";
          this.params.map(function(ur, cr) {
            cr > 0 && (nr += ", "), nr += ur;
          }), c += `
`, c += "params = np.array([" + nr + `])
`, c += `
`, c += 'minimum = minimize(objective_function, params, method="' + (this.options && this.options.hybridOptions && this.options.hybridOptions.optimizer ? this.options.hybridOptions.optimizer : "Powell") + `", tol=tolerance)
`, c += `print("cost:", minimum.fun, "params:", minimum.x)
`;
        }
      }
      if (v) {
        var xr = {
          metadata: {
            kernelspec: {
              display_name: "Python 3",
              language: "python",
              name: "python3"
            }
          },
          nbformat: 4,
          nbformat_minor: 0,
          cells: [
            {
              cell_type: "code",
              source: c,
              metadata: {},
              outputs: [],
              execution_count: null
            }
          ]
        };
        return JSON.stringify(xr);
      }
    }
    return c;
  };
  b.prototype.exportToQuEST = function(a, t, r) {
    a = a || {};
    var n = a.comment, s = a.decompose, e = this;
    r = r || [];
    var u = null, o = ["unitary", "controlledUnitary"], u = new b();
    u.load(this.save(s));
    var p = "";
    if (n) {
      var v = (n || "").split(`
`);
      v.map(function(E) {
        E.length >= 2 && E[0] != "/" && E[1] != "/" && (p += "// "), p += E, p += `
`;
      });
    }
    for (var f = 0; f < this.numQubits; f++)
      for (var h = this.gates[f], m = 0; m < h.length; m++) {
        var l = h[m];
        if (!(!l || !this.basicGates[l.name]) && this.basicGates[l.name].exportInfo && this.basicGates[l.name].exportInfo.quest) {
          var d = this.basicGates[l.name].exportInfo.quest.name;
          if (r.includes(l.name))
            continue;
          (o.includes(d) || this.basicGates[l.name].exportInfo.quest.func) && r.push(l.name);
        }
      }
    if (t) {
      p += "Qureg " + t + "(Qureg qubits";
      for (var f = 0; f < u.numQubits; f++)
        p += ", const int q", p += f;
      if (u.params && u.params.length)
        for (var f = 0; f < u.params.length; f++)
          p += ", double " + u.params[f];
      p += `) {
`;
    } else {
      p += `#include <math.h>
#include "QuEST.h"

`, p += `#ifndef M_PI
#define M_PI 3.14159265
#endif

`;
      var c = [], T = u.usedGates();
      s || T.map(function(E) {
        var W = u.basicGates[E];
        if (!W) {
          var A = e.customGates[E];
          if (A) {
            var Y = new b();
            Y.load(A);
            var $ = {
              comment: "",
              decompose: !1
            };
            c.push(Y.exportToQuEST($, E, r));
          }
        }
      });
      for (var f = 0; f < r.length; f++) {
        var _ = r[f], d = this.basicGates[_].exportInfo.quest.name;
        switch (d) {
          case "unitary":
          case "controlledUnitary":
            {
              matrix = this.basicGates[_].exportInfo.quest.matrix;
              var S = this.basicGates[_].exportInfo.quest.params;
              if (p += "void " + _ + "(Qureg qubits, const int q", d == "controlledUnitary" && (p += "1, const int q2"), S)
                for (var m = 0; m < S.length; m++)
                  p += ", double " + S[m];
              p += `) {
`, p += `    ComplexMatrix2 u;
`, p += "    u.r0c0 = (Complex) {.real=" + matrix[0][0][0] + ", .imag= " + matrix[0][0][1] + `};
`, p += "    u.r0c1 = (Complex) {.real=" + matrix[0][1][0] + ", .imag= " + matrix[0][1][1] + `};
`, p += "    u.r1c0 = (Complex) {.real=" + matrix[1][0][0] + ", .imag= " + matrix[1][0][1] + `};
`, p += "    u.r1c1 = (Complex) {.real=" + matrix[1][1][0] + ", .imag= " + matrix[1][1][1] + `};
`, p += "    " + d + "(qubits, q", d == "controlledUnitary" && (p += "1, q2"), p += `, u);
}

`;
            }
            break;
          default:
            p += this.basicGates[_].exportInfo.quest.func + `

`;
            break;
        }
      }
      for (var f = 0; f < c.length; f++)
        p += c[f];
      p += `int main(int argc, char *argv[]) {
`, p += `    QuESTEnv env = createQuESTEnv();
`, p += "    Qureg qubits = createQureg(" + u.numQubits + `, env);
`, p += "    int measured[" + u.numQubits + `];

`;
    }
    p += `
`;
    for (var O = u.numCols(), k = 0; k < O; k++)
      for (var Q = 0; Q < this.numQubits; Q++) {
        var l = u.getGateAt(k, Q);
        if (l && l.connector == 0) {
          l.options && l.options.condition && l.options.condition.creg && (p += "if(" + l.options.condition.creg + "==" + l.options.condition.value + `) {
`);
          var _ = l.name, R = l.options && l.options.params ? l.options.params : {}, g = this.basicGates[_];
          if (_ == "measure")
            p += "    measured[" + l.wires[0] + "] = measure(qubits, " + l.wires[0];
          else if (g) {
            var d = g.exportInfo.quest.name, S = g.exportInfo.quest.params;
            o.includes(d) ? p += "    " + _ + "(qubits" : p += "    " + d + "(qubits";
            for (var q = 0; q < l.wires.length; q++)
              t ? p += ", q" + l.wires[q] : p += ", " + l.wires[q];
            if (S)
              switch (d) {
                case "compactUnitary":
                  p += ", " + S.alpha, p += ", " + S.beta;
                  break;
                case "phaseShift":
                case "controlledPhaseShift":
                  S.theta && (p += ", " + S.theta);
                  break;
              }
          } else {
            g = this.customGates[_], p += "    qubits = " + _ + "(qubits";
            for (var q = 0; q < l.wires.length; q++)
              p += ", " + l.wires[q];
          }
          if (R) {
            var g = this.basicGates[_];
            if (g || (g = this.customGates[_]), g) {
              var j = g.params || [], y = j.length;
              if (y)
                for (var Z = 0; Z < y; Z++) {
                  var G = j[Z];
                  p += ", " + R[G];
                }
            }
          }
          p += `);
`, l.options && l.options.condition && l.options.condition.creg && (p += `}
`);
        }
      }
    return t ? p += `
    return qubits;
}

` : (p += `
    destroyQureg(qubits, env);
`, p += `    destroyQuESTEnv(env);
`, p += `    return 0;
}
`), p;
  };
  b.prototype.exportToQASM = function(a, t, r, n) {
    a = a || {};
    var s = a.comment, e = a.decompose, o = a.compatibilityMode, u = this, p = this.options && this.options.params ? this.options.params : {}, v = function(C, K) {
      if (C.isSymbolNode) {
        var L = C.name;
        if (K.replaceVars && typeof K.replaceVars[L] != "undefined") {
          var L = K.replaceVars[L];
          return !o && u.params.indexOf(L) >= 0 ? "(" + p[L] + ")" : "(" + L + ")";
        }
        if (!o && u.params.indexOf(C.name) >= 0)
          return p[C.name];
      }
    }, f = null, f = new b();
    f.load(this.save(e));
    var h = "";
    if (s) {
      var m = (s || "").split(`
`);
      m.map(function(C) {
        C.length >= 2 && C[0] != "/" && C[1] != "/" && (h += "// "), h += C, h += `
`;
      });
    }
    if (t) {
      if (h += "gate " + t, f.params && f.params.length) {
        h += "(";
        for (var l = 0; l < f.params.length; l++)
          l > 0 && (h += ", "), h += f.params[l];
        h += ")";
      }
      for (var d = 0; d < f.numQubits; d++)
        d == 0 && (h += " "), d > 0 && (h += ", "), h += Cr(d, f.numQubits);
      h += `
{
`;
    } else if (!r) {
      h += `OPENQASM 2.0;
`, h += `include "qelib1.inc";
`, h += "qreg q[" + f.numQubits + `];
`;
      for (var c in f.cregs)
        h += "creg " + c + "[" + (f.cregs[c].length || 1) + `];
`;
      var T = f.usedGates();
      e || T.map(function(C) {
        var K = f.basicGates[C];
        if (!K) {
          var L = u.customGates[C];
          if (L) {
            var pr = new b();
            pr.load(L);
            var z = {
              comment: "",
              decompose: !1,
              compatibilityMode: o
            };
            h += pr.exportToQASM(z, C, !1, !1);
          }
        }
      });
    }
    for (var _ = f.numCols(), S = 0; S < _; S++)
      for (var O = 0; O < f.numQubits; O++) {
        var k = f.getGateAt(S, O), Q = null, R = null;
        if (k && k.connector == 0) {
          var g = k.name;
          if (!o) {
            var q = f.getGateDef(k.name);
            q && q.exportInfo && (q.exportInfo.qasm && q.exportInfo.qasm.name ? g = q.exportInfo.qasm.name : q.exportInfo.qasm && q.exportInfo.qasm.replacement ? (Q = q.exportInfo.qasm.replacement, Q.map(function(C) {
              var K = new b();
              if (K.cregs = JSON.parse(JSON.stringify(u.cregs)), k.options && k.options.params) {
                var L = Object.keys(k.options.params), pr = Object.keys(C.params);
                L.map(function(M) {
                  pr.indexOf(M) >= 0 && (C.params[M] = k.options.params[M]);
                });
              }
              var z = k.options && k.options.condition ? k.options.condition : {};
              K.addGate(C.name, S, k.wires, { params: C.params, condition: z });
              var J = {
                comment: "",
                decompose: !1,
                compatibilityMode: o
              };
              h += K.exportToQASM(J, !1, !0, !!t || n);
            })) : q.exportInfo.qasm && q.exportInfo.qasm.equivalent && (R = q.exportInfo.qasm.equivalent, R.map(function(C) {
              var K = new b();
              K.cregs = JSON.parse(JSON.stringify(u.cregs));
              var L = C.wires.length > 1 ? k.wires : k.wires[C.wires[0]], pr = {};
              if (C.params) {
                var z = {};
                if (k.options && k.options.params)
                  for (var J in k.options.params) {
                    var M = x.parse(k.options.params[J]), V = M.toString({ handler: v });
                    z[J] = V;
                  }
                for (var I in C.params) {
                  var M = x.parse(C.params[I]), V = M.toString({ handler: v, replaceVars: z });
                  pr[I] = V;
                }
              }
              var F = k.options && k.options.condition ? k.options.condition : {};
              K.addGate(C.name, S, L, { params: pr, condition: F });
              var N = {
                comment: "",
                decompose: !1,
                compatibilityMode: o
              };
              h += K.exportToQASM(N, "", !0, !!t || n);
            })));
          }
          if (!Q && !R && ((t || n) && (h += "  "), k.options && k.options.condition && k.options.condition.creg && (h += "if(" + k.options.condition.creg + "==" + k.options.condition.value + ") ")), !Q && !R || o) {
            var j = k.name, y = k.options && k.options.params ? k.options.params : {};
            if (h += o ? k.name : g, y) {
              var q = f.basicGates[j];
              if (q || (q = f.customGates[j]), q) {
                var Z = q.params || [], G = Z.length;
                if (G) {
                  h += " (";
                  for (var E = 0; E < G; E++) {
                    E > 0 && (h += ", ");
                    var W = Z[E], A = y[W];
                    if (!t && !n && !o) {
                      var Y = x.parse(y[W]);
                      A = Y.toString({ handler: v });
                    }
                    h += A;
                  }
                  h += ")";
                }
              }
            }
            for (var $ = 0; $ < k.wires.length; $++)
              $ > 0 && (h += ","), t || n ? h += " " + Cr(k.wires[$], f.numQubits) : h += " q[" + k.wires[$] + "]";
            j == "measure" && k.options && k.options.creg && (h += " -> ", h += k.options.creg.name + "[" + k.options.creg.bit + "]"), h += `;
`;
          }
        }
      }
    return t && (h += `}

`), h;
  };
  b.prototype.exportToPyquil = function(a, t) {
    a = a || {};
    var r = a.comment, n = a.decompose, s = a.versionStr, e = a.lattice, o = a.asQVM, u = a.asJupyter, p = a.shots, v = a.hybrid, f = this, h = parseFloat(s || "2.12");
    isNaN(h) && (h = 2.1), p || (p = 1024), typeof v == "undefined" && (v = this.options ? !!this.options.hybrid : !1);
    var m = new b();
    m.load(this.save(n));
    var l = function(_r, br) {
      if (_r.isSymbolNode) {
        var mr = ["pi", "sin", "cos", "tan", "asin", "acos", "atan"];
        if (mr.indexOf(_r.name) >= 0)
          return "np." + _r.name;
        if (f.params.indexOf(_r.name) >= 0 && v)
          return "params[" + f.params.indexOf(_r.name) + "]";
      }
    }, d = function(_r, br) {
      var mr = "", Qr = _r.split(`
`), gr = -1;
      Qr.map(function(zr) {
        var Pr = zr.search(/\S/);
        Pr >= 0 && (gr < 0 || Pr < gr) && (gr = Pr);
      }), gr < 0 && (gr = 0);
      var wr = "";
      if (gr < br.length)
        for (var Ar = 0; Ar < br.length - gr; Ar++)
          wr += " ";
      return Qr.map(function(zr) {
        mr += wr + zr + `
`;
      }), mr;
    }, c = "", T = [], _ = "", S = "", O = "", k = m.usedGates(), Q = m.gotMeasurement(), R = [], g = [];
    k.map(function(_r) {
      var br = m.basicGates[_r];
      if (br) {
        if (br.exportInfo && br.exportInfo.pyquil) {
          var mr = br.exportInfo.pyquil;
          if (mr.array) {
            var Qr = "";
            mr.params && (Qr += ", [", mr.params.map(function(Ar, zr) {
              zr > 0 && (Qr += ", "), Qr += "p_" + Ar;
              var Pr = "p_" + Ar + " = Parameter('" + Ar + "')";
              T.indexOf(Pr) < 0 && T.push(Pr);
            }), Qr += "]"), S += "p.inst(" + mr.name + `_defgate)
`, O += mr.name + "_array = np.array(" + mr.array + `)
`, _ += mr.name + "_defgate = DefGate('" + mr.name + "', " + mr.name + "_array" + Qr + `)
`, _ += mr.name + " = " + mr.name + `_defgate.get_constructor()
`, R.push(mr.name);
          } else {
            var gr = "";
            if (mr.replacement) {
              var wr = m.basicGates[mr.replacement.name];
              wr && wr.exportInfo && (wr.exportInfo.pyquil ? gr = wr.exportInfo.pyquil.name : wr.exportInfo.quil && (gr = wr.exportInfo.quil.name));
            } else
              gr = mr.name;
            gr && (c && (c += ", "), c += gr);
          }
        } else if (br.exportInfo && br.exportInfo.quil) {
          var mr = br.exportInfo.quil;
          if (!mr.defgate) {
            var gr = "";
            if (mr.replacement) {
              var wr = m.basicGates[mr.replacement.name];
              wr && wr.exportInfo && (wr.exportInfo.pyquil ? gr = wr.exportInfo.pyquil.name : wr.exportInfo.quil && (gr = wr.exportInfo.quil.name));
            } else
              gr = mr.name;
            gr && (c && (c += ", "), c += gr);
          }
        }
      }
    });
    var q = m.gotClassicalControl();
    q && (c && (c += ", "), h < 2 ? c += "FALSE, NOT, OR, AND" : c += "MOVE, NOT, IOR, AND");
    var j = "";
    _ && (h < 2.12 ? j = `from pyquil.parameters import Parameter, quil_sin, quil_cos, quil_sqrt, quil_exp, quil_cis
from pyquil.quilbase import DefGate` : j = `from pyquil.quilatom import Parameter, quil_sin, quil_cos, quil_sqrt, quil_exp, quil_cis
from pyquil.quilbase import DefGate`);
    var y = "";
    if (r) {
      var Z = (r || "").split(`
`);
      Z.map(function(_r) {
        _r.length >= 1 && _r[0] != "#" && (y += "# "), y += _r, y += `
`;
      });
    }
    var G = "";
    if (t) {
      for (var E = "", W = 0, A = 0; A < m.params.length; A++)
        W > 0 && (E += ", "), E += m.params[A], W++;
      for (var A = 0; A < m.numQubits; A++)
        W > 0 && (E += ", "), E += "q" + A, W++;
      y += "def " + t + (E ? "(" + E + ")" : "") + `:
`, G = "  ";
    } else {
      h < 2 ? (y += `from pyquil.api import QVMConnection
`, y += `from pyquil.quil import Program
`) : y += `from pyquil import Program, get_qc
`, c && (y += "from pyquil.gates import " + c + `
`), j && (y += j + `
`), y += `from functools import reduce
`, v && (y += `from scipy.optimize import minimize
`, y += `from collections import Counter
`), y += `import numpy as np
`, p && (y += `
`, y += "shots = " + p + `
`);
      var Y = this.options && this.options.params ? this.options.params : {};
      if (this.params.length) {
        y += `
`;
        for (var A = 0; A < this.params.length; A++) {
          var $ = this.params[A], C = x.parse(Y[$]), K = C.toString({ handler: l });
          y += $ + " = " + K + `
`;
        }
        y += `
`;
      }
      v && (y += "tolerance = " + (this.options && this.options.hybridOptions && this.options.hybridOptions.tolerance && this.options.hybridOptions.tolerance || "0.001") + `
`, y += `
`), _ && (T.map(function(br, mr) {
        mr == 0 && (y += `
`), y += br + `
`;
      }), y += `
`, y += O + `
`, y += `
`, y += _ + `
`), y += `
`;
      var k = m.usedGates();
      n || k.map(function(br) {
        var mr = m.basicGates[br];
        if (!mr) {
          var Qr = f.customGates[br];
          if (Qr) {
            var gr = new b();
            gr.load(Qr);
            var wr = {
              comment: "",
              decompose: !1,
              versionStr: s
            };
            y += gr.exportToPyquil(wr, br), g.push(br);
          }
        }
      });
    }
    if (v && (G += "  ", y += `def objective_function(params):
`), h >= 2 && !t) {
      o || e ? y += G + `p = Program('PRAGMA INITIAL_REWIRING "PARTIAL"')

` : y += G + `p = Program()

`;
      var L = m.cregTotalBits();
      q && (L += 1), L && (y += G + "ro = p.declare('ro', memory_type='BIT', memory_size=" + L + `)
`, y += `
`);
    } else
      y += G + `p = Program()

`;
    y += S ? G + S + `
` : "";
    for (var pr = 0; pr < m.numCols(); pr++)
      for (var z = 0; z < m.numQubits; z++) {
        var J = m.getGateAt(pr, z);
        if (J && J.connector == 0) {
          var M = m.getGateDef(J.name), V = V = J.options && J.options.params ? J.options.params : {}, I = null;
          if (M) {
            M.exportInfo && (M.exportInfo.pyquil && M.exportInfo.pyquil.replacement ? (M.exportInfo.pyquil.replacement.params && (V = M.exportInfo.pyquil.replacement.params), M = m.getGateDef(M.exportInfo.pyquil.replacement.name)) : M.exportInfo.quil && M.exportInfo.quil.replacement && (M.exportInfo.quil.replacement.params && (V = M.exportInfo.quil.replacement.params), M = m.getGateDef(M.exportInfo.quil.replacement.name)), M && M.exportInfo && (M.exportInfo.pyquil ? I = M.exportInfo.pyquil : M.exportInfo.quil && (I = M.exportInfo.quil)));
            var F = !1;
            I ? (F = R.indexOf(I.name) >= 0, g.indexOf(I.name) >= 0) : (F = R.indexOf(J.name) >= 0, g.indexOf(J.name) >= 0);
            var N = !1;
            if (J.options && J.options.condition && J.options.condition.creg) {
              N = !0, y += `
`;
              var X = f.cregTotalBits(), er = J.options.condition, D = er.value || 0, tr = f.cregBase(er.creg);
              if (D == 0) {
                var H = f.cregs[er.creg].length;
                if (h < 2) {
                  y += G + "p.inst(FALSE(" + X + `))
`;
                  for (var U = 0; U < H; U++)
                    y += G + "p.inst(OR(" + (U + tr) + ", " + X + `))
`;
                  y += G + "p.inst(NOT(" + X + `))
`, y += G + "p.if_then(" + X + ", Program(";
                } else {
                  y += G + "p.inst(MOVE(ro[" + X + `], 0))
`;
                  for (var U = 0; U < H; U++)
                    y += G + "p.inst(IOR(ro[" + X + "], ro[" + (U + tr) + `]))
`;
                  y += G + "p.inst(NOT(ro[" + X + `]))
`, y += G + "p.if_then(ro[" + X + "], Program(";
                }
              } else {
                var nr = D.toString(2).split("").reverse(), xr = 0, B = 0;
                if (nr.map(function(_r, br) {
                  var mr = parseInt(_r);
                  nr[br] = mr, mr && (xr++, B = br);
                }), xr == 1)
                  h < 2 ? y += G + "p.if_then(" + (B + tr) + ", Program(" : y += G + "p.if_then(ro[" + (B + tr) + "], Program(";
                else if (h < 2) {
                  y += G + "p.inst(FALSE(" + X + `))
`;
                  var ur = !0;
                  nr.map(function(_r, br) {
                    _r && (ur ? (ur = !1, y += G + "p.inst(OR(" + (br + tr) + ", " + X + `))
`) : y += G + "p.inst(AND(" + (br + tr) + ", " + X + `))
`);
                  }), y += G + "p.if_then(" + X + ", Program(";
                } else {
                  y += G + "p.inst(MOVE(ro[" + X + `], 0))
`;
                  var ur = !0;
                  nr.map(function(br, mr) {
                    br && (ur ? (ur = !1, y += G + "p.inst(IOR(ro[" + X + "], ro[" + (mr + tr) + `]))
`) : y += G + "p.inst(AND(ro[" + X + "], ro[" + (mr + tr) + `]))
`);
                  }), y += G + "p.if_then(ro[" + X + "], Program(";
                }
              }
            } else
              y += G + "p.inst(";
            I ? y += I.name : y += J.name;
            var cr = !1;
            if (I && I.params && I.params.length) {
              var W = 0;
              y += "(", cr = !0;
              for (var vr = 0; vr < I.params.length; vr++) {
                if (W > 0 && (y += ", "), typeof V[I.params[vr]] != "undefined") {
                  var C = x.parse(V[I.params[vr]]);
                  y += C.toString({ handler: l });
                }
                W++;
              }
              h < 2 || F ? y += ")" : y += ", ";
            } else if (M && M.params && M.params.length) {
              var W = 0;
              y += "(", cr = !0;
              for (var vr = 0; vr < M.params.length; vr++) {
                if (W > 0 && (y += ", "), typeof V[M.params[vr]] != "undefined") {
                  var C = x.parse(V[M.params[vr]]);
                  y += C.toString({ handler: l });
                }
                W++;
              }
              h < 2 || F ? y += ")" : y += ", ";
            }
            if (J.wires.length) {
              var W = 0;
              (h < 2 || !cr || F) && (y += "(", cr = !0);
              for (var yr = 0; yr < J.wires.length; yr++)
                W > 0 && (y += ", "), t ? y += "q" + J.wires[yr] : y += "" + J.wires[yr], W++;
              if (J.name == "measure" && J.options && J.options.creg) {
                var Sr = parseInt(J.options.creg.bit) || 0;
                isNaN(Sr) && (Sr = 0), W > 0 && (y += ", "), h < 2 ? y += Sr + f.cregBase(J.options.creg.name) : y += "ro[" + (Sr + f.cregBase(J.options.creg.name)) + "]", W++;
              }
              y += ")";
            }
            y += ")", N && (y += `)
`), y += `
`;
          } else
            y += G + '# Export to pyquil WARNING: unknown gate "' + J.name + '".';
        }
      }
    if (t)
      y += G + `return p
`, y += `
`;
    else {
      if (y += `
`, h < 2)
        if (y += G + `qvm = QVMConnection()
`, v) {
          y += `
`, y += G + `# CALCULATE COST HERE
`;
          var qr = this.options && this.options.hybridOptions && this.options.hybridOptions.costFunction && this.options.hybridOptions.costFunction.python || "";
          qr.trim() || (qr = "cost = 0"), y += d(qr, G), y += `
`, y += G + `return cost
`;
        } else
          y += G + `print(qvm.run(p))
`;
      else {
        p && (y += G + `p.wrap_in_numshots_loop(shots)
`, y += `
`);
        var Ir = e;
        if (Ir || (h < 2.1 ? Ir = this.numQubits + "q-generic-qvm" : Ir = this.numQubits + "q-qvm"), y += G + "qc = get_qc('" + Ir + "'" + (e ? ", as_qvm=" + (o ? "True" : "False") : "") + `)
`, e)
          if (y += G + `ep = qc.compile(p)
`, Q)
            if (y += G + `results_list = qc.run(ep).readout_data.get("ro")
`, y += G + `results = list(map(lambda arr: reduce(lambda x, y: str(x) + str(y), arr[::-1], ""), results_list))
`, v) {
              y += G + `counts = Counter(dict(zip(results,[results.count(i) for i in results])))
`, y += `
`, y += G + `# CALCULATE COST HERE
`;
              var qr = this.options && this.options.hybridOptions && this.options.hybridOptions.costFunction && this.options.hybridOptions.costFunction.python || "";
              qr.trim() || (qr = "cost = 0"), y += d(qr, G), y += `
`, y += G + `return cost
`;
            } else
              y += G + `counts = dict(zip(results,[results.count(i) for i in results]))
`, y += G + `print(counts)
`;
          else if (v) {
            y += G + `counts = Counter(dict(zip(results,[results.count(i) for i in results])))
`, y += `
`, y += G + `# CALCULATE COST HERE
`;
            var qr = this.options && this.options.hybridOptions && this.options.hybridOptions.costFunction && this.options.hybridOptions.costFunction.python || "";
            qr.trim() || (qr = "cost = 0"), y += d(qr, G), y += `
`, y += G + `return cost
`;
          } else
            y += G + `print(qc.run(ep).readout_data.get("ro"))
`;
        else if (Q)
          if (y += G + `results_list = qc.run(p).readout_data.get("ro")
`, y += G + `results = list(map(lambda arr: reduce(lambda x, y: str(x) + str(y), arr[::-1], ""), results_list))
`, v) {
            y += G + `counts = Counter(dict(zip(results,[results.count(i) for i in results])))
`, y += `
`, y += G + `# CALCULATE COST HERE
`;
            var qr = this.options && this.options.hybridOptions && this.options.hybridOptions.costFunction && this.options.hybridOptions.costFunction.python || "";
            qr.trim() || (qr = "cost = 0"), y += d(qr, G), y += `
`, y += G + `return cost
`;
          } else
            y += G + `counts = dict(zip(results,[results.count(i) for i in results]))
`, y += G + `print(counts)
`;
        else if (y += G + `results_list = qc.run(p).readout_data.get("ro")
`, y += G + `results = list(map(lambda arr: reduce(lambda x, y: str(x) + str(y), arr[::-1], ""), results_list))
`, v) {
          y += G + `counts = Counter(dict(zip(results,[results.count(i) for i in results])))
`, y += `
`, y += G + `# CALCULATE COST HERE
`;
          var qr = this.options && this.options.hybridOptions && this.options.hybridOptions.costFunction && this.options.hybridOptions.costFunction.python || "";
          qr.trim() || (qr = "cost = 0"), y += d(qr, G), y += `
`, y += G + `return cost
`;
        } else
          y += G + `print(results)
`;
      }
      if (v) {
        var Tr = "";
        this.params.map(function(_r, br) {
          br > 0 && (Tr += ", "), Tr += _r;
        }), y += `
`, y += "params = np.array([" + Tr + `])
`, y += `
`, y += 'minimum = minimize(objective_function, params, method="' + (this.options && this.options.hybridOptions && this.options.hybridOptions.optimizer ? this.options.hybridOptions.optimizer : "Powell") + `", tol=tolerance)
`, y += `print("cost:", minimum.fun, "params:", minimum.x)
`;
      }
    }
    if (u) {
      var Lr = {
        metadata: {
          kernelspec: {
            display_name: "Python 3",
            language: "python",
            name: "python3"
          }
        },
        nbformat: 4,
        nbformat_minor: 0,
        cells: [
          {
            cell_type: "code",
            source: y,
            metadata: {},
            outputs: [],
            execution_count: null
          }
        ]
      };
      return JSON.stringify(Lr);
    }
    return y;
  };
  b.prototype.exportToQuil = function(a, t) {
    a = a || {};
    var r = a.comment, n = !0, s = a.versionStr, e = this, o = parseFloat(s || "2.0");
    isNaN(o) && (o = 2);
    var u = new b();
    u.load(this.save(n));
    var p = "";
    if (r) {
      var v = (r || "").split(`
`);
      v.map(function(F) {
        F.length >= 1 && F[0] != "#" && (p += "# "), p += F, p += `
`;
      });
    }
    var f = u.usedGates();
    f.map(function(F) {
      var N = u.basicGates[F];
      N && N.exportInfo && N.exportInfo.quil && N.exportInfo.quil.defgate && (p += N.exportInfo.quil.defgate, p += `

`);
    });
    var h = this.gotClassicalControl(), m = "";
    if (t) {
      var l = "";
      if (u.params.length) {
        l += "(";
        for (var d = 0; d < u.params.length; d++)
          d > 0 && (l += ", "), l += "%" + u.params[d];
        l += ")";
      }
      for (var c = "", d = 0; d < u.numQubits; d++)
        d > 0 && (c += " "), c += "q" + d;
      p += "DEFCIRCUIT " + t + (l ? " " + l : "") + (c ? " " + c : "") + `:
`, m = "    ";
    } else {
      if (p += `
`, o >= 2) {
        var T = u.cregTotalBits();
        h && (T += 1), T && (p += "DECLARE ro BIT[" + T + `]
`);
      }
      var _ = this.options && this.options.params ? this.options.params : {};
      if (this.params.length) {
        p += `
`;
        for (var d = 0; d < this.params.length; d++) {
          var S = this.params[d], O = x.parse(_[S]);
          O.toString({ handler: k }), p += "DECLARE " + S + ` REAL[1]
`;
        }
        p += `
`;
      }
      var f = u.usedGates();
    }
    for (var k = function(F, N) {
      if (F.isSymbolNode && u.params.indexOf(F.name) >= 0)
        return "%" + F.name;
    }, Q = 1, R = 0; R < u.numCols(); R++)
      for (var g = 0; g < u.numQubits; g++) {
        var q = u.getGateAt(R, g);
        if (q && q.connector == 0) {
          var j = u.getGateDef(q.name), y = q.options && q.options.params ? q.options.params : {}, Z = null;
          if (j) {
            j.exportInfo && (j.exportInfo.quil && j.exportInfo.quil.replacement && (j.exportInfo.quil.replacement.params && (y = j.exportInfo.quil.replacement.params), j = u.getGateDef(j.exportInfo.quil.replacement.name)), Z = j && j.exportInfo && j.exportInfo.quil ? j.exportInfo.quil : null);
            var G = !1;
            if (q.options && q.options.condition && q.options.condition.creg) {
              G = !0, p += `
`;
              var E = e.cregTotalBits(), W = q.options.condition, A = W.value || 0, Y = e.cregBase(W.creg);
              if (A == 0) {
                var $ = e.cregs[W.creg].length;
                if (o < 2) {
                  p += m + "FALSE [" + E + `]
`;
                  for (var C = 0; C < $; C++)
                    p += m + "OR [" + (C + Y) + "] [" + E + `]
`;
                  p += m + "NOT [" + E + `]
`, p += "JUMP-WHEN @THEN" + Q + " [" + E + `]
`, p += "JUMP @END" + (Q + 1) + `
`, p += "LABEL @THEN" + Q + `
`;
                } else {
                  p += m + "FALSE ro[" + E + `]
`;
                  for (var C = 0; C < $; C++)
                    p += m + "OR ro[" + (C + Y) + "] ro[" + E + `]
`;
                  p += m + "NOT ro[" + E + `]
`, p += "JUMP-WHEN @THEN" + Q + " ro[" + E + `]
`, p += "JUMP @END" + (Q + 1) + `
`, p += "LABEL @THEN" + Q + `
`;
                }
              } else {
                var K = A.toString(2).split("").reverse(), L = 0, pr = 0;
                if (K.map(function(F, N) {
                  var X = parseInt(F);
                  K[N] = X, X && (L++, pr = N);
                }), L == 1)
                  o < 2 ? (p += "JUMP-WHEN @THEN" + Q + " [" + (pr + Y) + `]
`, p += "JUMP @END" + (Q + 1) + `
`, p += "LABEL @THEN" + Q + `
`) : (p += "JUMP-WHEN @THEN" + Q + " ro[" + (pr + Y) + `]
`, p += "JUMP @END" + (Q + 1) + `
`, p += "LABEL @THEN" + Q + `
`);
                else if (o < 2) {
                  p += m + "FALSE [" + E + `]
`;
                  var z = !0;
                  K.map(function(F, N) {
                    F && (z ? (z = !1, p += m + "OR [" + (N + Y) + "] [" + E + `]
`) : p += m + "AND [" + (N + Y) + "] [" + E + `]
`);
                  }), p += "JUMP-WHEN @THEN" + Q + " [" + E + `]
`, p += "JUMP @END" + (Q + 1) + `
`, p += "LABEL @THEN" + Q + `
`;
                } else {
                  p += m + "FALSE ro[" + E + `]
`;
                  var z = !0;
                  K.map(function(N, X) {
                    N && (z ? (z = !1, p += m + "OR ro[" + (X + Y) + "] ro[" + E + `]
`) : p += m + "AND ro[" + (X + Y) + "] ro[" + E + `]
`);
                  }), p += "JUMP-WHEN @THEN" + Q + " ro[" + E + `]
`, p += "JUMP @END" + (Q + 1) + `
`, p += "LABEL @THEN" + Q + `
`;
                }
              }
            }
            Z ? p += m + Z.name : p += m + q.name, p += " ";
            var J = 0;
            if (Z && Z.params && Z.params.length) {
              p += "(";
              for (var M = 0; M < Z.params.length; M++) {
                if (J > 0 && (p += ", "), typeof y[Z.params[M]] != "undefined") {
                  var O = x.parse(y[Z.params[M]]);
                  p += O.toString({ handler: k });
                }
                J++;
              }
              p += ")";
            } else if (j && j.params && j.params.length) {
              p += "(";
              for (var M = 0; M < j.params.length; M++) {
                if (J > 0 && (p += ", "), typeof y[j.params[M]] != "undefined") {
                  var O = x.parse(y[j.params[M]]);
                  p += O.toString({ handler: k });
                }
                J++;
              }
              p += ")";
            }
            for (var V = 0; V < q.wires.length; V++)
              J > 0 && (p += " "), t ? p += "q" + q.wires[V] : p += "" + q.wires[V], J++;
            if (q.name == "measure" && q.options && q.options.creg) {
              var I = parseInt(q.options.creg.bit) || 0;
              isNaN(I) && (I = 0), J > 0 && (p += " "), o < 2 ? p += "[" + (I + e.cregBase(q.options.creg.name)) + "]" : p += "ro[" + (I + e.cregBase(q.options.creg.name)) + "]", J++;
            }
            p += `
`, G && (p += "LABEL @END" + (Q + 1) + `
`, p += `
`, Q += 2);
          } else
            console.log("unknown gate", q.name);
        }
      }
    return t && (p += `
`), p;
  };
  b.prototype.exportToAQASM = function(a, t, r, n) {
    var s = this;
    a = a || {}, a.comment;
    var e = a.decompose, o = a.asJupyter, u = a.shots, p = t ? a.hybrid : !1, v = null, f = null;
    u = u || 1024, typeof p == "undefined" && (p = this.options ? !!this.options.hybrid : !1);
    var h = this.save(!!e);
    v = new b(), f = new b(), v.load(h), f.load(h);
    var m = function(H, U) {
      if (H.isSymbolNode) {
        var nr = ["pi"];
        if (nr.indexOf(H.name) >= 0)
          return "np." + H.name;
        var xr = H.name;
        if (U.replaceVars && typeof U.replaceVars[xr] != "undefined") {
          var xr = U.replaceVars[xr];
          return s.params.indexOf(xr) >= 0 ? "(" + K[xr] + ")" : "(" + xr + ")";
        }
        if (s.params.indexOf(H.name) >= 0)
          return K[H.name];
      }
    }, l = function(H, U) {
      var nr = "", xr = H.split(`
`), B = -1;
      xr.map(function(vr) {
        var yr = vr.search(/\S/);
        yr >= 0 && (B < 0 || yr < B) && (B = yr);
      }), B < 0 && (B = 0);
      var ur = "";
      if (B < U.length)
        for (var cr = 0; cr < U.length - B; cr++)
          ur += " ";
      return xr.map(function(vr) {
        nr += ur + vr + `
`;
      }), nr;
    }, d = function(H) {
      for (var U = "", nr = 0; nr < H; nr++)
        U += "    ";
      return U;
    };
    n = n || 0;
    var c = [];
    if (!t) {
      if (!e)
        for (var T = f.numCols(), _ = T - 1; _ >= 0; _--)
          for (var S = 0; S < f.numQubits; S++) {
            var O = f.gates[S][_];
            if (O && O.connector == 0 && !f.basicGates[O.name]) {
              customDecomposedCircuit = f.decomposeGateAt(_, S);
              for (var k = 0; k < customDecomposedCircuit.numCols(); k++)
                for (var Q = 0; Q < customDecomposedCircuit.numQubits; Q++) {
                  var R = customDecomposedCircuit.getGateAt(k, Q);
                  R && R.connector == 0 && c.push(R), v.gates.map(function(H, U) {
                    H.map(function(nr) {
                      nr && nr.name == O.name && v.removeGate(nr.id);
                    });
                  });
                }
            }
          }
      c.map(function(H) {
        H && v.insertGate(H.name, H.column, H.wires, H.options);
      });
    }
    var g = "", q = d(n), j = v.usedGates(), y = v.numQubits;
    if (t)
      if (r) {
        for (var E = "", W = 0, A = 0; A < v.params.length; A++)
          W > 0 && (E += ", "), E += v.params[A], W++;
        for (var A = 0; A < v.numQubits; A++)
          W > 0 && (E += ", "), E += Cr(A, v.numQubits), W++;
      } else {
        g += q + `from qat.lang.AQASM import *
`, g += q + `from qat.qpus import get_default_qpu
`, g += q + `from collections import Counter
`, p && (g += q + `from scipy.optimize import minimize
`), g += q + `import numpy as np
`, g += `
`;
        var Y = "", $ = 0;
        j.map(function(H) {
          var U = v.basicGates[H];
          if (U) {
            if (!e && v.basicGates[H].exportInfo.aqasm && v.basicGates[H].exportInfo.aqasm.array) {
              if (unsupportedAqasmInfo = v.basicGates[H].exportInfo.aqasm, gateUnitary = H + "_gate", g += q + "def " + gateUnitary + "(", unsupportedAqasmInfo.params && unsupportedAqasmInfo.params.length) {
                var nr = 0;
                unsupportedAqasmInfo.params.map(function(yr) {
                  nr > 0 && (g += ", "), g += q + "p_" + yr, nr++;
                });
              }
              g += `):
`, g += d(n + 1) + "return np.array(" + unsupportedAqasmInfo.array + `)

`, Y += H + ' = AbstractGate("' + H + '", [';
              var xr = 0;
              if (unsupportedAqasmInfo.params)
                for (var B = 0; B < unsupportedAqasmInfo.params.length; B++)
                  xr > 0 && (Y += ", "), Y += "float", xr++;
              U.matrix && (arity = x.log2(U.matrix.length)), Y += "], matrix_generator=" + gateUnitary + ", arity=" + arity + `)
`;
            }
          } else {
            var ur = s.customGates[H];
            if (ur) {
              var cr = new b();
              cr.load(ur);
              var vr = {
                comment: "",
                decompose: !0,
                asJupyter: !1,
                shots: null,
                hybrid: !1
              };
              g += cr.exportToAQASM(vr, t, H, n), $++;
            }
          }
        }), g += Y, g += `
`, u && (g += q + "shots = " + u + `
`, g += `
`), g += q + `program = Program()
`, g += q + "qubits_reg = program.qalloc(" + v.numQubits + `)
`;
        for (var C in v.cregs)
          g += q + C + " = program.calloc(" + v.cregs[C].length + `)
`;
        g += `
`;
        var K = this.options && this.options.params ? this.options.params : {};
        if (this.params.length) {
          for (var A = 0; A < this.params.length; A++) {
            var L = this.params[A], pr = x.parse(K[L]), z = pr.toString({ handler: m });
            g += L + " = " + z + `
`;
          }
          g += `
`;
        }
        p && (g += q + "tolerance = " + (this.options && this.options.hybridOptions && this.options.hybridOptions.tolerance && this.options.hybridOptions.tolerance || "0.001") + `
`, g += `
`);
      }
    else if (g += q + `BEGIN
`, g += q + "qubits " + y + `
`, v.cregs) {
      var Z = 0;
      for (var G in v.cregs)
        Z += v.cregs[G].length;
      g += q + "cbits " + Z + `
`;
    }
    r ? (g += "def " + r + (E ? "(" + E + ")" : "") + `:
`, n++, q = d(n), g += q + `circuit = QRoutine()
`) : p && (g += `def objective_function(params):
`, n++, q = d(n)), r || $ && (g += `
`, j.map(function(H) {
      !v.basicGates[H] && v.customGates[H] && (g += q + H + "(");
    }));
    for (var _ = 0; _ < v.numCols(); _++)
      for (var S = 0; S < v.numQubits; S++) {
        var O = v.getGateAt(_, S);
        if (O && O.connector == 0) {
          var J = v.getGateDef(O.name), M = "";
          if (O.options && O.options.params && (gateParams = O.options.params), O.name == "measure" && (t ? M += "program.measure" : M += "MEAS"), O.name == "reset" && (t ? M += "program.reset" : M += "RESET"), J && J.exportInfo) {
            if (J.exportInfo.aqasm) {
              var V = J.exportInfo.aqasm, I = "";
              if (V.name)
                J.params.length ? J.params.map(function(B) {
                  var ur = x.parse(gateParams[B]), cr = ur.toString({ handler: m });
                  I = V.name, t ? I += "(" + cr + ")" : I += "[" + cr + "]";
                }) : I += V.name, V.controlled && V.dagger ? t ? M += I + ".dag().ctrl()" : M += "CTRL(DAG(" + I + "))" : V.controlled ? t ? M += I + ".ctrl()" : M += "CTRL(" + I + ")" : V.dagger ? t ? M += I + ".dag()" : M += "DAG(" + I + ")" : M += I;
              else if (V.matrix)
                if (t) {
                  M += O.name + "(";
                  var N = 0;
                  J.params.map(function(B) {
                    N > 0 && (M += ", ");
                    var ur = x.parse(gateParams[B]), cr = ur.toString({ handler: m });
                    M += cr, N++;
                  }), M += ")";
                } else {
                  M = "[";
                  for (var F = 0; F < V.matrix.length; F++) {
                    row = V.matrix[F], M += "[";
                    for (var A = 0; A < row.length; A++)
                      M += "(", row_element = row[A], V.params && V.params.map(function(ur) {
                        var cr = gateParams[ur];
                        row_element.toString().indexOf(ur) > 0 && (row_element = row_element.replace(ur, cr));
                      }), evaluated_expression = x.evaluate(row_element, s.options.params), matrix_element = x.complex(evaluated_expression), matrix_element_real = matrix_element.re, matrix_element_im = matrix_element.im, M += matrix_element_real + ", " + matrix_element_im + ")", A < row.length - 1 && (M += " ");
                    M += "]", F < V.matrix.length - 1 && (M += " ");
                  }
                  M += "]";
                }
            }
            g += q + M, t ? g += "(" : g += " ";
          }
          for (var W = 0, X = 0; X < O.wires.length; X++)
            W > 0 && (g += ", "), t ? r ? g += Cr(O.wires[X], v.numQubits) : g += "qubits_reg[" + O.wires[X] + "]" : g += "q[" + O.wires[X] + "]", W = W + 1;
          O.options && O.options.creg && (g += ", " + O.options.creg.name + "[" + O.options.creg.bit + "]"), t && (g += ")"), g += `
`;
        }
      }
    if (r && (g += q + `return circuit

`), !t)
      g += "END";
    else if (!r)
      if (g += q + `
`, g += q + `circuit = program.to_circ()
`, g += q + `job = circuit.to_job(nbshots=shots, aggregate_data=False)
`, g += q + `qpu = get_default_qpu()
`, g += q + `job_result = qpu.submit(job)
`, g += q + `counts = Counter()

`, g += q + `for state in job_result:
`, g += q + `    string_state = str(state.state)
`, g += q + `    string_state = string_state[string_state.find('|') + 1: string_state.find('>')]
`, g += q + `    string_state = string_state[::-1]
`, g += q + `    counts[string_state] += 1

`, p) {
        g += q + `# CALCULATE COST HERE
`;
        var er = this.options && this.options.hybridOptions && this.options.hybridOptions.costFunction && this.options.hybridOptions.costFunction.python || "";
        if (er.trim() || (er = "cost = 0"), g += l(er, q), g += `
`, g += q + `return cost
`, n--, q = d(n), p) {
          var D = "";
          this.params.map(function(H, U) {
            U > 0 && (D += ", "), D += H;
          }), g += `
`, g += "params = np.array([" + D + `])
`, g += `
`, g += 'minimum = minimize(objective_function, params, method="' + (this.options && this.options.hybridOptions && this.options.hybridOptions.optimizer ? this.options.hybridOptions.optimizer : "Powell") + `", tol=tolerance)
`, g += `print("cost:", minimum.fun, "params:", minimum.x)
`;
        }
      } else
        g += q + "print(counts)";
    if (o && t) {
      var tr = {
        metadata: {
          kernelspec: {
            display_name: "Python 3",
            language: "python",
            name: "python3"
          }
        },
        nbformat: 4,
        nbformat_minor: 0,
        cells: [
          {
            cell_type: "code",
            source: g,
            metadata: {},
            outputs: [],
            execution_count: null
          }
        ]
      };
      return JSON.stringify(tr);
    }
    return g;
  };
  b.prototype.exportAQASM = function(a, t, r, n, s, e, o, u) {
    var p = {
      comment: a,
      decompose: t,
      asJupyter: s,
      shots: e,
      hybrid: o
    };
    return this.exportToAQASM(p, r, n, u);
  };
  b.prototype.exportToPyAQASM = function(a, t) {
    return this.exportToAQASM(a, !0, t);
  };
  b.prototype.exportPyAQASM = function(a, t, r, n, s, e) {
    var o = {
      comment: a,
      decompose: t,
      asJupyter: n,
      shots: s,
      hybrid: e
    };
    return this.exportToPyAQASM(o, r);
  };
  b.prototype.exportToCirq = function(a, t) {
    a = a || {};
    var r = a.comment, n = a.decompose, s = a.versionStr, e = a.asJupyter, o = a.shots, u = a.exportTfq, p = this, v = "";
    u ? v = "TFQ" : v = "cirq";
    var f = parseFloat(s || "0.7");
    isNaN(f) && (f = 0.7), typeof o == "undefined" && (o = 1024);
    var h = new b();
    h.load(this.save(n));
    var m = "", l = "";
    if (r) {
      var d = (r || "").split(`
`);
      d.map(function(D) {
        D.length >= 1 && D[0] != "#" && (m += "# "), m += D, m += `
`;
      });
    }
    var c = function(D, tr) {
      if (D.isSymbolNode) {
        var H = ["pi", "sin", "cos", "tan", "asin", "acos", "atan"];
        if (H.indexOf(D.name) >= 0)
          return "np." + D.name;
      }
    };
    if (t) {
      for (var T = "", _ = 0, S = 0; S < h.params.length; S++)
        _ > 0 && (T += ", "), T += h.params[S], _++;
      for (var S = 0; S < h.numQubits; S++)
        _ > 0 && (T += ", "), T += Cr(S, h.numQubits), _++;
      m += "def " + t + (T ? "(" + T + ")" : "") + `:
`, m += `    return [
`, l = "        ";
    } else {
      u && (m += `import tensorflow_quantum as tfq
`), m += `import cirq
`, m += `import numpy as np
`, m += `from functools import reduce
`, m += `
`;
      var O = this.options && this.options.params ? this.options.params : {};
      if (this.params.length) {
        for (var S = 0; S < this.params.length; S++) {
          var k = this.params[S], Q = x.parse(O[k]), R = Q.toString({ handler: c });
          m += k + " = " + R + `
`;
        }
        m += `
`;
      }
      var q = h.usedGates();
      n || q.map(function(D) {
        var tr = h.basicGates[D];
        if (!tr) {
          var H = p.customGates[D];
          if (H) {
            var U = new b();
            U.load(H);
            var nr = {
              comment: "",
              decompose: !0,
              versionStr: s
            };
            m += U.exportToCirq(nr, t);
          }
        }
      });
      var g = "", q = h.usedGates();
      q.map(function(D) {
        var tr = h.basicGates[D];
        if (tr && tr.exportInfo && tr.exportInfo.cirq) {
          var H = tr.exportInfo.cirq, U = !1;
          if (H.replacement) {
            var nr = h.getGateDef(H.replacement.name);
            H = nr.exportInfo.cirq, U = !0;
          }
          if (H.array && !u) {
            var xr = U ? H.name : D;
            if (g.indexOf(xr) < 0) {
              if (g += "def " + xr + "(", H.params && H.params.map(function(B, ur) {
                ur > 0 && (g += ", "), g += "p_" + B;
              }), g += `):
`, tr.matrix && tr.matrix.length)
                if (f < 0.7)
                  switch (tr.matrix.length) {
                    case 2:
                      g += "    return cirq.SingleQubitMatrixGate(np.array(" + H.array + `))
`;
                      break;
                    case 4:
                      g += "    return cirq.TwoQubitMatrixGate(np.array(" + H.array + `))
`;
                      break;
                    default:
                      g += "    # Export to " + v + " WARNING: Cannot define " + tr.matrix.length + " x " + tr.matrix.length + ` matrix gate
`;
                  }
                else
                  g += "    return cirq.MatrixGate(np.array(" + H.array + `))
`;
              g += `
`;
            }
          }
        }
      }), m += g, u ? m += "q = cirq.GridQubit.rect(1, " + h.numQubits + `)
` : m += "q = [cirq.NamedQubit('q' + str(i)) for i in range(" + h.numQubits + `)]
`, m += `
`, f < 0.7 ? m += `circuit = cirq.Circuit.from_ops(
` : m += `circuit = cirq.Circuit(
`, l = "    ";
    }
    for (var j = h.numCols(), y = 0, Z = "", G = !1, E = 0; E < j; E++)
      for (var W = 0; W < this.numQubits; W++) {
        var A = h.getGateAt(E, W);
        if (A && A.connector == 0) {
          y > 0 && (m += ",", u && G && (m += l + "# Export to TFQ WARNING: Gate not yet supported by Tensorflow Quantum"), m += `
`);
          var Y = h.getGateDef(A.name), $ = A.options && A.options.params ? A.options.params : {}, C = null, K = !1, L = !!h.basicGates[A.name];
          if (Y) {
            Y.exportInfo && (G = !!Y.exportInfo.cirq.notTfqSupported, Y.exportInfo.cirq && Y.exportInfo.cirq.replacement && (Y.exportInfo.cirq.replacement.params && ($ = Y.exportInfo.cirq.replacement.params), K = !!(Y.exportInfo.cirq.replacement.type && Y.exportInfo.cirq.replacement.type == "controlled"), G = !!Y.exportInfo.cirq.replacement.notTfqSupported, Y = h.getGateDef(Y.exportInfo.cirq.replacement.name)), C = Y && Y.exportInfo && Y.exportInfo.cirq ? Y.exportInfo.cirq : null), y++, A.options && A.options.condition && A.options.condition.creg && (m += l + "# Export to " + v + ` WARNING: classical control not implemented yet.
`);
            var pr = 0, z = "";
            if ($) {
              var J = Y.params || [];
              A.name == "yy" && (J = []);
              var M = J.length;
              if (M)
                for (var V = 0; V < M; V++) {
                  pr == 0 && (z += "("), pr > 0 && (z += ", ");
                  var I = J[V];
                  if ($[I]) {
                    var Q = x.parse($[I]);
                    if (!Q.args)
                      for (var F in A.options.params)
                        Q = x.parse(A.options.params[F]);
                    z += Q.toString({ handler: c });
                  }
                  pr == M - 1 && (L ? z += ")" : z += ", "), pr++;
                }
            }
            if (C) {
              var N = C.name.indexOf("**") >= 0;
              m += l, N && (m += "("), C.array || (m += "cirq."), u && C.tfqReplacement && C.tfqReplacement.name ? m += "cirq." + C.tfqReplacement.name : m += C.name, N && (m += ")");
            } else
              m += l + A.name;
            m += z, K ? m += ".controlled().on(" : L && (m += "(");
            for (var _ = 0, X = 0; X < A.wires.length; X++)
              _ > 0 && (m += ", "), t ? m += Cr(A.wires[X], h.numQubits) : m += "q[" + A.wires[X] + "]", _++;
            A.name == "measure" && A.options && A.options.creg && (_ > 0 && (m += ", key="), m += "'" + A.options.creg.name + A.options.creg.bit + "'", E == j - 1 && W == this.numQubits - 1 ? Z += "'" + A.options.creg.name + A.options.creg.bit + "'" : Z += "'" + A.options.creg.name + A.options.creg.bit + "', ", _++), m += ")";
          } else
            m += l + "# Export to " + v + ' WARNING: unknown gate "' + A.name + '".';
        }
      }
    if (u && G && (m += l + "# Export to TFQ WARNING: Gate not yet supported by Tensorflow Quantu"), t ? (m += `
    ]
`, m += `
`) : (m += `
)
`, m += `
`, u || (m += `simulator = cirq.Simulator()
`, m += "result = simulator.run(circuit, repetitions=" + o + `)
`, m += "result_dict = dict(result.multi_measurement_histogram(keys=[" + Z + `]))
`, m += `keys = list(map(lambda arr: reduce(lambda x, y: str(x) + str(y), arr[::-1]), result_dict.keys()))
`, m += `counts = dict(zip(keys,[value for value in result_dict.values()]))
`, m += "print(counts)")), e) {
      var er = {
        metadata: {
          kernelspec: {
            display_name: "Python 3",
            language: "python",
            name: "python3"
          }
        },
        nbformat: 4,
        nbformat_minor: 0,
        cells: [
          {
            cell_type: "code",
            source: m,
            metadata: {},
            outputs: [],
            execution_count: null
          }
        ]
      };
      return JSON.stringify(er);
    }
    return m;
  };
  b.prototype.exportToTFQ = function(a, t) {
    a = a || {};
    var r = a.comment, n = a.decompose, s = a.versionStr, e = a.asJupyter, o = a.shots;
    typeof o == "undefined" && (o = 1024);
    var u = new b();
    u.load(this.save(n));
    var p = "";
    if (r) {
      var v = (r || "").split(`
`);
      v.map(function(m) {
        m.length >= 1 && m[0] != "#" && (cirq += "# "), cirq += m, cirq += `
`;
      });
    }
    var f = {
      comment: r,
      decompose: n,
      versionStr: s,
      asJupyter: !1,
      shots: o,
      exportTfq: !0
    };
    if (p += u.exportToCirq(f, t), p += "results_list = tfq.layers.Sample()(circuit, repetitions=" + o + `).to_list()[0]
`, p += `results = list(map(lambda arr: reduce(lambda x, y: str(x) + str(y), arr[::-1]), results_list))
`, p += `counts = dict(zip(results,[results.count(i) for i in results]))
`, p += "print(counts)", e) {
      var h = {
        metadata: {
          kernelspec: {
            display_name: "Python 3",
            language: "python",
            name: "python3"
          }
        },
        nbformat: 4,
        nbformat_minor: 0,
        cells: [
          {
            cell_type: "code",
            source: p,
            metadata: {},
            outputs: [],
            execution_count: null
          }
        ]
      };
      return JSON.stringify(h);
    }
    return p;
  };
  b.prototype.exportToQSharp = function(a, t) {
    a = a || {}, a.comment;
    var r = a.decompose, n = a.versionStr, s = a.asJupyter, e = a.circuitName, o = a.indentDepth, u = this, p = function(z, J) {
      if (z.isSymbolNode) {
        var M = { pi: "PI()" };
        if (M[z.name])
          return M[z.name];
      }
      if (z.isConstantNode && Number.isInteger(z.value))
        return z.value.toFixed(1);
    }, v = e || "Circuit";
    o = o || 0;
    function f(z) {
      for (var J = "", M = 0; M < z; M++)
        J += "    ";
      return J;
    }
    var h = new b();
    h.load(this.save(r));
    var m = "", l = f(o);
    if (t || (s || (m += `namespace Quantum {
`, o++, l = f(o)), m += l + `open Microsoft.Quantum.Intrinsic;
`, m += l + `open Microsoft.Quantum.Canon;
`, m += l + `open Microsoft.Quantum.Math;
`, m += l + `open Microsoft.Quantum.Convert;
`, m += `
`, m += l + `function SetBitValue(reg: Int, bit: Int, value: Bool): Int {
`, m += l + `    if(value) {
`, m += l + `        return reg ||| (1 <<< bit);
`, m += l + `    } else {
`, m += l + `        return reg &&& ~~~(1 <<< bit);
`, m += l + `    }
`, m += l + `}
`, m += l + `
`), t) {
      for (var d = "", c = 0, T = 0; T < h.params.length; T++)
        c > 0 && (d += ", "), d += h.params[T], c++;
      for (var T = 0; T < h.numQubits; T++)
        c > 0 && (d += ", "), d += Cr(T, h.numQubits) + ": Qubit", c++;
      m += l + "operation " + t + (d ? "(" + d + ")" : "");
    } else {
      var O = h.usedGates();
      r || O.map(function(J) {
        var M = h.basicGates[J];
        if (!M) {
          var V = u.customGates[J];
          if (V) {
            var I = new b();
            I.load(V);
            var F = {
              comment: "",
              decompose: !0,
              versionStr: n,
              asJupyter: !1,
              circuitName: null,
              indentDepth: o
            };
            m += I.exportToQSharp(F, t);
          }
        }
      }), m += l + "operation " + v + "()";
    }
    o++, l = f(o);
    var _ = 0;
    for (cregName in h.cregs)
      _++;
    var S = "";
    if (_) {
      m += " : (";
      for (cregName in h.cregs)
        S && (m += ", ", S += ", "), m += "Int", S += cregName;
      m += ")";
    } else
      m += " : Unit";
    if (m += ` {
`, _)
      for (cregName in h.cregs)
        m += l + "mutable " + cregName + ` = 0;
`;
    qreg_name = "qubits", t || (m += l + "using(", m += qreg_name + " = Qubit[" + h.numQubits + "]", m += `) {
`, o++, l = f(o));
    for (var O = h.usedGates(), k = h.numCols(), Q = 0; Q < k; Q++)
      for (var R = 0; R < h.numQubits; R++) {
        var g = h.getGateAt(Q, R);
        if (g && g.connector == 0) {
          var q = h.getGateDef(g.name);
          q || (q = h.customGates[g.name]);
          var j = g.options && g.options.params ? g.options.params : {}, y = null, Z = !1, G = 0;
          if (q) {
            q.exportInfo && (q.exportInfo.qsharp && q.exportInfo.qsharp.replacement && (q.exportInfo.qsharp.replacement.params && (j = q.exportInfo.qsharp.replacement.params), q = h.getGateDef(q.exportInfo.qsharp.replacement.name)), y = q && q.exportInfo && q.exportInfo.qsharp ? q.exportInfo.qsharp : null), q.drawingInfo && q.drawingInfo.root && g.name != "cx" && g.name != "ccx" && (Z = !0);
            var E = 0, W = "";
            if (j) {
              var A = q.params || [], Y = A.length;
              if (Y)
                for (var $ = 0; $ < Y; $++) {
                  E > 0 && (W += ", ");
                  var C = A[$];
                  if (j[C]) {
                    var K = x.parse(j[C]);
                    W += K.toString({ handler: p });
                  }
                  E++;
                }
            }
            if (g.name == "measure")
              g.options && g.options.creg ? (m += l + "set " + g.options.creg.name + " = SetBitValue(" + g.options.creg.name + ", " + g.options.creg.bit + ", ResultAsBool(M(", t ? m += Cr(g.wires[0], h.numQubits) + `)));
` : m += qreg_name + "[" + g.wires[0] + `])));
`) : m += l + `// Export to qsharp WARNING: missing destination register
`;
            else {
              m += l, g.options && g.options.condition && g.options.condition.creg && (m += "if(" + g.options.condition.creg + " == " + g.options.condition.value + `) {
`, o++, l = f(o), m += l), y ? m += y.name + "(" : m += g.name + "(", Z ? (t ? m += "[" + Cr(g.wires[0], h.numQubits) + "], (" : m += "[" + qreg_name + "[" + g.wires[0] + "]], (", G = 1) : G = 0, W && (m += W + ", ");
              for (var c = 0, L = G; L < g.wires.length; L++)
                c > 0 && (m += ", "), t ? m += Cr(g.wires[L], h.numQubits) : m += qreg_name + "[" + g.wires[L] + "]", c++;
              Z && (m += ")"), m += `);
`, g.options && g.options.condition && g.options.condition.creg && (o--, l = f(o), m += l + `}
`);
            }
          }
        }
      }
    if (t || (m += l + "ResetAll(" + qreg_name + `);
`, o--, l = f(o), m += l + `}
`), _ && (m += l + "return (" + S + `);
`), o--, l = f(o), m += l + `}
`, t ? m += `
` : s || (m += `}
`), s) {
      var pr = {
        metadata: {
          kernelspec: {
            display_name: "Q#",
            language: "qsharp",
            name: "iqsharp"
          },
          language_info: {
            name: ""
          }
        },
        nbformat: 4,
        nbformat_minor: 0,
        cells: [
          {
            cell_type: "code",
            source: m,
            metadata: {},
            outputs: [],
            execution_count: null
          },
          {
            cell_type: "code",
            source: "%simulate " + v,
            metadata: {},
            outputs: [],
            execution_count: null
          }
        ]
      };
      return JSON.stringify(pr);
    }
    return m;
  };
  b.prototype.exportToBraket = function(a, t) {
    a = a || {}, a.comment;
    var r = a.decompose, n = a.versionStr, s = a.asJupyter, e = a.shots, o = a.hybrid, u = a.indentDepth, p = this;
    e = e || 1024, typeof o == "undefined" && (o = this.options ? !!this.options.hybrid : !1);
    var v = new b();
    v.load(this.save(r));
    var f = function(N, X) {
      if (N.isSymbolNode) {
        var er = ["pi", "sin", "cos", "tan", "asin", "acos", "atan"];
        if (er.indexOf(N.name) >= 0)
          return "np." + N.name;
        if (p.params.indexOf(N.name) >= 0 && o)
          return "params[" + p.params.indexOf(N.name) + "]";
      }
    }, h = function(N, X) {
      var er = "", D = N.split(`
`), tr = -1;
      D.map(function(nr) {
        var xr = nr.search(/\S/);
        xr >= 0 && (tr < 0 || xr < tr) && (tr = xr);
      }), tr < 0 && (tr = 0);
      var H = "";
      if (tr < X.length)
        for (var U = 0; U < X.length - tr; U++)
          H += " ";
      return D.map(function(nr) {
        er += H + nr + `
`;
      }), er;
    }, m = function(N) {
      for (var X = "", er = 0; er < N; er++)
        X += "    ";
      return X;
    };
    u = u || 0;
    var l = "", d = m(u), c = v.usedGates();
    c.map(function(N) {
      v.basicGates[N];
    });
    var T = "", _ = 0;
    if (t) {
      for (var S = 0; S < v.numQubits; S++)
        _ > 0 && (T += ", "), T += Cr(S, v.numQubits), _++;
      for (var S = 0; S < v.params.length; S++)
        _ > 0 && (T += ", "), T += v.params[S], _++;
    } else {
      l += d + `import numpy as np
`, l += d + `from braket.devices import LocalSimulator
`, l += d + `from braket.circuits import Circuit
`, l += d + `from collections import Counter
`, o && (l += d + `from scipy.optimize import minimize
`), l += `
`, e && (l += d + "shots = " + e + `
`, l += `
`);
      var O = this.options && this.options.params ? this.options.params : {};
      if (this.params.length) {
        for (var S = 0; S < this.params.length; S++) {
          var k = this.params[S], Q = x.parse(O[k]), R = Q.toString({ handler: f });
          l += k + " = " + R + `
`;
        }
        l += `
`;
      }
      o && (l += d + "tolerance = " + (this.options && this.options.hybridOptions && this.options.hybridOptions.tolerance && this.options.hybridOptions.tolerance || "0.001") + `
`, l += `
`);
    }
    var g = null, q = null, j = 0;
    c.map(function(N) {
      var X = v.basicGates[N];
      if (X) {
        if (!r && v.basicGates[N].exportInfo.braket && v.basicGates[N].exportInfo.braket.array) {
          if (g = v.basicGates[N].exportInfo.braket, g.name == "unitary" && (q = N + "_unitary", l += d + "def " + q + "("), g.params && g.params.length) {
            var er = 0;
            g.params.map(function(H) {
              er > 0 && (l += ", "), l += d + "p_" + H, er++;
            });
          }
          l += `):
`, l += m(u + 1) + "return np.array(" + g.array + `);

`;
        }
      } else {
        var D = p.customGates[N];
        if (D) {
          var tr = new b();
          tr.load(D), l += tr.exportBraket("", !0, N, n, !1, null, !1, u), j++;
        }
      }
    }), t ? (l += "def " + t + (T ? "(" + T + ")" : "") + `:
`, u++, d = m(u)) : o && (l += `def objective_function(params):
`, u++, d = m(u)), l += d + `circuit = Circuit()
`, t || j && (l += `
`, c.map(function(N) {
      !v.basicGates[N] && v.customGates[N] && (l += d + "circuit.register_subroutine(" + N + `)
`);
    }), l += `
`);
    for (var y = v.numCols(), Z = 0; Z < y; Z++)
      for (var G = 0; G < v.numQubits; G++) {
        var E = v.getGateAt(Z, G);
        if (E && E.connector == 0) {
          var W = v.getGateDef(E.name), A = E.options && E.options.params ? E.options.params : {}, Y = W.params || [], $ = null, C = E.name, K = "", L = !1;
          if (W && W.exportInfo && W.exportInfo.braket && ($ = W.exportInfo.braket, $.params && (Array.isArray($.params) ? Y = $.params : (A = $.params, Y = Object.keys(A))), $.name == "unitary" ? L = !0 : C = $.name), !$ && !v.customGates[E.name])
            l += d + '# Unsupported gate "' + E.name + `".
`;
          else {
            var pr = 0;
            if (A) {
              var z = Y.length;
              if (z)
                for (var J = 0; J < z; J++) {
                  pr > 0 && (K += ", ");
                  var M = Y[J];
                  if (typeof A[M] != "undefined") {
                    var Q = x.parse(A[M]);
                    K += Q.toString({ handler: f });
                  }
                  pr++;
                }
            }
            l += d + "circuit.", L ? l += "unitary(matrix=" + C + "_unitary(" + K + "), targets=[" : l += C + "(";
            var _ = 0;
            for (w = 0; w < E.wires.length; w++)
              _ > 0 && (l += ", "), t ? l += Cr(E.wires[w], v.numQubits) : l += E.wires[w], _++;
            L ? l += "]" : K && (l += ", ", l += K), l += ")", l += `
`;
          }
        }
      }
    if (t && (l += d + "return circuit"), l += `

`, !t)
      if (l += d + `local_sim = LocalSimulator()
`, l += d + `result = local_sim.run(circuit, shots=shots).result()
`, l += d + `counts = Counter({ "".join(reversed(k)): v for k, v in result.measurement_counts.items() })
`, l += `
`, o) {
        l += d + `# CALCULATE COST HERE
`;
        var V = this.options && this.options.hybridOptions && this.options.hybridOptions.costFunction && this.options.hybridOptions.costFunction.python || "";
        if (V.trim() || (V = "cost = 0"), l += h(V, d), l += `
`, l += d + `return cost
`, u--, d = m(u), o) {
          var I = "";
          this.params.map(function(N, X) {
            X > 0 && (I += ", "), I += N;
          }), l += `
`, l += "params = np.array([" + I + `])
`, l += `
`, l += 'minimum = minimize(objective_function, params, method="' + (this.options && this.options.hybridOptions && this.options.hybridOptions.optimizer ? this.options.hybridOptions.optimizer : "Powell") + `", tol=tolerance)
`, l += `print("cost:", minimum.fun, "params:", minimum.x)
`;
        }
      } else
        l += d + "print(counts)";
    if (s) {
      var F = {
        metadata: {
          kernelspec: {
            display_name: "Python 3",
            language: "python",
            name: "python3"
          }
        },
        nbformat: 4,
        nbformat_minor: 0,
        cells: [
          {
            cell_type: "code",
            source: l,
            metadata: {},
            outputs: [],
            execution_count: null
          }
        ]
      };
      return JSON.stringify(F);
    }
    return l;
  };
  b.prototype.exportToQobj = function(a, t) {
    a = a || {};
    var r = a.circuitName, n = a.experimentName, s = a.numShots, e = this, o = this.options && this.options.params ? this.options.params : {}, o = JSON.parse(JSON.stringify(o));
    for (var u in o)
      o[u] = x.evaluate(o[u]);
    r = r || "", n = n || "", s = s || 1;
    var p = new b();
    p.load(this.save(!0));
    var v = this.randomString(), f = { qobj_id: "qobj_" + v, type: "QASM", schema_version: "1.0", experiments: [], header: { description: r }, config: { shots: s, memory_slots: 0 } }, h = { header: { memory_slots: 0, n_qubits: 0, qreg_sizes: [], qubit_labels: [], creg_sizes: [], clbit_labels: [], name: "circuit0" }, config: { n_qubits: 0, memory_slots: 0 }, instructions: [] }, m = Object.keys(p.cregs), l = function(I, F) {
      if (I.isSymbolNode) {
        var N = I.name;
        if (F.replaceVars && typeof F.replaceVars[N] != "undefined") {
          var N = F.replaceVars[N];
          return e.params.indexOf(N) >= 0 ? "(" + o[N] + ")" : "(" + N + ")";
        }
        if (e.params.indexOf(I.name) >= 0)
          return o[I.name];
      }
    };
    if (!t) {
      n && (h.header.description = n);
      for (cregName in p.cregs) {
        var d = p.cregs[cregName].length;
        f.config.memory_slots += d, h.header.creg_sizes.push([cregName, d]);
        for (var c = 0; c < d; c++)
          h.header.clbit_labels.push([cregName, c]);
      }
      h.header.memory_slots = f.config.memory_slots, h.header.n_qubits = p.numQubits, h.config.memory_slots = f.config.memory_slots, h.config.n_qubits = p.numQubits, h.header.qreg_sizes.push(["q", p.numQubits]);
    }
    var T = f.config.memory_slots, _ = p.usedGates();
    _.map(function(I) {
      var F = p.basicGates[I];
      if (!F) {
        var N = e.customGates[I];
        if (N) {
          customCircuit = new b(), customCircuit.load(N);
          var X = {
            circuitName: r,
            experimentName: n,
            numShots: s
          };
          f += customCircuit.exportToQobj(X, !1);
        }
      }
    });
    for (var S = p.numCols(), O = 0; O < S; O++)
      for (var k = 0; k < p.numQubits; k++) {
        var Q = p.getGateAt(O, k), R = { name: "", qubits: [] }, g = null, q = null;
        if (O == 0 && h.header.qubit_labels.push(["q", k]), Q && Q.connector == 0) {
          var j = p.getGateDef(Q.name);
          if (j && j.exportInfo && (j.exportInfo.qasm && j.exportInfo.qasm.replacement ? (g = j.exportInfo.qasm.replacement, g.map(function(I) {
            var F = new b();
            if (F.cregs = JSON.parse(JSON.stringify(e.cregs)), Q.options && Q.options.params) {
              var N = Object.keys(Q.options.params), X = Object.keys(I.params);
              N.map(function(tr) {
                X.indexOf(tr) > -1 && (I.params[tr] = Q.options.params[tr]);
              });
            }
            var er = Q.options && Q.options.condition ? Q.options.condition : {};
            F.addGate(I.name, O, Q.wires, { params: I.params, condition: er });
            var D = {
              circuitName: "",
              experimentName: "",
              numShots: ""
            };
            h.instructions = h.instructions.concat(F.exportToQobj(D, !0));
          })) : j.exportInfo.qasm && j.exportInfo.qasm.equivalent && (q = j.exportInfo.qasm.equivalent, q.map(function(I) {
            var F = new b();
            F.cregs = JSON.parse(JSON.stringify(e.cregs));
            var N = I.wires.length > 1 ? Q.wires : Q.wires[I.wires[0]], X = {};
            if (I.params) {
              var er = {};
              if (Q.options && Q.options.params)
                for (var D in Q.options.params) {
                  var tr = x.parse(Q.options.params[D]), H = tr.toString({ handler: l });
                  er[D] = H;
                }
              for (var U in I.params) {
                var tr = x.parse(I.params[U]), H = tr.toString({ handler: l, replaceVars: er });
                X[U] = H;
              }
            }
            var nr = Q.options && Q.options.condition ? Q.options.condition : {};
            F.addGate(I.name, O, N, { params: X, condition: nr });
            var xr = {
              circuitName: "",
              experimentName: "",
              numShots: ""
            };
            h.instructions = h.instructions.concat(F.exportToQobj(xr, !0));
          }))), !g && !q) {
            var y = Q.name, Z = Q.options && Q.options.params ? Q.options.params : {};
            if (this.basicGates[y]) {
              switch (y) {
                case "id":
                  y = "iden";
                  break;
              }
              if (R.name = y, R.qubits = Q.wires, Q.options && Q.options.condition && Q.options.condition.creg) {
                for (var G = { name: "", register: T, relation: "==", mask: "", val: "" }, E = p.cregs[Q.options.condition.creg].length, W = 0, A = 0, Y = "", $ = "", C = m.indexOf(Q.options.condition.creg), c = 0; c < C; c++)
                  W += p.cregs[m[c]].length;
                var K = Q.options.condition.value % Math.pow(2, E) * Math.pow(2, W);
                if ($ = "0x" + K.toString(16).toUpperCase(), W > 0) {
                  for (var L = Math.pow(2, W), pr = 0; pr < E; pr++)
                    A += L, L *= 2;
                  Y = "0x" + A.toString(16).toUpperCase();
                } else
                  Y = "0x" + (Math.pow(2, E) - 1).toString(16).toUpperCase();
                G.name = "bfunc", R.conditional = T, G.mask = Y, G.val = $, h.instructions.push(G), T += 1;
              }
              if (y == "measure" && Q.options && Q.options.creg) {
                R.memory = [], R.register = [];
                for (var z = 0, C = m.indexOf(Q.options.creg.name), c = 0; c < C; c++)
                  z += p.cregs[m[c]].length;
                var J = z + Q.options.creg.bit;
                R.memory.push(J), R.register.push(J);
              }
              if (Z && (j = this.basicGates[y], j || (j = this.customGates[y]), j && (paramDef = j.params || [], paramCount = paramDef.length, paramCount))) {
                R.params = [];
                for (var M = 0; M < paramCount; M++)
                  if (paramName = paramDef[M], Z[paramName] || Z[paramName].toString()) {
                    var V = x.evaluate(Z[paramName], o);
                    R.params.push(V);
                  }
              }
              h.instructions.push(R);
            }
          }
        }
      }
    return t ? h.instructions : (h.instructions.length && f.experiments.push(h), f);
  };
  b.prototype.clearPartitions = function() {
    this.partitionMap = [], this.partitionCount = 0, this.partitionInfo = {};
    for (var a = this.numCols(), t = 0; t < this.numQubits; t++) {
      this.partitionMap.push([]);
      for (var r = 0; r < a; r++)
        this.partitionMap[t].push(-1);
    }
  };
  b.prototype.createPartitions = function() {
    this.clearPartitions();
    for (var a = [], t = 0; t < this.numQubits; t++)
      a.push(-1);
    for (var r = 0, n = this.numCols(), s = 0; s < n; s++) {
      for (var e = 0; e < this.numQubits; e++) {
        var o = this.getGateAt(s, e);
        if (o && o.wires) {
          for (var u = [], p = 0; p < o.wires.length; p++) {
            var v = o.wires[p], f = a[v];
            u.indexOf(f) < 0 && u.push(f);
          }
          var h = -1;
          u.length != 1 || u[0] == -1 ? h = r++ : h = u[0];
          for (var p = 0; p < o.wires.length; p++) {
            var v = o.wires[p];
            if (oldPartition = a[v], oldPartition == -1)
              a[v] = h;
            else
              for (var t = 0; t < this.numQubits; t++)
                a[t] == oldPartition && (a[t] = h);
          }
        }
      }
      for (var e = 0; e < this.numQubits; e++)
        this.partitionMap[e][s] = a[e];
    }
    this.partitionCount = r;
    for (var h = 0; h < r; h++)
      this.partitionInfo[h] = this.partitionBounds(h);
  };
  b.prototype.printPartitions = function() {
    for (var a = this.numCols(), t = 0; t < this.numQubits; t++) {
      for (var r = "", n = 0; n < a; n++) {
        var s = this.partitionMap[t][n];
        for (s == -1 && (s = " "), this.getGateAt(n, t) ? s = s + "*" : s = s + " "; s.length < 4; )
          s = " " + s;
        r += s;
      }
      for (var e = t + ""; e.length < 2; )
        e = "0" + e;
      r = "q" + e + r, console.log(r);
    }
  };
  b.prototype.partitionBounds = function(a) {
    for (var t = {
      wire: {
        top: -1,
        bottom: -1
      },
      column: {
        left: -1,
        right: -1
      },
      wireMap: {},
      parents: {}
    }, r = !1, n = this.numCols(), s = 0; s < n; s++)
      for (var e = 0; e < this.numQubits; e++) {
        var o = this.partitionMap[e][s];
        o == a && (r = !0, t.wire.top < 0 && (t.wire.top = e), t.wire.bottom < e && (t.wire.bottom = e), t.column.left < 0 && (t.column.left = s), t.column.right < s && (t.column.right = s));
      }
    if (!r)
      return null;
    for (var u = 0, e = t.wire.top; e <= t.wire.bottom; e++) {
      var o = this.partitionMap[e][t.column.left];
      o == a && (t.wireMap[e] = u, u++);
    }
    if (t.numQubits = u, t.column.left > 0)
      for (var e in t.wireMap) {
        var p = this.partitionMap[e][t.column.left - 1];
        if (p >= 0) {
          t.parents[p] || (t.parents[p] = {}, t.parents[p].links = []);
          var v = this.partitionInfo[p];
          for (var f in v.wireMap)
            f == e && t.parents[p].links.push(t.wireMap[e]);
        }
      }
    return t;
  };
  b.prototype.partitionCircuit = function(a) {
    var t = this.partitionInfo[a];
    if (!t)
      return null;
    var r = [], n = [];
    for (var s in t.parents) {
      var e = {};
      e.circuit = this.partitionCache[s], e.wires = [], e.wires = t.parents[s].links, n = n.concat(e.wires), r.push(e);
    }
    var o = new b();
    if (r.length > 0) {
      if (t.numQubits > n.length) {
        var e = {};
        e.circuit = new b(t.numQubits - n.length), e.wires = [];
        for (var u = 0; u < t.numQubits; u++)
          n.indexOf(u) < 0 && e.wires.push(u);
        r.push(e);
      }
      o.setCombinedState(r);
    }
    for (var p = t.column.left; p <= t.column.right; p++)
      for (var v = t.wire.top; v <= t.wire.bottom; v++) {
        var f = this.partitionMap[v][p];
        if (f == a) {
          var h = this.getGateAt(p, v);
          if (h && h.connector == 0) {
            for (var m = [], l = 0; l < h.wires.length; l++) {
              var d = h.wires[l];
              m.push(t.wireMap[d]);
            }
            o.addGate(h.name, p - t.column.left, m, h.options);
          }
        }
      }
    return o;
  };
  b.prototype.run = function(a, t) {
    if (t = t || {}, this.measureResetsQubit = !!t.strictMode, t.continue || (this.initState(), this.stats.duration = 0), t.initialState) {
      if (Array.isArray(t.initialState)) {
        this.state = {};
        for (var r = 0; r < t.initialState.length; r++) {
          var n = t.initialState[r];
          Array.isArray(n) && n.length == 2 && (n = x.complex(n[0], n[1])), typeof n == "string" && (n = this.evalMathString(n)), typeof n == "number" && (n = x.complex(n, 0)), this.state[r + ""] = n;
        }
      } else
        this.state = t.initialState;
      this.stateBits = 0;
      for (var s in this.state)
        this.stateBits |= parseInt(s);
    }
    this.stats.start = /* @__PURE__ */ new Date();
    var e = new b();
    if (e.load(this.save(!0)), a) {
      e.insertColumn(0);
      for (var o = 0; o < e.numQubits; o++)
        a[o] && e.addGate("x", 0, o, {});
    }
    var u = t.partitioning;
    u && e.createPartitions();
    for (var p = e.numCols(), v = 0, f = 0; f < p; f++) {
      for (var o = 0; o < e.numQubits; o++) {
        var h = e.getGateAt(f, o);
        if (h && h.connector == 0) {
          v++;
          var m = !0;
          if (h.options && h.options.condition && h.options.condition.creg) {
            var l = this.getCregValue(h.options.condition.creg);
            m = l === h.options.condition.value;
          }
          if (m)
            if (u) {
              var d = e.partitionMap[o][f];
              e.partitionCache[d] || (e.partitionCache[d] = e.partitionCircuit(d));
              var c = e.partitionCache[d], T = e.partitionInfo[d], _ = f - T.column.left, S = c.getGateAt(_, T.wireMap[o]);
              c.cregs = JSON.parse(JSON.stringify(this.cregs)), c.applyGate(S.name, _, S.wires, S.options), this.cregs = JSON.parse(JSON.stringify(c.cregs));
            } else
              this.applyGate(h.name, f, h.wires, h.options);
          t && t.onGate && t.onGate(f, o, v);
        }
      }
      t && t.onColumn && t.onColumn(f);
    }
    if (u) {
      for (var O = [], o = 0; o < e.numQubits; o++) {
        var d = e.partitionMap[o][p - 1];
        d >= 0 && O.indexOf(d) < 0 && O.push(d);
      }
      if (O.length)
        if (O.length == 1)
          this.state = e.partitionCache[O[0]].state, this.stateBits = e.partitionCache[O[0]].stateBits;
        else {
          for (var k = this.stats.start, Q = [], R = 0; R < O.length; R++) {
            var g = O[R], q = {};
            q.circuit = e.partitionCache[g], q.wires = [];
            var j = e.partitionInfo[g];
            for (var o in j.wireMap)
              q.wires.push(parseInt(o));
            Q.push(q);
          }
          this.setCombinedState(Q), this.stats.start = k;
        }
    }
    this.stats.end = /* @__PURE__ */ new Date(), this.stats.duration += this.stats.end - this.stats.start;
  };
  b.prototype.continue = function() {
    this.run(null, {
      continue: !0
    });
  };
  b.prototype.stateAsArray = function(a, t, r, n) {
    var s = [], e = this.numAmplitudes();
    t = t || 0, r = r || (a ? this.numAmplitudes(a) : e);
    for (var o = 0, u = 0; u < e; u++) {
      var p = u;
      n && (p = rt(u, this.numQubits));
      var v = x.round(this.state[p] || x.complex(0, 0), 14);
      if (!a || v.re || v.im) {
        if (o >= t) {
          for (var f = u.toString(2); f.length < this.numQubits; )
            f = "0" + f;
          var h = this.formatComplex(v, { fixedWidth: !0, decimalPlaces: 8, iotaChar: "i" }), m = x.pow(x.abs(v), 2), l = m * 100, d = l.toFixed(5), c = x.arg(v), T = c.toFixed(5);
          s.push({
            index: u,
            indexBinStr: f,
            amplitude: v,
            amplitudeStr: h,
            magnitude: m,
            chance: l,
            chanceStr: d,
            phase: c,
            phaseStr: T
          });
        }
        if (o++, s.length == r)
          return s;
      }
    }
    return s;
  };
  b.prototype.stateAsSimpleArray = function(a) {
    var t = this.numAmplitudes();
    if (!this.state)
      return [];
    for (var r = [], n = 0; n < t; n++) {
      var s = n;
      a && (s = rt(n, this.numQubits)), r.push(x.round(this.state[s] || x.complex(0, 0), 14));
    }
    return r;
  };
  b.prototype.stateAsString = function(a) {
    var t = this.numAmplitudes();
    if (!this.state)
      return "Error: circuit is not initialized. Please call initState() or run() method.";
    for (var r = "", n = 0; n < t; n++) {
      var s = x.round(this.state[n] || x.complex(0, 0), 14);
      if (!a || s.re || s.im) {
        for (var e = x.pow(x.abs(s), 2) * 100, o = n.toString(2); o.length < this.numQubits; )
          o = "0" + o;
        for (var u = e.toFixed(5); u.length < 9; )
          u = " " + u;
        r += this.formatComplex(s, { fixedWidth: !0, decimalPlaces: 8, iotaChar: "i" }) + "|" + o + ">	" + u + `%
`;
      }
    }
    return r;
  };
  b.prototype.print = function(a) {
    console.log(this.stateAsString(a));
  };
  b.prototype.gotClassicalControl = function() {
    for (var a = 0; a < this.numCols(); a++)
      for (var t = 0; t < this.numQubits; t++) {
        var r = this.getGateAt(a, t);
        if (r && r.connector == 0 && r.options && r.options.condition && r.options.condition.creg)
          return !0;
      }
    return !1;
  };
  b.prototype.gotMeasurement = function() {
    for (var a = 0; a < this.numCols(); a++)
      for (var t = 0; t < this.numQubits; t++) {
        var r = this.getGateAt(a, t);
        if (r && r.connector == 0 && r.name == "measure")
          return !0;
      }
    return !1;
  };
  b.prototype.cregCount = function() {
    var a = 0;
    for (var t in this.cregs)
      a++;
    return a;
  };
  b.prototype.getCregs = function() {
    var a = {};
    for (var t in this.cregs)
      a[t] = this.getCregValue(t);
    return a;
  };
  b.prototype.cregsAsString = function() {
    var a = `reg	bin	dec
`;
    for (var t in this.cregs) {
      for (var r = this.getCregValue(t), n = r.toString(2), s = this.cregs[t] && this.cregs[t].length || 1; n.length < s; )
        n = "0" + n;
      a += t + "	" + n + "	" + r + `
`;
    }
    return a;
  };
  b.prototype.createCreg = function(a, t) {
    for (this.cregs[a] = []; this.cregs[a].length < (t || 1); )
      this.cregs[a].push(0);
  };
  b.prototype.removeCreg = function(a) {
    for (var t = this.numCols(), r = [], n = 0; n < t; n++)
      for (var s = 0; s < this.numQubits; s++) {
        var e = this.gates[s][n];
        e && e.options && (e.options.creg && e.options.creg.name && e.options.creg.name == a && r.indexOf(e.id) < 0 && r.push(e.id), e.options.condition && e.options.condition.creg && e.options.condition.creg == a && delete e.options.condition);
      }
    delete this.cregs[a];
    for (var o = 0; o < r.length; o++)
      this.removeGate(r[o]);
  };
  b.prototype.renameCreg = function(a, t) {
    for (var r = this.numCols(), n = 0; n < r; n++)
      for (var s = 0; s < this.numQubits; s++) {
        var e = this.gates[s][n];
        e && e.options && (e.options.creg && e.options.creg.name && e.options.creg.name == a && (e.options.creg.name = t), e.options.condition && e.options.condition.creg && e.options.condition.creg == a && (e.options.condition.creg = t));
      }
    this.cregs[t] = JSON.parse(JSON.stringify(this.cregs[a])), delete this.cregs[a];
  };
  b.prototype.minCregSize = function(a) {
    for (var t = 0, r = this.numCols(), n = 0; n < r; n++)
      for (var s = 0; s < this.numQubits; s++) {
        var e = this.gates[s][n];
        if (e && e.options) {
          if (e.options.creg && e.options.creg.name && e.options.creg.name == a) {
            var o = parseInt(e.options.creg.bit || 0);
            isNaN(o) && (o = 0), o > t && (t = o);
          }
          if (e.options.condition && e.options.condition.creg && e.options.condition.creg == a) {
            var u = Math.floor(Math.log2(e.options.condition.value));
            u > t && (t = u);
          }
        }
      }
    return t + 1;
  };
  b.prototype.resizeCreg = function(a, t) {
    if (!(t < this.minCregSize(a))) {
      for (; this.cregs[a].length < t; )
        this.cregs[a].push(0);
      for (; this.cregs[a].length > t; )
        this.cregs[a].pop();
    }
  };
  b.prototype.getCreg = function(a) {
    return this.cregs[a];
  };
  b.prototype.setCregBit = function(a, t, r) {
    var n = parseInt(t);
    if (isNaN(n))
      throw 'Error: invalid "cbit" argument to "setCregBit" method: expected "integer" got "' + typeof t + '".';
    for (this.cregs[a] || (this.cregs[a] = []); n >= this.cregs[a].length; )
      this.cregs[a].push(0);
    this.cregs[a][n] = r ? 1 : 0;
  };
  b.prototype.getCregBit = function(a, t) {
    if (!this.cregs[a])
      throw 'Error: "getCregBit": unknown register "' + a + '".';
    var r = parseInt(t);
    if (isNaN(r) || r >= this.cregs[a].length)
      throw 'Error: "getCregBit": bit "' + t + '" not found.';
    return this.cregs[a][r];
  };
  b.prototype.cregBase = function(a) {
    if (!this.cregs[a])
      throw 'Error: "getCregBit": unknown register "' + a + '".';
    var t = 0;
    for (var r in this.cregs) {
      if (r == a)
        return t;
      t += this.cregs[r].length;
    }
  };
  b.prototype.cregTotalBits = function() {
    var a = 0;
    for (var t in this.cregs)
      a += this.cregs[t].length;
    return a;
  };
  b.prototype.getCregValue = function(a) {
    if (!this.cregs[a])
      throw 'Error: "getCregBit": unknown register "' + a + '".';
    for (var t = this.cregs[a].length, r = 0, n = 0; n < t; n++)
      this.cregs[a][n] && (r += x.pow(2, n));
    return r;
  };
  b.prototype.measureAll = function(a) {
    if (this.collapsed && this.collapsed.length == this.numQubits && !a)
      return this.collapsed;
    this.collapsed = [];
    var t = Math.random();
    for (var r in this.state) {
      var n = x.round(this.state[r], 14);
      if (n.re || n.im) {
        var s = x.round(x.pow(x.abs(n), 2), 14);
        if (t -= s, t <= 0) {
          var e = parseInt(r);
          if (this.reverseBitOrder)
            for (var o = this.numQubits - 1; o >= 0; o--)
              this.collapsed.push(1 << o & e ? 1 : 0);
          else
            for (var o = 0; o < this.numQubits; o++)
              this.collapsed.push(1 << o & e ? 1 : 0);
          return this.collapsed;
        }
      }
    }
    if (!this.collapsed.length)
      for (; this.collapsed.length < this.numQubits; )
        this.collapsed.push(0);
    return this.collapsed;
  };
  b.prototype.measureAllMultishot = function(a) {
    a = a || 1;
    for (var t = {}, r = [], n = 0; n < a; n++)
      r.push(Math.random());
    var s = 0;
    do
      for (var e in this.state) {
        var o = x.round(this.state[e], 14);
        if (o.re || o.im) {
          for (var u = x.round(x.pow(x.abs(o), 2), 14), p = 0; p < a; p++)
            if (r[p] > 0 && (r[p] -= u, r[p] <= 0)) {
              for (var v = parseInt(e).toString(2); v.length < this.numQubits; )
                v = "0" + v;
              if (t[v] ? t[v]++ : t[v] = 1, s++, s == a)
                return t;
            }
        }
      }
    while (s < a);
  };
  b.prototype.measure = function(a, t, r, n) {
    (n || !this.collapsed || this.collapsed.length != this.numQubits) && this.measureAll(n);
    var s = this.collapsed[a];
    return t && typeof r != "undefined" && this.setCregBit(t, r, s), s;
  };
  b.prototype.probabilities = function() {
    this.prob = [];
    for (var a = 0; a < this.numQubits; a++)
      this.prob.push(0);
    for (var t in this.state)
      for (var r = parseInt(t), a = 0; a < this.numQubits; a++) {
        var n = null;
        if (this.reverseBitOrder ? n = x.pow(2, this.numQubits - 1 - a) : n = x.pow(2, a), r & n) {
          var s = this.state[t];
          (s.re || s.im) && (this.prob[a] += x.pow(x.abs(s), 2));
        }
      }
    for (var a = 0; a < this.numQubits; a++)
      this.prob[a] = x.round(this.prob[a], 14);
    return this.prob;
  };
  b.prototype.probability = function(a) {
    return (!this.prob || this.prob.length != this.numQubits) && this.probabilities(), this.prob[a];
  };
  b.prototype.densityMatrix = function() {
    var a = [], t = this.numAmplitudes();
    for (row = 0; row < t; row++) {
      for (var r = [], n = this.state[row] || x.complex(0, 0), s = 0; s < t; s++) {
        var e = this.state[s] || x.complex(0, 0);
        (e.re || e.im) && (e = x.conj(e)), r.push(x.multiply(n, e));
      }
      a.push(r);
    }
    return a;
  };
  b.prototype.partialTrace = function(a) {
    function t(f, h, m) {
      var c = f << 1, l = (2 << h) - 1, d = 1 << h, c = c ^ (c ^ f) & l | d;
      return m || (c = c ^ d), c;
    }
    var r = [], n = this.numQubits - 1, s = x.pow(2, n), e = null;
    this.reverseBitOrder ? e = this.numQubits - 1 - a : e = a;
    for (var o = 0; o < 4; o++) {
      r.push(x.complex(0, 0));
      for (var u = s; u--; ) {
        var p = t(u, e, o & 2 ? 1 : 0);
        if (this.state[p]) {
          var v = t(u, e, o & 1 ? 1 : 0);
          this.state[v] && (r[o] = x.add(r[o], x.multiply(this.state[p], x.conj(this.state[v]))));
        }
      }
    }
    return [
      [r[0], r[1]],
      [r[2], r[3]]
    ];
  };
  b.prototype.angles = function() {
    for (var a = [], t = 0; t < this.numQubits; t++)
      a.push({ theta: 0, phi: 0 });
    for (var t = 0; t < this.numQubits; t++) {
      var r = this.partialTrace(t), n = x.round(x.sqrt(r[0][0]), 12), s = x.round(x.multiply(r[1][0], x.sqrt(2)), 12), e = x.round(x.abs(x.sqrt(2 * x.abs(x.trace(x.pow(r, 2))) - 1)), 12), o = x.multiply(2, x.acos(n)), u = 0;
      x.round(s.re, 8) == 0 && x.round(s.im, 8) == 0 || (u = x.multiply(x.complex(0, -1), x.log(x.multiply(s, x.csc(x.divide(o, 2))))).re, isNaN(u) && (u = 0)), a[t].theta = x.round(x.abs(o), 12), a[t].phi = x.round(u, 12), a[t].thetaDeg = x.round(x.multiply(x.abs(o), 180 / x.pi), 7), a[t].phiDeg = x.round(x.multiply(u, 180 / x.pi), 7), a[t].radius = x.round(e, 7);
    }
    return a;
  };
  b.prototype.randomCircuit = function(a, t, r) {
    this.init(a), r = r || {};
    var n = r.useGates && r.useGates.length ? r.useGates : Object.keys(this.basicGates);
    r.noMeasure && n.indexOf("measure") >= 0 && n.splice(n.indexOf("measure"), 1), r.noReset && n.indexOf("reset") >= 0 && n.splice(n.indexOf("reset"), 1);
    for (var s = 0; s < t; ) {
      var e = n[Math.floor(Math.random() * n.length)], o = this.basicGates[e];
      if (o) {
        var u = o.matrix && o.matrix.length ? x.log2(o.matrix.length) : 1;
        if (u <= a) {
          for (var p = []; p.length < u; ) {
            var v = -1;
            do
              v = Math.floor(Math.random() * a);
            while (p.indexOf(v) >= 0);
            p.push(v);
          }
          var f = {};
          if (o.params && o.params.length) {
            var h = {};
            o.params.map(function(l) {
              h[l] = Math.PI * 2 * Math.random(), h[l] > Math.PI && (h[l] = Math.PI - h[l]);
            }), f.params = h;
          }
          if (e == "measure")
            f.creg = {
              name: "c",
              bit: p[0]
            };
          else if (!r.noClassicControl && Math.floor(Math.random() * 4) == 0) {
            var m = this.cregTotalBits();
            m && (f.condition = {
              creg: "c",
              value: Math.floor(Math.random() * x.pow(2, m))
            });
          }
          this.appendGate(e, p, f), s++;
        }
      }
    }
  };
  b.prototype.randomUnitary = function(a) {
    var t = new b();
    return t.randomCircuit(a || 1, (a || 1) * 8, {
      useGates: ["rx", "rz", "cz"],
      noMeasure: !0,
      noReset: !0,
      noClassicControl: !0
    }), t.circuitMatrix();
  };
  b.prototype.eulerAnglesZYZ = function(a) {
    var t = { theta: null, phi: null, lambda: null, phase: null }, r = x.pow(x.det(a), -0.5);
    t.phase = -1 * x.complex(r).toPolar().phi;
    var n = x.multiply(r, a);
    t.theta = 2 * x.atan2(x.abs(n[1][0]), x.abs(n[0][0]));
    var s = 2 * x.complex(n[1][1]).toPolar().phi, e = 2 * x.complex(n[1][0]).toPolar().phi;
    return t.phi = (s + e) / 2, t.lambda = (s - e) / 2, t;
  };
  tt.exports = b;
});
export default pt();
