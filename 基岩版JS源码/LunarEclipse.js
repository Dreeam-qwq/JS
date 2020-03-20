var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var Button = android.widget.Button;
var LinearLayout = android.widget.LinearLayout;
var RelativeLayout = android.widget.RelativeLayout;
var PopupWindow = android.widget.PopupWindow;
var ScrollView = android.widget.ScrollView;
var TextView = android.widget.TextView;
var CheckBox = android.widget.CheckBox;
var Switch = android.widget.Switch;
var Toast = android.widget.Toast;
var Runnable = java.lang.Runnable;
var View = android.view.View;
var ColorDrawable = android.graphics.drawable.ColorDrawable;
var Color = android.graphics.Color;
var Gravity = android.view.Gravity;
var Intent = android.content.Intent;
var Uri = android.net.Uri;

function fctoast(_0x1350x13, _0x1350x14) {
    try {
        var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                var _0x1350x15 = android.widget.Toast.makeText(com.mojang.minecraftpe.MainActivity.currentMainActivity.get(), "" + _0x1350x13, android.widget.Toast.LENGTH_LONG);
                var _0x1350x16 = new android.widget.LinearLayout(ctx);
                var _0x1350x17 = new android.widget.TextView(ctx);
                if (_0x1350x14 == null) {
                    _0x1350x13 = "Eclipse: " + _0x1350x13
                } else {
                    _0x1350x13 = _0x1350x14 + ": " + _0x1350x13
                };
                _0x1350x17.setText(_0x1350x13);
                _0x1350x17.setGravity(android.view.Gravity.CENTER);
                _0x1350x17.setTextSize(10);
                _0x1350x17.setPadding(10, 3, 3, 3);
                _0x1350x17.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                var nnbg = new android.graphics.drawable.GradientDrawable();
                nnbg.setColor(android.graphics.Color.rgb(25, 25, 112));
                nnbg.setStroke(4, android.graphics.Color.rgb(75, 0, 130));
                nnbg.setCornerRadius(2);
                _0x1350x16.addView(_0x1350x17);
                _0x1350x16.setBackground(nnbg);
                _0x1350x16.getBackground().setAlpha(150);
                _0x1350x15.setView(_0x1350x16);
                _0x1350x15.show()
            }
        }))
    } catch (e) {
        print(e)
    }
}
var bg = new android.graphics.drawable.GradientDrawable();
bg.setColor(android.graphics.Color.rgb(25, 25, 112));
bg.setStroke(4, android.graphics.Color.rgb(75, 0, 130));
bg.setCornerRadius(2);
var mbg = new android.graphics.drawable.GradientDrawable();
mbg.setColor(android.graphics.Color.rgb(25, 25, 112));
mbg.setStroke(3, android.graphics.Color.rgb(75, 0, 130));
mbg.setCornerRadius(2);
var xbg = new android.graphics.drawable.GradientDrawable();
xbg.setColor(android.graphics.Color.rgb(25, 25, 112));
xbg.setStroke(4, android.graphics.Color.rgb(75, 0, 130));
xbg.setCornerRadius(2);
var nnbg = new android.graphics.drawable.GradientDrawable();
nnbg.setColor(android.graphics.Color.rgb(25, 25, 112));
nnbg.setStroke(4, android.graphics.Color.rgb(75, 0, 130));
var abg = new android.graphics.drawable.GradientDrawable();
abg.setAlpha(150);
abg.setColor(android.graphics.Color.rgb(25, 25, 112));
abg.setStroke(4, android.graphics.Color.MAGENTA);
var nbg = new android.graphics.drawable.GradientDrawable();
nbg.setColor(android.graphics.Color.rgb(25, 25, 112));
nbg.setStroke(3, android.graphics.Color.rgb(75, 0, 130));
nbg.setCornerRadius(2);
var jbg = new android.graphics.drawable.GradientDrawable();
jbg.setColor(android.graphics.Color.TRANSPARENT);
jbg.setCornerRadius(7);
var Utils = {
    File: {
        dragopDir: android.os.Environment.getExternalStorageDirectory() + "/DragOP/",
        getTextFromFile: function(_0x1350x20) {
            let _0x1350x21 = (new java.io.BufferedReader(new java.io.FileReader(_0x1350x20)));
            let _0x1350x22 = new java.lang.StringBuilder();
            let _0x1350x23;
            while ((_0x1350x23 = _0x1350x21.readLine()) != null) {
                _0x1350x22.append(_0x1350x23 + "")
            };
            return _0x1350x22.toString()
        },
        saveTextToFile: function(_0x1350x20, _0x1350x13) {
            if (!_0x1350x20.exists()) {
                _0x1350x20.createNewFile()
            };
            let _0x1350x24 = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, _0x1350x13.length());
            for (let _0x1350x25 = 0; _0x1350x25 < _0x1350x13.length(); _0x1350x25++) {
                _0x1350x24[_0x1350x25] = _0x1350x13.charCodeAt(_0x1350x25)
            };
            let _0x1350x26 = new java.io.FileOutputStream(_0x1350x20);
            try {
                _0x1350x26.write(_0x1350x24)
            } finally {
                _0x1350x26.close()
            }
        }
    },
    Render: {
        getFloatBuffer: function(_0x1350x27) {
            let _0x1350x28 = java.nio.ByteBuffer.allocateDirect(_0x1350x27.length * 4);
            _0x1350x28.order(java.nio.ByteOrder.nativeOrder());
            let _0x1350x29 = _0x1350x28.asFloatBuffer();
            _0x1350x29.put(_0x1350x27);
            _0x1350x29.position(0);
            return _0x1350x29
        },
        getShortBuffer: function(_0x1350x2a) {
            let _0x1350x28 = java.nio.ByteBuffer.allocateDirect(_0x1350x2a.length * 2);
            _0x1350x28.order(java.nio.ByteOrder.nativeOrder());
            let _0x1350x2b = _0x1350x28.asShortBuffer();
            _0x1350x2b.put(_0x1350x2a);
            _0x1350x2b.position(0);
            return _0x1350x2b
        },
        renderer: null,
        glSurface: null,
        fov: 90,
        color: android.graphics.Color.rgb(75, 0, 130),
        initted: false,
        init: function() {
            if (Utils.Render.initted) {
                return
            };
            let _0x1350x2c = Utils.File.getTextFromFile(new java.io.File(android.os.Environment.getExternalStorageDirectory() + " / games / com\.mojang / minecraftpe / ", "
                                options\.txt "));
            _0x1350x2c = _0x1350x2c.split("
                                ");
            _0x1350x2c.forEach(function(_0x1350x2d) {
                let _0x1350x2e = _0x1350x2d.split(": ");
                if (_0x1350x2e[0] == "
                                gfx_field_of_view ") {
                    Utils.Render.fov = _0x1350x2e[1]
                }
            });
            this.renderer = new android.opengl.GLSurfaceView.Renderer({
                onSurfaceCreated: function(_0x1350x2f, _0x1350x30) {
                    let _0x1350x31 = javax.microedition.khronos.opengles.GL10;
                    _0x1350x2f.glClearColor(0, 0, 0, 0);
                    _0x1350x2f.glShadeModel(_0x1350x31.GL_SMOOTH);
                    _0x1350x2f.glClearDepthf(1.0);
                    _0x1350x2f.glDisable(_0x1350x31.GL_DITHER);
                    _0x1350x2f.glEnable(_0x1350x31.GL_DEPTH_TEST);
                    _0x1350x2f.glDepthFunc(_0x1350x31.GL_LEQUAL);
                    _0x1350x2f.glHint(_0x1350x31.GL_PERSPECTIVE_CORRECTION_HINT, _0x1350x31.GL_NICEST)
                },
                onSurfaceChanged: function(_0x1350x2f, _0x1350x32, _0x1350x33) {
                    let _0x1350x31 = javax.microedition.khronos.opengles.GL10;
                    _0x1350x2f.glMatrixMode(_0x1350x31.GL_PROJECTION);
                    _0x1350x2f.glLoadIdentity();
                    android.opengl.GLU.gluPerspective(_0x1350x2f, Utils.Render.fov, _0x1350x32 / _0x1350x33, 0.1, 100);
                    _0x1350x2f.glMatrixMode(_0x1350x31.GL_MODELVIEW);
                    _0x1350x2f.glLoadIdentity()
                },
                onDrawFrame: function(_0x1350x2f) {
                    let _0x1350x31 = javax.microedition.khronos.opengles.GL10;
                    _0x1350x2f.glClear(_0x1350x31.GL_COLOR_BUFFER_BIT | _0x1350x31.GL_DEPTH_BUFFER_BIT);
                    _0x1350x2f.glLoadIdentity();
                    if (essp == true && getPlayerEnt() != -1) {
                        try {
                            _0x1350x2f.glDisable(_0x1350x31.GL_LIGHTING);
                            let _0x1350x34 = getYaw() % 360;
                            let _0x1350x35 = getPitch() % 360;
                            let _0x1350x36 = getPlayerX();
                            let _0x1350x37 = getPlayerY() + 1;
                            let _0x1350x38 = getPlayerZ();
                            let _0x1350x39 = Math.sin(_0x1350x34 / 180 * Math.PI);
                            let _0x1350x3a = Math.cos(_0x1350x34 / 180 * Math.PI);
                            let _0x1350x3b = Math.sqrt(_0x1350x39 * _0x1350x39 + _0x1350x3a * _0x1350x3a) * Math.tan((_0x1350x35 - 180) / 180 * Math.PI);
                            let _0x1350x3c = _0x1350x36 - _0x1350x39;
                            let _0x1350x3d = _0x1350x38 + _0x1350x3a;
                            let _0x1350x3e = _0x1350x37 - _0x1350x3b;
                            android.opengl.GLU.gluLookAt(_0x1350x2f, _0x1350x36, _0x1350x37, _0x1350x38, _0x1350x3c, _0x1350x3e, _0x1350x3d, 0, 1.0, 0);
                            let _0x1350x3f = Entity.getAll();
                            let _0x1350x40 = Server.getAllPlayers();
                            _0x1350x3f.forEach(function(_0x1350x2d) {
                                if (_0x1350x2d != getPlayerEnt() && Entity.getEntityTypeId(_0x1350x2d) == EntityType.PLAYER) {
                                    Utils.Render.drawBox(_0x1350x2f, Entity.getX(_0x1350x2d) - 0.5, Entity.getY(_0x1350x2d) - 0.5, Entity.getZ(_0x1350x2d) - 0.50, 1, 2, 1)
                                }
                            });
                            _0x1350x40.forEach(function(_0x1350x2d) {
                                if (_0x1350x2d != getPlayerEnt() && Entity.getEntityTypeId(_0x1350x2d) == EntityType.PLAYER) {
                                    Utils.Render.drawBox(_0x1350x2f, Entity.getX(_0x1350x2d) - 0.5, Entity.getY(_0x1350x2d) - 0.5, Entity.getZ(_0x1350x2d) - 0.5, 1, 2, 1)
                                }
                            })
                        } catch (e) {
                            clientMessage("
                                RenderProblem: " + e)
                        }
                    } else {}
                }
            });
            ctx.runOnUiThread(new java.lang.Runnable({
                run: function() {
                    Utils.Render.glSurface = new android.opengl.GLSurfaceView(ctx);
                    Utils.Render.glSurface.setZOrderOnTop(true);
                    Utils.Render.glSurface.setEGLConfigChooser(8, 8, 8, 8, 16, 0);
                    Utils.Render.glSurface.getHolder().setFormat(android.graphics.PixelFormat.TRANSLUCENT);
                    Utils.Render.glSurface.setRenderer(Utils.Render.renderer);
                    ctx.getWindow().getDecorView().addView(Utils.Render.glSurface);
                    Utils.Render.initted = true
                }
            }))
        },
        drawBox: function(_0x1350x2f, _0x1350x41, _0x1350x42, _0x1350x43, _0x1350x44, _0x1350x45, _0x1350x46) {
            let _0x1350x31 = javax.microedition.khronos.opengles.GL10;
            let _0x1350x47 = new Array(_0x1350x44, _0x1350x45, _0x1350x46);
            let _0x1350x48 = [0, 0, 0, _0x1350x47[0], 0, 0, 0, 0, _0x1350x47[2], _0x1350x47[0], 0, _0x1350x47[2], 0, _0x1350x47[1], 0, _0x1350x47[0], _0x1350x47[1], 0, 0, _0x1350x47[1], _0x1350x47[2], _0x1350x47[0], _0x1350x47[1], _0x1350x47[2]];
            let _0x1350x49 = Utils.Render.getFloatBuffer(_0x1350x48);
            let _0x1350x4a = [0, 1, 0, 2, 0, 4, 3, 1, 3, 2, 3, 7, 5, 4, 5, 7, 5, 1, 6, 4, 6, 7, 6, 2];
            let _0x1350x4b = [0, 1, 4, 1, 4, 5, 2, 3, 6, 7, 6, 3, 1, 3, 7, 7, 1, 5, 0, 2, 6, 6, 0, 4, 0, 1, 2, 3, 1, 2, 4, 5, 6, 7, 5, 6];
            let _0x1350x4c = Utils.Render.getShortBuffer(_0x1350x4a);
            let _0x1350x4d = Utils.Render.getShortBuffer(_0x1350x4b);
            _0x1350x2f.glTranslatef(_0x1350x41, _0x1350x42, _0x1350x43);
            _0x1350x2f.glFrontFace(_0x1350x31.GL_CCW);
            _0x1350x2f.glEnable(_0x1350x31.GL_BLEND);
            _0x1350x2f.glBlendFunc(_0x1350x31.GL_SRC_ALPHA, _0x1350x31.GL_ONE_MINUS_SRC_ALPHA);
            _0x1350x2f.glLineWidth(4);
            _0x1350x2f.glColor4f(android.graphics.Color.red(Utils.Render.color) / 255, android.graphics.Color.green(Utils.Render.color) / 255, android.graphics.Color.blue(Utils.Render.color) / 255, 0.7);
            _0x1350x2f.glEnableClientState(_0x1350x31.GL_VERTEX_ARRAY);
            _0x1350x2f.glVertexPointer(3, _0x1350x31.GL_FLOAT, 0, _0x1350x49);
            _0x1350x2f.glDrawElements(_0x1350x31.GL_LINES, _0x1350x4a.length, _0x1350x31.GL_UNSIGNED_SHORT, _0x1350x4c);
            _0x1350x2f.glColor4f(android.graphics.Color.red(Utils.Render.color) / 255, android.graphics.Color.green(Utils.Render.color) / 255, android.graphics.Color.blue(Utils.Render.color) / 255, 0.2);
            _0x1350x2f.glDrawElements(_0x1350x31.GL_TRIANGLES, _0x1350x4b.length, _0x1350x31.GL_UNSIGNED_SHORT, _0x1350x4d);
            _0x1350x2f.glDisable(_0x1350x31.GL_LINE_SMOOTH);
            _0x1350x2f.glTranslatef(-_0x1350x41, -_0x1350x42, -_0x1350x43)
        },
        drawLine: function(_0x1350x2f, _0x1350x41, _0x1350x42, _0x1350x43, _0x1350x4e, _0x1350x4f, _0x1350x50) {
            let _0x1350x31 = javax.microedition.khronos.opengles.GL10;
            let _0x1350x47 = new Array(_0x1350x4e, _0x1350x4f, _0x1350x50);
            let _0x1350x48 = [0, 0, 0, _0x1350x4e - _0x1350x41, _0x1350x4f - _0x1350x42, _0x1350x50 - _0x1350x43];
            let _0x1350x49 = Utils.Render.getFloatBuffer(_0x1350x48);
            let _0x1350x51 = [0, 1];
            let _0x1350x52 = Utils.Render.getShortBuffer(_0x1350x51);
            _0x1350x2f.glTranslatef(_0x1350x41, _0x1350x42, _0x1350x43);
            _0x1350x2f.glEnable(_0x1350x31.GL_BLEND);
            _0x1350x2f.glDepthMask(false);
            _0x1350x2f.glBlendFunc(_0x1350x31.GL_SRC_ALPHA, _0x1350x31.GL_ONE_MINUS_SRC_ALPHA);
            _0x1350x2f.glLineWidth(4);
            _0x1350x2f.glColor4f(android.graphics.Color.red(Utils.Render.color) / 255, android.graphics.Color.green(Utils.Render.color) / 255, android.graphics.Color.blue(Utils.Render.color) / 255, 0.7);
            _0x1350x2f.glEnableClientState(_0x1350x31.GL_VERTEX_ARRAY);
            _0x1350x2f.glVertexPointer(3, _0x1350x31.GL_FLOAT, 0, _0x1350x49);
            _0x1350x2f.glDrawElements(_0x1350x31.GL_LINES, _0x1350x51.length, _0x1350x31.GL_UNSIGNED_SHORT, _0x1350x52);
            _0x1350x2f.glTranslatef(-_0x1350x41, -_0x1350x42, -_0x1350x43);
            _0x1350x2f.glDepthMask(true);
            _0x1350x2f.glDisable(_0x1350x31.GL_LINE_SMOOTH)
        }
    },
    Block: {
        isLiquid: function(_0x1350x53) {
            if (_0x1350x53 >= 8 && _0x1350x53 <= 11) {
                return true
            };
            return false
        }
    },
    Velocity: {
        calculateSpeed: function() {
            return Math.sqrt(Math.pow(Entity.getVelX(getPlayerEnt()), 2) + Math.pow(Entity.getVelZ(getPlayerEnt()), 2))
        }
    },
    Player: {
        isInWater: function() {
            if (Utils.Block.isLiquid(getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())))) {
                return true
            } else {
                return false
            }
        },
        isBobGround: function() {
            var _0x1350x42 = Entity.getY(getPlayerEnt());
            while (_0x1350x42 > 1) {
                _0x1350x42 -= 1
            };
            if ((Math.round(_0x1350x42 * 100) >= 61 && Math.round(_0x1350x42 * 100) <= 63) && getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())) != 0 && !Utils.Block.isLiquid(getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())))) {
                return true
            };
            if ((Math.round(_0x1350x42 * 100) >= 11 && Math.round(_0x1350x42 * 100) <= 13) && getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())) != 0 && !Utils.Block.isLiquid(getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())))) {
                return true
            } else {
                return false
            }
        },
        isOnGround: function() {
            var _0x1350x42 = Entity.getY(getPlayerEnt());
            while (_0x1350x42 > 1) {
                _0x1350x42 -= 1
            };
            if ((Math.round(_0x1350x42 * 100) >= 61 && Math.round(_0x1350x42 * 100) <= 63) && getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())) != 0 && !Utils.Block.isLiquid(getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())))) {
                return true
            };
            if ((Math.round(_0x1350x42 * 100) >= 11 && Math.round(_0x1350x42 * 100) <= 13) && getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())) != 0 && !Utils.Block.isLiquid(getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())))) {
                return true
            } else {
                return false
            }
        },
        isCollidedHorizontally: function() {
            var _0x1350x41 = Entity.getX(getPlayerEnt());
            var _0x1350x43 = Entity.getZ(getPlayerEnt());
            var _0x1350x54 = Math.round(_0x1350x41 - 0.5);
            var _0x1350x55 = Math.round(_0x1350x43 - 0.5);
            while (_0x1350x41 < 1) {
                _0x1350x41 += 1
            };
            while (_0x1350x43 < 1) {
                _0x1350x43 += 1
            };
            while (_0x1350x41 > 1) {
                _0x1350x41 -= 1
            };
            while (_0x1350x43 > 1) {
                _0x1350x43 -= 1
            };
            if (Math.round(_0x1350x41 * 100) == 31) {
                _0x1350x41 -= 0.01
            };
            if (Math.round(_0x1350x43 * 100) == 31) {
                _0x1350x43 -= 0.01
            };
            if (Math.round(_0x1350x41 * 100) == 69) {
                _0x1350x41 += 0.01
            };
            if (Math.round(_0x1350x43 * 100) == 69) {
                _0x1350x43 += 0.01
            };
            if (Math.round(_0x1350x41 * 100) == 30) {
                _0x1350x54--
            };
            if (Math.round(_0x1350x43 * 100) == 30) {
                _0x1350x55--
            };
            if (Math.round(_0x1350x41 * 100) == 70) {
                _0x1350x54++
            };
            if (Math.round(_0x1350x43 * 100) == 70) {
                _0x1350x55++
            };
            if (getTile(_0x1350x54, Entity.getY(getPlayerEnt()), _0x1350x55) == 0 && getTile(_0x1350x54, Entity.getY(getPlayerEnt()) - 1, _0x1350x55) == 0) {
                return false
            };
            if (Block.getDestroyTime(getTile(_0x1350x54, Entity.getY(getPlayerEnt()) - 1, _0x1350x55)) <= 0.1 && Block.getDestroyTime(getTile(_0x1350x54, Entity.getY(getPlayerEnt()), _0x1350x55)) <= 0.1) {
                return false
            };
            if (Math.round(_0x1350x41 * 100) == 30 || Math.round(_0x1350x41 * 100) == 70) {
                return true
            };
            if (Math.round(_0x1350x43 * 100) == 30 || Math.round(_0x1350x43 * 100) == 70) {
                return true
            };
            return false
        }
    }
};

function screenChangeHook(_0x1350x57) {
    if (_0x1350x57.toString().indexOf("
                                progress_screen ") > -1) {
        Utils.Render.init()
    }
}
var GUI;
var GUIj;
var GUIe;
var GUIs;
var GUIv;
var GUIr;
var GUIv;
var GUIk;
var GUIbg;
var GUIar;
var GUIco;
var GUImi;
var GUIpl;
var GUIby;
var menu;
var menu1;
var menu2;
var menu3;
var menu4;
var exitUI;
var gmChange = Level.getGameMode();
var VERSION = "\ [V4\]
                                ";
var NAME = "
                                Lunar Eclipse ";
var DEVELOPERS = "
                                MadMinerYT ";
var MODULES = "
                                33 ";
var cBtn = "
                                LE ";
var backfaces;
var backfacess = false;
var backfaceed = false;
var epss;
var espss = false;
var essp = false;
var reverss;
var reversss = false;
var reversed = false;
var antikbs;
var antikbss = false;
var antikbed = false;
var escapes;
var escapeed = false;
var ndglides;
var ndglidess = false;
var ndglideed = false;
var aimbots;
var aimbotss = false;
var aimboted = false;
var reachs;
var reachss = false;
var reached = false;
var grapples;
var grappless = false;
var grappleed = false;
var autoswords;
var autoswordss = false;
var autosworded = false;
var steps;
var stepss = false;
var steped = false;
var csteps;
var cstepss = false;
var csteped = false;
var criticalss;
var criticales = false;
var criticalsed = false;
var critTick = 0;
var criticalTick = 0;
var fullbrights;
var fullbrightss = false;
var fullbrighted = false;
var fastfalls;
var fastfallss = false;
var fastfalled = false;
var tapjumps;
var tapjumpss = false;
var tapjumped = false;
var taptps;
var taptpss = false;
var taptped = false;
var speeds;
var speedss = false;
var speeded = false;
var brightblockss;
var brightblocksed = false;
var blockDataValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 141, 15, 16, 17, 18, 20, 21, 22, 24, 26, 30, 31, 32, 35, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 53, 54, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 67, 68, 71, 73, 74, 78, 79, 80, 81, 82, 83, 85, 87, 92, 95, 98, 102, 103, 105, 107, 109, 108, 112, 114, 128, 155, 156, 245, 246, 247, 248, 249, 253, 254, 255];
var zoomspeeds;
var zoomspeedss = false;
var zoomspeeded = false;
var antigravitys;
var antigravityss = false;
var antigravityed = false;
var criticaltrailss;
var criticaltrailsss = false;
var criticaltrailsed = false;
var highjumps;
var highjumpss = false;
var highjumped = false;
var can = 1;
var canGetHP = 1;
var HP;
var gravity = -0.07840000092983246;
var derps;
var derpss = false;
var derped = false;
var bhop = false;
var bhopl = false;
var bhoped = false;
var twerks;
var twerkss = false;
var twerked = false;
var tCounter = 0;
var backfaces;
var backfacess = false;
var backfaceed = false;
var bowaimbots;
var bowaimbotss = false;
var bowaimboted = false;
var autowalks;
var autowalkss = false;
var autowalked = false;
var jetpacks;
var jetpackss = false;
var jetpacked = false;
var cspeeds;
var cspeedss = false;
var cspeeded = false;
var airjumps;
var airjumped = false;
var dolphins;
var dolphinss = false;
var dolphined = false;
var solidliquids;
var solidliquidss = false;
var solidliquided = false;
var ghosts;
var ghostss = false;
var ghosted = false;
var stealths;
var stealthss = false;
var stealthed = false;
var viewchangers;
var viewchangered = false;
var glides;
var glidess = false;
var glideed = false;
var ndglides;
var ndglidess = false;
var ndglideed = false;
var aimassists;
var aimassistss = false;
var aimassisted = false;
var elevators;
var elevatored = false;
var lbsgspeeds;
var lbsgspeedss = false;
var lbsgspeeded = false;
var highjumps;
var highjumpss = false;
var highjumped = false;
var can = 1;
var canGetHP = 1;
var HP;
var gravity = -0.07840000092983246;
var timers;
var timerss = false;
var timered = false;
var betterattack;
var betterss = false;
var betters = false;
var spam;
var spams = false;
var spamss = false;
var reverss;
var reversss = false;
var reversed = false;
var js;
var js1 = false;
var js2 = false;
var bypassglides;
var bypassglidess = false;
var bypassglideed = false;
var bgtick = 0;
var mglide;
var mglide1 = false;
var mglide2 = false;
var hb;
var hb1 = false;
var hb2 = false;
var infs;
var infss = false;
var infed = false;
var fp;
var fp1 = false;
var fp2 = false;
var strafes;
var strafess = false;
var strafed = false;
var follows;
var followss = false;
var followed = false;
var sideranges;
var siderangess = false;
var sideranged = false;
var bglides;
var bglidess = false;
var bglideed = false;
var airs;
var airss = false;
var aired = false;

function dip2px(_0x1350x118) {
    return Math.ceil(_0x1350x118 * ctx.getResources().getDisplayMetrics().density)
}

function showCombatBtn() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var _0x1350x16 = new LinearLayout(ctx);
                _0x1350x16.setOrientation(1);
                var _0x1350x11a = new Button(ctx);
                _0x1350x11a.setText("
                                C ");
                _0x1350x11a.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                _0x1350x11a.setBackground(bg);
                _0x1350x11a.getBackground().setAlpha(100);
                _0x1350x11a.setOnClickListener(new View.OnClickListener({
                    onClick: function(_0x1350x11b) {
                        combatMenu();
                        exit();
                        if (GUIco != null && GUIco.isShowing()) {
                            GUIco.dismiss()
                        }
                    }
                }));
                _0x1350x16.addView(_0x1350x11a);
                GUIco = new PopupWindow(_0x1350x16, dip2px(45), dip2px(45));
                GUIco.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                GUIco.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 300, 0)
            } catch (err) {
                Toast.makeText(ctx, "
                                An error occured: " + err, 1).show()
            }
        }
    }))
}
showCombatBtn();

function showMotionBtn() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var _0x1350x16 = new LinearLayout(ctx);
                _0x1350x16.setOrientation(1);
                var _0x1350x11d = new Button(ctx);
                _0x1350x11d.setText("
                                M ");
                _0x1350x11d.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                _0x1350x11d.setBackground(bg);
                _0x1350x11d.getBackground().setAlpha(100);
                _0x1350x11d.setOnClickListener(new View.OnClickListener({
                    onClick: function(_0x1350x11b) {
                        miscMenu();
                        exitmisc();
                        if (GUImi != null && GUImi.isShowing()) {
                            GUImi.dismiss()
                        }
                    }
                }));
                _0x1350x16.addView(_0x1350x11d);
                GUImi = new PopupWindow(_0x1350x16, dip2px(45), dip2px(45));
                GUImi.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                GUImi.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 200, 0)
            } catch (err) {
                Toast.makeText(ctx, "
                                An error occured: " + err, 1).show()
            }
        }
    }))
}
showMotionBtn();

function showBypassBtn() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var _0x1350x16 = new LinearLayout(ctx);
                _0x1350x16.setOrientation(1);
                var _0x1350x11f = new Button(ctx);
                _0x1350x11f.setText("
                                B ");
                _0x1350x11f.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                _0x1350x11f.setBackground(bg);
                _0x1350x11f.getBackground().setAlpha(100);
                _0x1350x11f.setOnClickListener(new View.OnClickListener({
                    onClick: function(_0x1350x11b) {
                        bypassMenu();
                        exitbypass();
                        if (GUIby != null && GUIby.isShowing()) {
                            GUIby.dismiss()
                        }
                    }
                }));
                _0x1350x16.addView(_0x1350x11f);
                GUIby = new PopupWindow(_0x1350x16, dip2px(45), dip2px(45));
                GUIby.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                GUIby.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 0, 0)
            } catch (err) {
                Toast.makeText(ctx, "
                                An error occured: " + err, 1).show()
            }
        }
    }))
}
showBypassBtn();

function showPlayerBtn() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var _0x1350x16 = new LinearLayout(ctx);
                _0x1350x16.setOrientation(1);
                var _0x1350x121 = new Button(ctx);
                _0x1350x121.setText("
                                P ");
                _0x1350x121.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                _0x1350x121.setBackground(bg);
                _0x1350x121.getBackground().setAlpha(100);
                _0x1350x121.setOnClickListener(new View.OnClickListener({
                    onClick: function(_0x1350x11b) {
                        playerMenu();
                        exitplayer();
                        if (GUIpl != null && GUIpl.isShowing()) {
                            GUIpl.dismiss()
                        }
                    }
                }));
                _0x1350x16.addView(_0x1350x121);
                GUIpl = new PopupWindow(_0x1350x16, dip2px(45), dip2px(45));
                GUIpl.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                GUIpl.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 100, 0)
            } catch (err) {
                Toast.makeText(ctx, "
                                An error occured: " + err, 1).show()
            }
        }
    }))
}
showPlayerBtn();

function showbglideSwitch() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var _0x1350x16 = new LinearLayout(ctx);
                _0x1350x16.setOrientation(1);
                var _0x1350x123 = new android.widget.ToggleButton(ctx);
                _0x1350x123.setText("
                                BGlide ");
                _0x1350x123.setTextOn("
                                BGlide on ");
                _0x1350x123.setTextOff("
                                BGlide off ");
                _0x1350x123.setChecked(bglideed);
                _0x1350x123.setTextSize(10);
                _0x1350x123.setBackground(bg);
                _0x1350x123.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                _0x1350x123.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(_0x1350x11b) {
                        if (!bglideed) {
                            bglideed = true;
                            bglidess = true;
                            _0x1350x123.setBackground(abg)
                        } else {
                            bglideed = false;
                            bglidess = false;
                            _0x1350x123.setBackground(bg)
                        };
                        _0x1350x123.setChecked(bglideed)
                    }
                }));
                _0x1350x16.addView(_0x1350x123);
                GUIbg = new PopupWindow(_0x1350x16, dip2px(65), dip2px(65));
                GUIbg.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                GUIbg.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.CENTER, 3, 230)
            } catch (err) {
                Toast.makeText(ctx, "
                                An error occured: " + err, 1).show()
            }
        }
    }))
}

function showJumpBtn() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var _0x1350x16 = new LinearLayout(ctx);
                _0x1350x16.setOrientation(1);
                var _0x1350x125 = new Button(ctx);
                _0x1350x125.setText("
                                ");
                _0x1350x125.setTextColor(Color.rgb(0, 0, 0));
                _0x1350x125.setBackground(jbg);
                _0x1350x125.getBackground().setAlpha(100);
                _0x1350x125.setOnClickListener(new View.OnClickListener({
                    onClick: function(_0x1350x11b) {
                        setVelY(getPlayerEnt(), 0.4)
                    }
                }));
                _0x1350x16.addView(_0x1350x125);
                GUIj = new PopupWindow(_0x1350x16, dip2px(65), dip2px(65));
                GUIj.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                GUIj.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.BOTTOM, 110, 135)
            } catch (err) {
                Toast.makeText(ctx, "
                                An error occured: " + err, 1).show()
            }
        }
    }))
}

function showSaveBtn() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var _0x1350x16 = new LinearLayout(ctx);
                _0x1350x16.setOrientation(1);
                var _0x1350x127 = new Button(ctx);
                _0x1350x127.setText("
                                Save Reach point ");
                _0x1350x127.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                _0x1350x127.setTextSize(10);
                _0x1350x127.setBackground(nnbg);
                _0x1350x127.setPadding(10, 10, 10, 10);
                _0x1350x127.getBackground().setAlpha(100);
                _0x1350x127.setOnClickListener(new View.OnClickListener({
                    onClick: function(_0x1350x11b) {
                        ModPE.saveData("
                                hX ", parseInt(Player.getX()));
                        ModPE.saveData("
                                hY ", parseInt(Player.getY()));
                        ModPE.saveData("
                                hZ ", parseInt(Player.getZ()));
                        ModPE.saveData("
                                setHomeData ", 1);
                        _0x1350x127.setBackground(abg)
                    }
                }));
                _0x1350x16.addView(_0x1350x127);
                var _0x1350x128 = new Button(ctx);
                _0x1350x128.setText("
                                back to reach point ");
                _0x1350x128.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                _0x1350x128.setTextSize(10);
                _0x1350x128.setBackground(nbg);
                _0x1350x128.setPadding(10, 10, 10, 10);
                _0x1350x128.getBackground().setAlpha(100);
                _0x1350x128.setOnClickListener(new View.OnClickListener({
                    onClick: function(_0x1350x11b) {
                        Entity.setPosition(Player.getEntity(), parseInt(ModPE.readData("
                                hX ")) + 0.5, parseInt(ModPE.readData("
                                hY ")) + 1.5, parseInt(ModPE.readData("
                                hZ ")) + 0.5);
                        _0x1350x127.setBackground(abg)
                    }
                }));
                _0x1350x16.addView(_0x1350x128);
                GUIk = new PopupWindow(_0x1350x16, dip2px(90), dip2px(90));
                GUIk.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                GUIk.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 345, 0)
            } catch (err) {
                Toast.makeText(ctx, "
                                An error occured: " + err, 1).show()
            }
        }
    }))
}

function showairSwitch() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var _0x1350x16 = new LinearLayout(ctx);
                _0x1350x16.setOrientation(1);
                var _0x1350x12a = new android.widget.ToggleButton(ctx);
                _0x1350x12a.setText("
                                Aura ");
                _0x1350x12a.setTextOn("
                                Aura on ");
                _0x1350x12a.setTextOff("
                                Aura off ");
                _0x1350x12a.setTextSize(10);
                _0x1350x12a.setChecked(aired);
                _0x1350x12a.setTextSize(18);
                _0x1350x12a.setBackground(bg);
                _0x1350x12a.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                _0x1350x12a.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(_0x1350x11b) {
                        if (!aired) {
                            aired = true;
                            airss = true;
                            _0x1350x12a.setBackground(abg)
                        } else {
                            aired = false;
                            airss = false;
                            _0x1350x12a.setBackground(bg)
                        };
                        _0x1350x12a.setChecked(aired)
                    }
                }));
                _0x1350x16.addView(_0x1350x12a);
                GUIar = new PopupWindow(_0x1350x16, dip2px(90), dip2px(90));
                GUIar.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                GUIar.showAtLocation(ctx.getWindow().getDecorView(), Gravity.BOTTOM | Gravity.LEFT, 0, 0)
            } catch (err) {
                Toast.makeText(ctx, "
                                An error occured: " + err, 1).show()
            }
        }
    }))
}

function showMoveBtn() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var _0x1350x16 = new LinearLayout(ctx);
                _0x1350x16.setOrientation(1);
                var _0x1350x12c = new Button(ctx);
                _0x1350x12c.setText("
                                Up ");
                _0x1350x12c.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                _0x1350x12c.setTextSize(10);
                _0x1350x12c.setBackground(nbg);
                _0x1350x12c.setPadding(10, 10, 10, 10);
                _0x1350x12c.getBackground().setAlpha(100);
                _0x1350x12c.setOnClickListener(new View.OnClickListener({
                    onClick: function(_0x1350x11b) {
                        Entity.setPositionRelative(getPlayerEnt(), 0, +2.53, 0)
                    }
                }));
                _0x1350x16.addView(_0x1350x12c);
                var _0x1350x12d = new Button(ctx);
                _0x1350x12d.setText("
                                Down ");
                _0x1350x12d.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                _0x1350x12d.setTextSize(10);
                _0x1350x12d.setBackground(nbg);
                _0x1350x12d.setPadding(10, 10, 10, 10);
                _0x1350x12d.getBackground().setAlpha(100);
                _0x1350x12d.setOnClickListener(new View.OnClickListener({
                    onClick: function(_0x1350x11b) {
                        Entity.setPosition(getPlayerEnt(), getPlayerX(), getPlayerY() - 1.01, getPlayerZ())
                    }
                }));
                _0x1350x16.addView(_0x1350x12d);
                GUIe = new PopupWindow(_0x1350x16, dip2px(90), dip2px(90));
                GUIe.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                GUIe.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.CENTER, 0, 0)
            } catch (err) {
                Toast.makeText(ctx, "
                                An error occured: " + err, 1).show()
            }
        }
    }))
}

function showAimBtn() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var _0x1350x16 = new LinearLayout(ctx);
                _0x1350x16.setOrientation(1);
                var _0x1350x12f = new Button(ctx);
                _0x1350x12f.setText("
                                Aim - On ");
                _0x1350x12f.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                _0x1350x12f.setTextSize(10);
                _0x1350x12f.setBackground(nbg);
                _0x1350x12f.setPadding(10, 10, 10, 10);
                _0x1350x12f.getBackground().setAlpha(100);
                _0x1350x12f.setOnClickListener(new View.OnClickListener({
                    onClick: function(_0x1350x11b) {
                        aimbotss = true;
                        aimboted = true
                    }
                }));
                _0x1350x16.addView(_0x1350x12f);
                var _0x1350x130 = new Button(ctx);
                _0x1350x130.setText("
                                Aim - Off ");
                _0x1350x130.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                _0x1350x130.setTextSize(10);
                _0x1350x130.setBackground(nbg);
                _0x1350x130.setPadding(10, 10, 10, 10);
                _0x1350x130.getBackground().setAlpha(100);
                _0x1350x130.setOnClickListener(new View.OnClickListener({
                    onClick: function(_0x1350x11b) {
                        aimbotss = false;
                        aimboted = false
                    }
                }));
                _0x1350x16.addView(_0x1350x130);
                GUIv = new PopupWindow(_0x1350x16, dip2px(90), dip2px(90));
                GUIv.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                GUIv.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 0, 0)
            } catch (err) {
                Toast.makeText(ctx, "
                                An error occured: " + err, 1).show()
            }
        }
    }))
}

function showFovBtn() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var _0x1350x16 = new LinearLayout(ctx);
                _0x1350x16.setOrientation(1);
                var _0x1350x132 = new Button(ctx);
                _0x1350x132.setText("
                                FovOn ");
                _0x1350x132.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                _0x1350x132.setTextSize(10);
                _0x1350x132.setBackground(nbg);
                _0x1350x132.setPadding(10, 10, 10, 10);
                _0x1350x132.getBackground().setAlpha(100);
                _0x1350x132.setOnClickListener(new View.OnClickListener({
                    onClick: function(_0x1350x11b) {
                        ModPE.setFov(125)
                    }
                }));
                _0x1350x16.addView(_0x1350x132);
                var _0x1350x133 = new Button(ctx);
                _0x1350x133.setText("
                                FovOff ");
                _0x1350x133.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                _0x1350x133.setTextSize(10);
                _0x1350x133.setBackground(nbg);
                _0x1350x133.setPadding(10, 10, 10, 10);
                _0x1350x133.getBackground().setAlpha(100);
                _0x1350x133.setOnClickListener(new View.OnClickListener({
                    onClick: function(_0x1350x11b) {
                        ModPE.resetFov()
                    }
                }));
                _0x1350x16.addView(_0x1350x133);
                GUIe = new PopupWindow(_0x1350x16, dip2px(90), dip2px(90));
                GUIe.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                GUIe.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.BOTTOM, 0, 80)
            } catch (err) {
                Toast.makeText(ctx, "
                                An error occured: " + err, 1).show()
            }
        }
    }))
}

function showReachBtn() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var _0x1350x16 = new LinearLayout(ctx);
                _0x1350x16.setOrientation(1);
                var _0x1350x135 = new Button(ctx);
                _0x1350x135.setText("
                                Reach - On ");
                _0x1350x135.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                _0x1350x135.setTextSize(10);
                _0x1350x135.setBackground(nbg);
                _0x1350x135.setPadding(10, 10, 10, 10);
                _0x1350x135.getBackground().setAlpha(100);
                _0x1350x135.setOnClickListener(new View.OnClickListener({
                    onClick: function(_0x1350x11b) {
                        reachss = true;
                        reached = true
                    }
                }));
                _0x1350x16.addView(_0x1350x135);
                var _0x1350x136 = new Button(ctx);
                _0x1350x136.setText("
                                Reach - Off ");
                _0x1350x136.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                _0x1350x136.setTextSize(10);
                _0x1350x136.setBackground(nbg);
                _0x1350x136.setPadding(10, 10, 10, 10);
                _0x1350x136.getBackground().setAlpha(100);
                _0x1350x136.setOnClickListener(new View.OnClickListener({
                    onClick: function(_0x1350x11b) {
                        reachss = false;
                        reached = false;
                        Level.setGameMode(0)
                    }
                }));
                _0x1350x16.addView(_0x1350x136);
                GUIe = new PopupWindow(_0x1350x16, dip2px(90), dip2px(90));
                GUIe.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                GUIe.showAtLocation(ctx.getWindow().getDecorView(), Gravity.BOTTOM | Gravity.RIGHT, 0, 45)
            } catch (err) {
                Toast.makeText(ctx, "
                                An error occured: " + err, 1).show()
            }
        }
    }))
}

function showEscapeBtn() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var _0x1350x16 = new LinearLayout(ctx);
                _0x1350x16.setOrientation(1);
                var _0x1350x138 = new Button(ctx);
                _0x1350x138.setText("
                                Boost ");
                _0x1350x138.setTextColor(Color.rgb(255, 0, 255));
                _0x1350x138.setTextSize(10);
                _0x1350x138.setBackground(nbg);
                _0x1350x138.getBackground().setAlpha(150);
                _0x1350x138.setOnClickListener(new View.OnClickListener({
                    onClick: function(_0x1350x11b) {
                        var playerDir = [0, 0, 0];
                        toDirectionalVector(playerDir, (getYaw() + 90) * Math.PI / 180, getPitch() * Math.PI / 180 * -1);
                        setVelX(getPlayerEnt(), 6 * playerDir[0]);
                        setVelZ(getPlayerEnt(), 6 * playerDir[2])
                    }
                }));
                _0x1350x16.addView(_0x1350x138);
                GUIs = new PopupWindow(_0x1350x16, dip2px(65), dip2px(65));
                GUIs.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                GUIs.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.CENTER, 3, -20)
            } catch (err) {
                Toast.makeText(ctx, "
                                An error occured: " + err, 1).show()
            }
        }
    }))
}

function combatMenu() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var _0x1350x13b = new LinearLayout(ctx);
                var _0x1350x13c = new ScrollView(ctx);
                var _0x1350x13d = new LinearLayout(ctx);
                _0x1350x13b.setOrientation(1);
                _0x1350x13b.setBackground(bg);
                _0x1350x13b.getBackground().setAlpha(100);
                _0x1350x13d.setOrientation(1);
                _0x1350x13c.addView(_0x1350x13b);
                _0x1350x13d.addView(_0x1350x13c);
                var _0x1350x13e = new TextView(ctx);
                _0x1350x13e.setTextSize(20);
                _0x1350x13e.setText(" - \ | Combat\ | -");
                _0x1350x13e.setTextColor(android.graphics.Color.rgb(25, 25, 112));
                _0x1350x13e.setBackgroundDrawable(new ColorDrawable(android.graphics.Color.rgb(255, 0, 255)));
                _0x1350x13e.getBackground().setAlpha(150);
                _0x1350x13e.setGravity(Gravity.CENTER);
                _0x1350x13b.addView(_0x1350x13e);
                var ghosts = new Switch(ctx);
                ghosts.setText("
                                Switch - Aim ");
                ghosts.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                ghosts.setPadding(10, 3, 3, 3);
                ghosts.setTextSize(10);
                ghosts.setBackground(nnbg);
                ghosts.setChecked(ghosted);
                ghosts.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!ghosted) {
                            showAimBtn();
                            ghostss = true;
                            ghosted = true;
                            fctoast("
                                On ");
                            ghosts.setBackground(abg)
                        } else {
                            ghosts.setBackground(nnbg);
                            GUIv.dismiss();
                            fctoast("
                                Off ");
                            ghostss = false;
                            ghosted = false
                        };
                        ghosts.setChecked(ghosted)
                    }
                }));
                _0x1350x13b.addView(ghosts);
                var aimbots = new Switch(ctx);
                aimbots.setText("
                                AimAura ");
                aimbots.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                aimbots.setPadding(10, 3, 3, 3);
                aimbots.setTextSize(10);
                aimbots.setBackground(nnbg);
                aimbots.setChecked(aimboted);
                aimbots.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!aimboted) {
                            aimbotss = true;
                            aimboted = true;
                            fctoast("
                                On ");
                            aimbots.setBackground(abg)
                        } else {
                            aimbots.setBackground(nnbg);
                            fctoast("
                                Off ");
                            aimbotss = false;
                            aimboted = false
                        };
                        aimbots.setChecked(aimboted)
                    }
                }));
                _0x1350x13b.addView(aimbots);
                var antikbs = new Switch(ctx);
                antikbs.setText("
                                Velocity ");
                antikbs.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                antikbs.setPadding(10, 3, 3, 3);
                antikbs.setTextSize(10);
                antikbs.setBackground(nnbg);
                antikbs.setChecked(antikbed);
                antikbs.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!antikbed) {
                            antikbss = true;
                            antikbed = true;
                            fctoast("
                                On ");
                            antikbs.setBackground(abg)
                        } else {
                            fctoast("
                                Off ");
                            antikbs.setBackground(nnbg);
                            antikbss = false;
                            antikbed = false
                        };
                        antikbs.setChecked(antikbed)
                    }
                }));
                _0x1350x13b.addView(antikbs);
                var reachs = new Switch(ctx);
                reachs.setText("
                                Reach ");
                reachs.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                reachs.setPadding(10, 3, 3, 3);
                reachs.setTextSize(10);
                reachs.setBackground(nnbg);
                reachs.setChecked(reached);
                reachs.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!reached) {
                            reachss = true;
                            reached = true;
                            fctoast("
                                On ");
                            reachs.setBackground(abg)
                        } else {
                            fctoast("
                                Off ");
                            reachs.setBackground(nnbg);
                            reachss = false;
                            reached = false;
                            Level.setGameMode(0)
                        };
                        reachs.setChecked(reached)
                    }
                }));
                _0x1350x13b.addView(reachs);
                var jetpacks = new Switch(ctx);
                jetpacks.setText("
                                Switch - Reach ");
                jetpacks.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                jetpacks.setPadding(10, 3, 3, 3);
                jetpacks.setTextSize(10);
                jetpacks.setBackground(nnbg);
                jetpacks.setChecked(jetpacked);
                jetpacks.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!jetpacked) {
                            showReachBtn();
                            fctoast("
                                On ");
                            jetpackss = true;
                            jetpacked = true;
                            jetpacks.setBackground(abg)
                        } else {
                            jetpacks.setBackground(nnbg);
                            GUIe.dismiss();
                            fctoast("
                                Off ");
                            jetpackss = false;
                            jetpacked = false
                        };
                        jetpacks.setChecked(jetpacked)
                    }
                }));
                _0x1350x13b.addView(jetpacks);
                var reverss = new Switch(ctx);
                reverss.setText("
                                BlazeAura ");
                reverss.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                reverss.setTextSize(10);
                reverss.setPadding(10, 3, 3, 3);
                reverss.setBackground(nnbg);
                reverss.setChecked(reversed);
                reverss.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!reversed) {
                            reversss = true;
                            reversed = true;
                            fctoast("
                                on ");
                            reverss.setBackground(abg)
                        } else {
                            fctoast("
                                off ");
                            reverss.setBackground(nnbg);
                            reversss = false;
                            reversed = false
                        };
                        reverss.setChecked(reversed)
                    }
                }));
                _0x1350x13b.addView(reverss);
                var criticalss = new Switch(ctx);
                criticalss.setText("
                                Air - Aura ");
                criticalss.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                criticalss.setPadding(10, 3, 3, 3);
                criticalss.setTextSize(10);
                criticalss.setBackground(nnbg);
                criticalss.setChecked(criticalsed);
                criticalss.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!criticalsed) {
                            criticales = true;
                            criticalsed = true;
                            fctoast("
                                On ");
                            criticalss.setBackground(abg)
                        } else {
                            fctoast("
                                Off ");
                            criticalss.setBackground(nnbg);
                            criticales = false;
                            criticalsed = false
                        };
                        criticalss.setChecked(criticalsed)
                    }
                }));
                _0x1350x13b.addView(criticalss);
                var hb = new Switch(ctx);
                hb.setText("
                                KillAura ");
                hb.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                hb.setPadding(10, 3, 3, 3);
                hb.setTextSize(10);
                hb.setBackground(nnbg);
                hb.setChecked(hb2);
                hb.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!hb2) {
                            hb1 = true;
                            hb2 = true;
                            fctoast("
                                On ");
                            hb.setBackground(abg)
                        } else {
                            fctoast("
                                Off ");
                            hb.setBackground(nnbg);
                            hb1 = false;
                            hb2 = false
                        };
                        hb.setChecked(hb2)
                    }
                }));
                _0x1350x13b.addView(hb);
                var airs = new Switch(ctx);
                airs.setText("
                                Bind - Kill - Aura ");
                airs.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                airs.setPadding(10, 3, 3, 3);
                airs.setTextSize(10);
                airs.setChecked(aired);
                airs.setBackground(nnbg);
                airs.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!aired) {
                            showairSwitch();
                            aired = true;
                            fctoast("
                                On ");
                            airs.setBackground(abg)
                        } else {
                            fctoast("
                                Off ");
                            airs.setBackground(nnbg);
                            if (GUIar != null && GUIar.isShowing()) {
                                GUIar.dismiss()
                            };
                            aired = false;
                            aired = false
                        };
                        airs.setChecked(aired)
                    }
                }));
                _0x1350x13b.addView(airs);
                var infs = new Switch(ctx);
                infs.setText("
                                InfiniteReach\(InPvP Leet and Crazedacraft only\)
                                ");
                infs.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                infs.setPadding(10, 3, 3, 3);
                infs.setTextSize(10);
                infs.setBackground(nnbg);
                infs.getBackground().setAlpha(150);
                infs.setChecked(infed);
                infs.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!infed) {
                            infss = true;
                            infed = true;
                            fctoast("
                                On ");
                            infs.setBackground(abg)
                        } else {
                            fctoast("
                                Off ");
                            infs.setBackground(nnbg);
                            infss = false;
                            infed = false
                        };
                        infs.setChecked(infed)
                    }
                }));
                _0x1350x13b.addView(infs);
                var sideranges = new Switch(ctx);
                sideranges.setText("
                                TP save ");
                sideranges.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                sideranges.setPadding(10, 3, 3, 3);
                sideranges.setTextSize(10);
                sideranges.setBackground(nnbg);
                sideranges.setChecked(sideranged);
                sideranges.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!sideranged) {
                            siderangess = true;
                            sideranged = true;
                            fctoast("
                                On ");
                            sideranges.setBackground(abg);
                            showSaveBtn()
                        } else {
                            fctoast("
                                Off ");
                            sideranges.setBackground(nnbg);
                            GUIk.dismiss();
                            siderangess = false;
                            sideranged = false
                        };
                        sideranges.setChecked(sideranged)
                    }
                }));
                _0x1350x13b.addView(sideranges);
                var strafes = new Switch(ctx);
                strafes.setText("
                                AutoTP ");
                strafes.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                strafes.setPadding(10, 3, 3, 3);
                strafes.setTextSize(10);
                strafes.setBackground(nnbg);
                strafes.setChecked(strafed);
                strafes.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!strafed) {
                            strafess = true;
                            strafed = true;
                            fctoast("
                                On ");
                            strafes.setBackground(abg)
                        } else {
                            fctoast("
                                Off ");
                            strafes.setBackground(nnbg);
                            strafess = false;
                            strafed = false
                        };
                        strafes.setChecked(strafed)
                    }
                }));
                _0x1350x13b.addView(strafes);
                menu1 = new PopupWindow(_0x1350x13d, ctx.getWindowManager().getDefaultDisplay().getWidth() / 6, ctx.getWindowManager().getDefaultDisplay().getHeight());
                menu1.setAnimationStyle(android.R.style.Animation_InputMethod);
                menu1.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 0, 0)
            } catch (error) {
                Toast.makeText(ctx, "
                                Error: " + error, 1).show()
            }
        }
    }))
}

function miscMenu() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var _0x1350x13b = new LinearLayout(ctx);
                var _0x1350x13c = new ScrollView(ctx);
                var _0x1350x140 = new LinearLayout(ctx);
                _0x1350x13b.setOrientation(1);
                _0x1350x13b.setBackground(nbg);
                _0x1350x13b.getBackground().setAlpha(150);
                _0x1350x140.setOrientation(1);
                _0x1350x13c.addView(_0x1350x13b);
                _0x1350x140.addView(_0x1350x13c);
                var _0x1350x141 = new TextView(ctx);
                _0x1350x141.setTextSize(20);
                _0x1350x141.setText(" - \ | Motion\ | -");
                _0x1350x141.setTextColor(android.graphics.Color.rgb(25, 25, 112));
                _0x1350x141.setBackgroundDrawable(new ColorDrawable(android.graphics.Color.rgb(255, 0, 255)));
                _0x1350x141.getBackground().setAlpha(150);
                _0x1350x141.setGravity(Gravity.CENTER);
                _0x1350x13b.addView(_0x1350x141);
                var speeds = new Switch(ctx);
                speeds.setText("
                                Speed ");
                speeds.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                speeds.setPadding(10, 3, 3, 3);
                speeds.setTextSize(10);
                speeds.setBackground(nnbg);
                speeds.setChecked(speeded);
                speeds.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!speeded) {
                            speedss = true;
                            speeded = true;
                            fctoast("
                                On ");
                            speeds.setBackground(abg)
                        } else {
                            fctoast("
                                Off ");
                            speeds.setBackground(nnbg);
                            speedss = false;
                            speeded = false
                        };
                        speeds.setChecked(speeded)
                    }
                }));
                _0x1350x13b.addView(speeds);
                var bhop = new Switch(ctx);
                bhop.setText("
                                Bhop ");
                bhop.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                bhop.setPadding(10, 3, 3, 3);
                bhop.setTextSize(10);
                bhop.setBackground(nnbg);
                bhop.setChecked(bhoped);
                bhop.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!bhoped) {
                            bhopl = true;
                            bhoped = true;
                            fctoast("
                                On ");
                            bhop.setBackground(abg)
                        } else {
                            fctoast("
                                Off ");
                            bhop.setBackground(nnbg);
                            bhopl = false;
                            bhoped = false
                        };
                        bhop.setChecked(bhoped)
                    }
                }));
                _0x1350x13b.addView(bhop);
                var highjumps = new Switch(ctx);
                highjumps.setText("
                                HighJump ");
                highjumps.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                highjumps.setPadding(10, 3, 3, 3);
                highjumps.setTextSize(10);
                highjumps.setBackground(nnbg);
                highjumps.setChecked(highjumped);
                highjumps.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!highjumped) {
                            highjumpss = true;
                            highjumped = true;
                            fctoast("
                                On ");
                            highjumps.setBackground(abg)
                        } else {
                            fctoast("
                                Off ");
                            highjumps.setBackground(nnbg);
                            highjumpss = false;
                            highjumped = false
                        };
                        highjumps.setChecked(highjumped)
                    }
                }));
                _0x1350x13b.addView(highjumps);
                var grapples = new Switch(ctx);
                grapples.setText("
                                Follow - TP - Aura ");
                grapples.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                grapples.setPadding(9, 2, 2, 2);
                grapples.setTextSize(10);
                grapples.setBackground(nnbg);
                grapples.setChecked(grappleed);
                grapples.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!grappleed) {
                            grappless = true;
                            grappleed = true;
                            fctoast("
                                On ");
                            grapples.setBackground(abg)
                        } else {
                            fctoast("
                                Off ");
                            grapples.setBackground(nnbg);
                            grappless = false;
                            grappleed = false
                        };
                        grapples.setChecked(grappleed)
                    }
                }));
                _0x1350x13b.addView(grapples);
                var steps = new Switch(ctx);
                steps.setText("
                                Step ");
                steps.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                steps.setPadding(10, 3, 3, 3);
                steps.setTextSize(10);
                steps.setBackground(nnbg);
                steps.setChecked(steped);
                steps.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!steped) {
                            stepss = true;
                            steped = true;
                            fctoast("
                                On ");
                            steps.setBackground(abg)
                        } else {
                            fctoast("
                                Off ");
                            steps.setBackground(nnbg);
                            stepss = false;
                            steped = false
                        };
                        steps.setChecked(steped)
                    }
                }));
                _0x1350x13b.addView(steps);
                var tapjumps = new Switch(ctx);
                tapjumps.setText("
                                Tower ");
                tapjumps.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                tapjumps.setPadding(10, 3, 3, 3);
                tapjumps.setTextSize(10);
                tapjumps.setBackground(nnbg);
                tapjumps.setChecked(tapjumped);
                tapjumps.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!tapjumped) {
                            tapjumpss = true;
                            tapjumped = true;
                            fctoast("
                                On ");
                            tapjumps.setBackground(abg)
                        } else {
                            fctoast("
                                Off ");
                            tapjumps.setBackground(nnbg);
                            tapjumpss = false;
                            tapjumped = false
                        };
                        tapjumps.setChecked(tapjumped)
                    }
                }));
                _0x1350x13b.addView(tapjumps);
                var antigravitys = new Switch(ctx);
                antigravitys.setText("
                                UpGlide ");
                antigravitys.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                antigravitys.setPadding(10, 3, 3, 3);
                antigravitys.setTextSize(10);
                antigravitys.setBackground(nnbg);
                antigravitys.setChecked(antigravityed);
                antigravitys.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!antigravityed) {
                            antigravityss = true;
                            antigravityed = true;
                            fctoast("
                                On ");
                            antigravitys.setBackground(abg)
                        } else {
                            fctoast("
                                Off ");
                            antigravitys.setBackground(nnbg);
                            antigravityss = false;
                            antigravityed = false
                        };
                        antigravitys.setChecked(antigravityed)
                    }
                }));
                _0x1350x13b.addView(antigravitys);
                var ndglides = new Switch(ctx);
                ndglides.setText("
                                NoDownGlide ");
                ndglides.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                ndglides.setPadding(10, 3, 3, 3);
                ndglides.setTextSize(10);
                ndglides.setBackground(nnbg);
                ndglides.setChecked(ndglideed);
                ndglides.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!ndglideed) {
                            ndglidess = true;
                            ndglideed = true;
                            fctoast("
                                On ");
                            ndglides.setBackground(abg)
                        } else {
                            fctoast("
                                Off ");
                            ndglides.setBackground(nnbg);
                            ndglidess = false;
                            ndglideed = false
                        };
                        ndglides.setChecked(ndglideed)
                    }
                }));
                _0x1350x13b.addView(ndglides);
                var bglides = new Switch(ctx);
                bglides.setText("
                                BindNoDownGlide ");
                bglides.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                bglides.setPadding(10, 3, 3, 3);
                bglides.setTextSize(10);
                bglides.setBackground(nnbg);
                bglides.setChecked(bglideed);
                bglides.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!bglideed) {
                            showbglideSwitch();
                            bglideed = true;
                            bglides.setBackground(abg);
                            fctoast("
                                On ")
                        } else {
                            fctoast("
                                Off ");
                            bglides.setBackground(nnbg);
                            if (GUIbg != null && GUIbg.isShowing()) {
                                GUIbg.dismiss()
                            };
                            bglideed = false;
                            bglideed = false
                        };
                        bglides.setChecked(bglideed)
                    }
                }));
                _0x1350x13b.addView(bglides);
                var escapes = new Switch(ctx);
                escapes.setText("
                                Boost ");
                escapes.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                escapes.setPadding(10, 3, 3, 3);
                escapes.setTextSize(10);
                escapes.setBackground(nnbg);
                escapes.getBackground().setAlpha(150);
                escapes.setChecked(escapeed);
                escapes.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!escapeed) {
                            showEscapeBtn();
                            escapeed = true;
                            escapes.setBackground(abg);
                            fctoast("
                                On ")
                        } else {
                            fctoast("
                                Off ");
                            escapes.setBackground(nnbg);
                            GUIs.dismiss();
                            escapeed = false
                        };
                        escapes.setChecked(escapeed)
                    }
                }));
                _0x1350x13b.addView(escapes);
                var cspeeds = new Switch(ctx);
                cspeeds.setText("
                                CrouchGlide ");
                cspeeds.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                cspeeds.setPadding(10, 3, 3, 3);
                cspeeds.setTextSize(10);
                cspeeds.setBackground(nnbg);
                cspeeds.setChecked(cspeeded);
                cspeeds.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!cspeeded) {
                            cspeedss = true;
                            cspeeded = true;
                            cspeeds.setBackground(abg);
                            fctoast("
                                On ")
                        } else {
                            fctoast("
                                Off ");
                            cspeeds.setBackground(nnbg);
                            cspeedss = false;
                            cspeeded = false
                        };
                        cspeeds.setChecked(cspeeded)
                    }
                }));
                _0x1350x13b.addView(cspeeds);
                var js = new Switch(ctx);
                js.setText("
                                Jesus ");
                js.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                js.setPadding(10, 3, 3, 3);
                js.setTextSize(10);
                js.setBackground(nnbg);
                js.setChecked(js2);
                js.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!js2) {
                            js1 = true;
                            js2 = true;
                            js.setBackground(abg);
                            fctoast("
                                On ")
                        } else {
                            fctoast("
                                Off ");
                            js.setBackground(nnbg);
                            js1 = false;
                            js2 = false
                        };
                        js.setChecked(js2)
                    }
                }));
                _0x1350x13b.addView(js);
                var solidliquids = new Switch(ctx);
                solidliquids.setText("
                                Jesus - Solid ");
                solidliquids.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                solidliquids.setPadding(10, 3, 3, 3);
                solidliquids.setTextSize(10);
                solidliquids.setBackground(nnbg);
                solidliquids.setChecked(solidliquided);
                solidliquids.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!solidliquided) {
                            solidliquidss = true;
                            solidliquided = true;
                            solidliquids.setBackground(abg);
                            fctoast("
                                On ")
                        } else {
                            solidliquids.setBackground(nnbg);
                            fctoast("
                                Off ");
                            solidliquidss = false;
                            solidliquided = false;
                            Block.setShape(8, 0, 0, 0, 1, 0.4, 1);
                            Block.setShape(9, 0, 0, 0, 1, 0.4, 1);
                            Block.setShape(10, 0, 0, 0, 1, 0.4, 1);
                            Block.setShape(11, 0, 0, 0, 1, 0.4, 1)
                        };
                        solidliquids.setChecked(solidliquided)
                    }
                }));
                _0x1350x13b.addView(solidliquids);
                menu2 = new PopupWindow(_0x1350x140, ctx.getWindowManager().getDefaultDisplay().getWidth() / 6, ctx.getWindowManager().getDefaultDisplay().getHeight());
                menu2.setAnimationStyle(android.R.style.Animation_InputMethod);
                menu2.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 345, 0)
            } catch (error) {
                Toast.makeText(ctx, "
                                Scope Error: " + error, 1).show()
            }
        }
    }))
}

function playerMenu() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var _0x1350x13b = new LinearLayout(ctx);
                var _0x1350x13c = new ScrollView(ctx);
                var _0x1350x143 = new LinearLayout(ctx);
                _0x1350x13b.setOrientation(1);
                _0x1350x13b.setBackground(nbg);
                _0x1350x13b.getBackground().setAlpha(150);
                _0x1350x143.setOrientation(1);
                _0x1350x13c.addView(_0x1350x13b);
                _0x1350x143.addView(_0x1350x13c);
                var _0x1350x144 = new TextView(ctx);
                _0x1350x144.setTextSize(20);
                _0x1350x144.setText(" - \ | Player\ | -");
                _0x1350x144.setTextColor(android.graphics.Color.rgb(25, 25, 112));
                _0x1350x144.setBackgroundDrawable(new ColorDrawable(android.graphics.Color.rgb(255, 0, 255)));
                _0x1350x144.getBackground().setAlpha(150);
                _0x1350x144.setGravity(Gravity.CENTER);
                _0x1350x13b.addView(_0x1350x144);
                var betterattack = new Switch(ctx);
                betterattack.setText("
                                BetterAttack ");
                betterattack.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                betterattack.setPadding(10, 3, 3, 3);
                betterattack.setTextSize(10);
                betterattack.setBackground(nnbg);
                betterattack.setChecked(betters);
                betterattack.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!betters) {
                            betterss = true;
                            betters = true;
                            betterattack.setBackground(abg);
                            ModPE.setFov(125);
                            fctoast("
                                On ")
                        } else {
                            fctoast("
                                Off ");
                            betterattack.setBackground(nnbg);
                            ModPE.resetFov();
                            betterss = false;
                            betters = false
                        };
                        betterattack.setChecked(betters)
                    }
                }));
                _0x1350x13b.addView(betterattack);
                var fullbrights = new Switch(ctx);
                fullbrights.setText("
                                Nvision ");
                fullbrights.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                fullbrights.setPadding(10, 3, 3, 3);
                fullbrights.setTextSize(10);
                fullbrights.setBackground(nnbg);
                fullbrights.setChecked(fullbrighted);
                fullbrights.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!fullbrighted) {
                            fullbrightss = true;
                            fullbrighted = true;
                            clientMessage("
                                Break a block ");
                            fullbrights.setBackground(abg);
                            fctoast("
                                On ")
                        } else {
                            fctoast("
                                Off ");
                            fullbrights.setBackground(nnbg);
                            fullbrightss = false;
                            fullbrighted = false;
                            Block.setLightLevel(0, 0)
                        };
                        fullbrights.setChecked(fullbrighted)
                    }
                }));
                _0x1350x13b.addView(fullbrights);
                var _0x1350x145 = false;
                var _0x1350x146 = new android.widget.CheckBox(ctx);
                _0x1350x146.setText("
                                X - Ray ");
                _0x1350x146.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                _0x1350x146.setChecked(_0x1350x145);
                _0x1350x146.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(_0x1350x11b) {
                        if (!_0x1350x145) {
                            _0x1350x145 = true;
                            Block.setRenderLayer(1, 2);
                            Block.setRenderLayer(2, 2);
                            clientMessage("
                                Break a block ")
                        } else {
                            _0x1350x145 = false;
                            Block.setRenderLayer(2, 3);
                            Block.setRenderLayer(3, 3)
                        };
                        _0x1350x146.setChecked(_0x1350x145)
                    }
                }));
                _0x1350x13b.addView(_0x1350x146);
                var autowalks = new Switch(ctx);
                autowalks.setText("
                                Switch - Fov ");
                autowalks.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                autowalks.setPadding(10, 3, 3, 3);
                autowalks.setTextSize(10);
                autowalks.setBackground(nnbg);
                autowalks.setChecked(autowalked);
                autowalks.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!autowalked) {
                            showFovBtn();
                            autowalkss = true;
                            autowalked = true;
                            autowalks.setBackground(abg);
                            fctoast("
                                On ")
                        } else {
                            fctoast("
                                On ");
                            autowalks.setBackground(nnbg);
                            GUIe.dismiss();
                            autowalkss = false;
                            autowalked = false
                        };
                        autowalks.setChecked(autowalked)
                    }
                }));
                _0x1350x13b.addView(autowalks);
                var timers = new Switch(ctx);
                timers.setText("
                                Regen ");
                timers.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                timers.setPadding(10, 3, 3, 3);
                timers.setTextSize(10);
                timers.setBackground(nnbg);
                timers.setChecked(timered);
                timers.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!timered) {
                            timersss = true;
                            timered = true;
                            timers.setBackground(abg);
                            ModPE.setGameSpeed(99999999);
                            fctoast("
                                On ")
                        } else {
                            fctoast("
                                Off ");
                            timers.setBackground(nnbg);
                            ModPE.setGameSpeed(20);
                            timerss = false;
                            timered = false
                        };
                        timers.setChecked(timered)
                    }
                }));
                _0x1350x13b.addView(timers);
                var taptps = new Switch(ctx);
                taptps.setText("
                                TapTP ");
                taptps.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                taptps.setPadding(10, 3, 3, 3);
                taptps.setTextSize(10);
                taptps.setBackground(nnbg);
                taptps.setChecked(taptped);
                taptps.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!taptped) {
                            taptpss = true;
                            taptped = true;
                            taptps.setBackground(abg);
                            fctoast("
                                On ")
                        } else {
                            fctoast("
                                Off ");
                            taptps.setBackground(nnbg);
                            taptpss = false;
                            taptped = false
                        };
                        taptps.setChecked(taptped)
                    }
                }));
                _0x1350x13b.addView(taptps);
                var epss = new Switch(ctx);
                var _0x1350x2d = getPlayerEnt();
                epss.setText("
                                Esp ");
                epss.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                epss.setPadding(10, 3, 3, 3);
                epss.setTextSize(10);
                epss.setBackground(nnbg);
                epss.setChecked(essp);
                epss.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!espss) {
                            espss = true;
                            essp = true;
                            fctoast("
                                On ");
                            epss.setBackground(abg)
                        } else {
                            epss.setBackground(nnbg);
                            fctoast("
                                Off ");
                            espss = false;
                            essp = false
                        };
                        epss.setChecked(essp)
                    }
                }));
                _0x1350x13b.addView(epss);
                var backfaces = new Switch(ctx);
                backfaces.setText("
                                BackFace ");
                backfaces.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                backfaces.setPadding(10, 3, 3, 3);
                backfaces.setTextSize(10);
                backfaces.setBackground(nnbg);
                backfaces.setChecked(backfaceed);
                backfaces.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!backfaceed) {
                            backfacess = true;
                            backfaceed = true;
                            backfaces.setBackground(abg)
                        } else {
                            backfaces.setBackground(nnbg);
                            backfacess = false;
                            backfaceed = false
                        };
                        backfaces.setChecked(backfaceed)
                    }
                }));
                _0x1350x13b.addView(backfaces);
                var elevators = new Switch(ctx);
                elevators.setText("
                                Elevator ");
                elevators.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                elevators.setPadding(10, 3, 3, 3);
                elevators.setTextSize(10);
                elevators.setBackground(nnbg);
                elevators.setChecked(elevatored);
                elevators.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!elevatored) {
                            showMoveBtn();
                            elevatored = true;
                            elevators.setBackground(abg);
                            fctoast("
                                On ")
                        } else {
                            fctoast("
                                Off ");
                            elevators.setBackground(nnbg);
                            GUIe.dismiss();
                            elevatored = false
                        };
                        elevators.setChecked(elevatored)
                    }
                }));
                _0x1350x13b.addView(elevators);
                var fp = new Switch(ctx);
                fp.setText("
                                FastPlace\(Beta\)
                                ");
                fp.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                fp.setPadding(10, 3, 3, 3);
                fp.setTextSize(10);
                fp.setBackground(nnbg);
                fp.setChecked(fp2);
                fp.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!fp2) {
                            fp1 = true;
                            fp2 = true;
                            fp.setBackground(abg);
                            fctoast("
                                On ")
                        } else {
                            fctoast("
                                Off ");
                            fp.setBackground(nnbg);
                            fp1 = false;
                            fp2 = false
                        };
                        fp.setChecked(fp2)
                    }
                }));
                _0x1350x13b.addView(fp);
                menu3 = new PopupWindow(_0x1350x143, ctx.getWindowManager().getDefaultDisplay().getWidth() / 6, ctx.getWindowManager().getDefaultDisplay().getHeight());
                menu3.setAnimationStyle(android.R.style.Animation_InputMethod);
                menu3.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 690, 0)
            } catch (error) {
                Toast.makeText(ctx, "
                                CyberZ Error: " + error, 1).show()
            }
        }
    }))
}

function bypassMenu() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var _0x1350x13b = new LinearLayout(ctx);
                var _0x1350x13c = new ScrollView(ctx);
                var _0x1350x13d = new LinearLayout(ctx);
                _0x1350x13b.setOrientation(1);
                _0x1350x13b.setBackground(nbg);
                _0x1350x13b.getBackground().setAlpha(150);
                _0x1350x13d.setOrientation(1);
                _0x1350x13c.addView(_0x1350x13b);
                _0x1350x13d.addView(_0x1350x13c);
                var _0x1350x148 = new TextView(ctx);
                _0x1350x148.setTextSize(20);
                _0x1350x148.setText(" - \ | Bypass\ | -");
                _0x1350x148.setTextColor(android.graphics.Color.rgb(25, 25, 112));
                _0x1350x148.setBackgroundDrawable(new ColorDrawable(android.graphics.Color.rgb(255, 0, 255)));
                _0x1350x148.getBackground().setAlpha(150);
                _0x1350x148.setGravity(Gravity.CENTER);
                _0x1350x13b.addView(_0x1350x148);
                var lbsgspeeds = new Switch(ctx);
                lbsgspeeds.setText("
                                Lbsg - Speed ");
                lbsgspeeds.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                lbsgspeeds.setPadding(10, 3, 3, 3);
                lbsgspeeds.setTextSize(10);
                lbsgspeeds.setBackground(nnbg);
                lbsgspeeds.setChecked(lbsgspeeded);
                lbsgspeeds.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!lbsgspeeded) {
                            ModPE.setGameSpeed(40);
                            lbsgspeedss = true;
                            lbsgspeeded = true;
                            lbsgspeeds.setBackground(abg);
                            fctoast("
                                On ")
                        } else {
                            fctoast("
                                Off ");
                            lbsgspeeds.setBackground(nnbg);
                            ModPE.setGameSpeed(20);
                            lbsgspeedss = false;
                            lbsgspeeded = false
                        };
                        lbsgspeeds.setChecked(lbsgspeeded)
                    }
                }));
                _0x1350x13b.addView(lbsgspeeds);
                var bypassglides = new Switch(ctx);
                bypassglides.setText("
                                BypassGlide ");
                bypassglides.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                bypassglides.setPadding(10, 3, 3, 3);
                bypassglides.setTextSize(10);
                bypassglides.setBackground(nnbg);
                bypassglides.setChecked(bypassglideed);
                bypassglides.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!bypassglideed) {
                            bypassglidess = true;
                            bypassglideed = true;
                            bypassglides.setBackground(abg);
                            fctoast("
                                On ")
                        } else {
                            fctoast("
                                Off ");
                            bypassglides.setBackground(nnbg);
                            bypassglidess = false;
                            bypassglideed = false
                        };
                        bypassglides.setChecked(bypassglideed)
                    }
                }));
                _0x1350x13b.addView(bypassglides);
                var criticaltrailss = new Switch(ctx);
                criticaltrailss.setText("
                                BypassCrouchGlide\(works on lbsg inpvp mineplex\)
                                ");
                criticaltrailss.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                criticaltrailss.setPadding(10, 3, 3, 3);
                criticaltrailss.setTextSize(10);
                criticaltrailss.setBackground(nnbg);
                criticaltrailss.setChecked(criticaltrailsed);
                criticaltrailss.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                    onCheckedChanged: function() {
                        if (!criticaltrailsed) {
                            criticaltrailsss = true;
                            criticaltrailsed = true;
                            fctoast("
                                click on jump
                                if it stops ");
                            criticaltrailss.setBackground(abg);
                            fctoast("
                                On ")
                        } else {
                            fctoast("
                                Off ");
                            criticaltrailss.setBackground(nnbg);
                            criticaltrailsss = false;
                            criticaltrailsed = false
                        };
                        criticaltrailss.setChecked(criticaltrailsed)
                    }
                }));
                _0x1350x13b.addView(criticaltrailss);
                menu4 = new PopupWindow(_0x1350x13d, ctx.getWindowManager().getDefaultDisplay().getWidth() / 6, ctx.getWindowManager().getDefaultDisplay().getHeight());
                menu4.setAnimationStyle(android.R.style.Animation_InputMethod);
                menu4.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 1035, 0)
            } catch (error) {
                Toast.makeText(ctx, "
                                Scope Error: " + error, 1).show()
            }
        }
    }))
}

function exit() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var _0x1350x14a = new LinearLayout(ctx);
                var _0x1350x14b = new Button(ctx);
                _0x1350x14b.setText("
                                X ");
                _0x1350x14b.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                _0x1350x14b.setTextSize(10);
                _0x1350x14b.setBackground(xbg);
                _0x1350x14b.getBackground().setAlpha(150);
                _0x1350x14b.setOnClickListener(new View.OnClickListener({
                    onClick: function(_0x1350x11b) {
                        menu1.dismiss();
                        exitUI.dismiss();
                        showCombatBtn()
                    }
                }));
                _0x1350x14a.addView(_0x1350x14b);
                exitUI = new PopupWindow(_0x1350x14a, dip2px(40), dip2px(40));
                exitUI.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                exitUI.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.BOTTOM, 0, 0)
            } catch (exception) {
                Toast.makeText(ctx, exception, 1).show()
            }
        }
    }))
}

function exitbypass() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var _0x1350x14a = new LinearLayout(ctx);
                var _0x1350x14b = new Button(ctx);
                _0x1350x14b.setText("
                                X ");
                _0x1350x14b.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                _0x1350x14b.setTextSize(10);
                _0x1350x14b.setBackground(xbg);
                _0x1350x14b.getBackground().setAlpha(150);
                _0x1350x14b.setOnClickListener(new View.OnClickListener({
                    onClick: function(_0x1350x11b) {
                        exitbypassUI.dismiss();
                        menu4.dismiss();
                        showBypassBtn()
                    }
                }));
                _0x1350x14a.addView(_0x1350x14b);
                exitbypassUI = new PopupWindow(_0x1350x14a, dip2px(40), dip2px(40));
                exitbypassUI.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                exitbypassUI.setAnimationStyle(android.R.style.Animation_Translucent);
                exitbypassUI.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.BOTTOM, 0, 0)
            } catch (exception) {
                Toast.makeText(ctx, exception, 1).show()
            }
        }
    }))
}

function exitplayer() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var _0x1350x14a = new LinearLayout(ctx);
                var _0x1350x14b = new Button(ctx);
                _0x1350x14b.setText("
                                X ");
                _0x1350x14b.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                _0x1350x14b.setTextSize(10);
                _0x1350x14b.setBackground(xbg);
                _0x1350x14b.getBackground().setAlpha(150);
                _0x1350x14b.setOnClickListener(new View.OnClickListener({
                    onClick: function(_0x1350x11b) {
                        exitplayerUI.dismiss();
                        menu3.dismiss();
                        showPlayerBtn()
                    }
                }));
                _0x1350x14a.addView(_0x1350x14b);
                exitplayerUI = new PopupWindow(_0x1350x14a, dip2px(40), dip2px(40));
                exitplayerUI.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                exitplayerUI.setAnimationStyle(android.R.style.Animation_Translucent);
                exitplayerUI.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.BOTTOM, 0, 0)
            } catch (exception) {
                Toast.makeText(ctx, exception, 1).show()
            }
        }
    }))
}

function exitmisc() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var _0x1350x14a = new LinearLayout(ctx);
                var _0x1350x14b = new Button(ctx);
                _0x1350x14b.setText("
                                X ");
                _0x1350x14b.setTextColor(android.graphics.Color.rgb(255, 0, 255));
                _0x1350x14b.setTextSize(10);
                _0x1350x14b.setBackground(xbg);
                _0x1350x14b.getBackground().setAlpha(150);
                _0x1350x14b.setOnClickListener(new View.OnClickListener({
                    onClick: function(_0x1350x11b) {
                        exitmiscUI.dismiss();
                        menu2.dismiss();
                        showMotionBtn()
                    }
                }));
                _0x1350x14a.addView(_0x1350x14b);
                exitmiscUI = new PopupWindow(_0x1350x14a, dip2px(40), dip2px(40));
                exitmiscUI.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                exitmiscUI.setAnimationStyle(android.R.style.Animation_Translucent);
                exitmiscUI.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.BOTTOM, 0, 0)
            } catch (exception) {
                Toast.makeText(ctx, exception, 1).show()
            }
        }
    }))
}

function getNearestEntity(_0x1350x150) {
    var _0x1350x40 = Server.getAllPlayers();
    var _0x1350x151 = _0x1350x150;
    var _0x1350x152 = null;
    for (var _0x1350x25 = 0; _0x1350x25 < _0x1350x40.length; _0x1350x25++) {
        var _0x1350x41 = Entity.getX(_0x1350x40[_0x1350x25]) - getPlayerX();
        var _0x1350x42 = Entity.getY(_0x1350x40[_0x1350x25]) - getPlayerY();
        var _0x1350x43 = Entity.getZ(_0x1350x40[_0x1350x25]) - getPlayerZ();
        var _0x1350x153 = Math.sqrt(Math.pow(_0x1350x41, 2) + Math.pow(_0x1350x42, 2) + Math.pow(_0x1350x43, 2));
        if (_0x1350x153 < _0x1350x151 && _0x1350x153 > 0 && Entity.getHealth(_0x1350x40[_0x1350x25]) >= 1) {
            _0x1350x151 = _0x1350x153;
            _0x1350x152 = _0x1350x40[_0x1350x25]
        }
    };
    return _0x1350x152
}

function aimAtEnt(_0x1350x152, _0x1350x155) {
    if (_0x1350x152 != null) {
        var _0x1350x156 = Entity.getX(_0x1350x152) - getPlayerX();
        var _0x1350x157 = Entity.getY(_0x1350x152) - getPlayerY();
        var _0x1350x158 = Entity.getZ(_0x1350x152) - getPlayerZ();
        if (_0x1350x155 != null && posinstanceofArray) {
            _0x1350x156 = Entity.getX(_0x1350x152) - _0x1350x155[0];
            _0x1350x157 = Entity.getY(_0x1350x152) - _0x1350x155[1];
            _0x1350x158 = Entity.getZ(_0x1350x152) - _0x1350x155[2]
        };
        var _0x1350x159 = "
                                63 ";
        if (Entity.getEntityTypeId(_0x1350x152) != _0x1350x159) {
            _0x1350x157 += 0.5
        };
        var _0x1350x15a = Entity.getX(_0x1350x152) + 0.5;
        var _0x1350x15b = Entity.getY(_0x1350x152);
        var _0x1350x15c = Entity.getZ(_0x1350x152) + 0.5;
        var _0x1350x15d = Math.sqrt(_0x1350x156 * _0x1350x156 + _0x1350x157 * _0x1350x157 + _0x1350x158 * _0x1350x158);
        var _0x1350x157 = _0x1350x157 / _0x1350x15d;
        var _0x1350x15e = Math.asin(_0x1350x157);
        _0x1350x15e = _0x1350x15e * 180.0 / Math.PI;
        _0x1350x15e = -_0x1350x15e;
        var _0x1350x15f = -Math.atan2(_0x1350x15a - (Player.getX() + 0.5), _0x1350x15c - (Player.getZ() + 0.5)) * (180 / Math.PI);
        if (_0x1350x15e < 89 && _0x1350x15e > -89) {
            Entity.setRot(Player.getEntity(), _0x1350x15f, _0x1350x15e)
        }
    }
}

function entityHurtHook(_0x1350x161, _0x1350x162, _0x1350x163) {
    if (antikbss || (_0x1350x162 != fp)) {
        return;
        Entity.setImmobile(getPlayerEnt, true);
        this.attackTick = 2
    }
}

function toDirectionalVector(_0x1350x165, _0x1350x34, _0x1350x35) {
    _0x1350x165[0] = Math.cos(_0x1350x34) * Math.cos(_0x1350x35);
    _0x1350x165[1] = Math.sin(_0x1350x35);
    _0x1350x165[2] = Math.sin(_0x1350x34) * Math.cos(_0x1350x35)
}

function attackHook(_0x1350x161, _0x1350x162) {
    if (_0x1350x161 == Player.getEntity() && reversss) {
        Level.addParticle(ParticleType.flame, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 10);
        var _0x1350x167 = getYaw() + 80;
        var _0x1350x168 = getPitch() - 180;
        x = Math.cos(_0x1350x167 * (Math.PI / 180));
        y = Math.sin(_0x1350x168 * (Math.PI / 180));
        z = Math.sin(_0x1350x167 * (Math.PI / 180));
        setVelX(Player.getEntity(), x * +1);
        setVelY(Player.getEntity(), y * 8);
        setVelZ(Player.getEntity(), z * +1)
    };
    if (_0x1350x161 == Player.getEntity() && criticales && Entity.getHealth(_0x1350x162) > 0) {
        setVelY(getPlayerEnt(), 0.3);
        if (critTick >= 5) {
            critTick = 0
        }
    }
}

function useItem(_0x1350x41, _0x1350x42, _0x1350x43, _0x1350x16a, _0x1350x16b, _0x1350x16c, _0x1350x16d, _0x1350x16e) {
    if (tapjumpss) {
        setVelY(getPlayerEnt(), 0.4)
    };
    if (taptpss && getTile(_0x1350x41, _0x1350x42 + 1, _0x1350x43) == 0 && getTile(_0x1350x41, _0x1350x42 + 2, _0x1350x43) == 0) {
        Entity.setPosition(Player.getEntity(), _0x1350x41 + 0.5, _0x1350x42 + 2.63, _0x1350x43 + 0.5)
    };
    if (fp1) {
        setVelY(getPlayerEnt(), 0.031)
    }
}

function modTick() {
    var _0x1350x170 = Player.getX();
    var _0x1350x171 = Player.getY();
    var _0x1350x172 = Player.getZ();
    var _0x1350x41 = Player.getX();
    var _0x1350x42 = Player.getY();
    var _0x1350x43 = Player.getZ();
    if (antikbss || Entity.getHealth(getPlayerEnt()) <= 0) {
        if (this.tick > 0) {
            tick--
        } else {
            Entity.setImmobile(getPlayerEnt(), false)
        }; if (this.health > Entity.getHealth(getPlayerEnt())) {
            Entity.setImmobile(getPlayerEnt(), true);
            this.tick = 1
        };
        this.tick = 0;
        this.health = Entity.getHealth(getPlayerEnt())
    };
    if (ndglidess) {
        setVelY(getPlayerEnt(), 0.00000001)
    };
    if (bglidess) {
        setVelY(getPlayerEnt(), 0.00000001)
    };
    if (bypassglidess) {
        bgtick++;
        if (Entity.getVelY(getPlayerEnt()) < 1) {
            setVelY(Player.getEntity(), -0.2);
            if (bgtick == 8) {
                setVelY(getPlayerEnt(), -0.5);
                setVelX(getPlayerEnt(), 0);
                setVelZ(getPlayerEnt(), 0);
                bgtick = 0
            }
        }
    };
    if (reachss) {
        if (Level.getGameMode() == 0) {
            Level.setGameMode(1);
            Player.setCanFly(false)
        }
    };
    if (stepss && Utils.Player.isCollidedHorizontally()) {
        Entity.setPositionRelative(getPlayerEnt(), 0, 1.6, 0)
    };
    if (cstepss && Utils.Player.isCollidedHorizontally()) {
        setVelY(Player.getEntity(), 0.6)
    };
    if (speedss && Utils.Player.isOnGround()) {
        setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 1.4);
        setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 1.4)
    };
    if (zoomspeedss) {
        setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 1.1);
        setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 1.1)
    };
    if (antigravityss) {
        setVelY(getPlayerEnt(), 0.0600000009)
    };
    if (ndglidess) {
        setVelY(getPlayerEnt(), 0.00000001)
    };
    if (hb1) {
        _0x1350x152 = getNearestEntity(10);
        Entity.setCollisionSize(_0x1350x152, 10, 10)
    };
    if (airss) {
        _0x1350x152 = getNearestEntity(10);
        Entity.setCollisionSize(_0x1350x152, 10, 10)
    };
    if (infss) {
        var _0x1350x152 = getNearestEntity(1000);
        Entity.setCollisionSize(_0x1350x152, 40, 10)
    };
    if (fullbrightss) {
        Block.setLightLevel(0, 15)
    };
    if (strafess) {
        var _0x1350x173 = getNearestEntity(99999999999999999999999999999);
        ex = Player.getX();
        ey = Player.getY();
        ez = Player.getZ();
        if (_0x1350x173 != null && Entity.getEntityTypeId(_0x1350x173) == EntityType.PLAYER) {
            setPosition(getPlayerEnt(), Entity.getX(_0x1350x173), Entity.getY(_0x1350x173) + 2, Entity.getZ(_0x1350x173))
        } else {
            setPosition(getPlayerEnt(), ex, ey, ez)
        }
    };
    if (grappless) {
        var _0x1350x173 = getNearestEntity(5);
        if (_0x1350x173 != null && Entity.getEntityTypeId(_0x1350x173) == EntityType.PLAYER) {
            setPosition(getPlayerEnt(), Entity.getX(_0x1350x173) - 2, Entity.getY(_0x1350x173), Entity.getZ(_0x1350x173) + 3)
        }
    };
    if (mglide1) {
        setVelY(getPlayerEnt(), -0.001)
    };
    if (criticaltrailsss == true && Entity.isSneaking(Player.getEntity()) == true) {
        setVelY(getPlayerEnt(), -0.004);
        var playerDir = [0, 0, 0];
        toDirectionalVector(playerDir, (getYaw() + 90) * Math.PI / 180, getPitch() * Math.PI / 180 * -1);
        setVelX(getPlayerEnt(), 0.6 * playerDir[0]);
        setVelZ(getPlayerEnt(), 0.6 * playerDir[2])
    };
    if (highjumpss) {
        if (Entity.getVelY(getPlayerEnt()) < -0.1) {
            setVelY(getPlayerEnt(), -0.5)
        };
        if (Entity.getVelY(getPlayerEnt()) < 0.35 && Entity.getVelY(getPlayerEnt()) > 0.2 && can == 1 && canGetHP == 1) {
            setVelY(getPlayerEnt(), 0.6);
            can = 2;
            HP = Entity.getHealth(getPlayerEnt());
            canGetHP = 0
        };
        if (Entity.getVelY(getPlayerEnt()) > gravity && can == 2) {
            Player.setHealth(HP);
            canGetHP = 1;
            can = 0
        };
        if (Entity.getVelY(getPlayerEnt()) == gravity && can == 0) {
            Player.setHealth(HP);
            canGetHP = 1;
            can = 1
        }
    };
    if (autowalkss) {};
    if (js1 && Utils.Player.isInWater()) {
        setVelY(getPlayerEnt(), 0.1);
        setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 1.3);
        setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 1.3)
    };
    if (jetpackss) {};
    if (cspeedss == true && Entity.isSneaking(Player.getEntity()) == true) {
        setVelY(getPlayerEnt(), 0.00000001);
        var playerDir = [0, 0, 0];
        toDirectionalVector(playerDir, (getYaw() + 90) * Math.PI / 180, getPitch() * Math.PI / 180 * -1);
        setVelX(getPlayerEnt(), 0.6 * playerDir[0]);
        setVelZ(getPlayerEnt(), 0.6 * playerDir[2])
    }
}
if (dolphinss && Utils.Player.isInWater()) {
    setVelY(getPlayerEnt(), 0.00000001)
};
if (solidliquidss) {
    Block.setShape(8, null, null, null, null, null, null);
    Block.setShape(9, null, null, null, null, null, null);
    Block.setShape(10, null, null, null, null, null, null);
    Block.setShape(11, null, null, null, null, null, null);
    Block.defineBlock(8, "
                                Water ", [
        ["
                                still_water ", 0]
    ], 8, true, 4);
    Block.defineBlock(9, "
                                Stationary Water ", [
        ["
                                still_water ", 0]
    ], 9, true, 4);
    Block.defineBlock(10, "
                                Lava ", [
        ["
                                still_lava ", 0]
    ], 10, true, 4);
    Block.defineBlock(11, "
                                Stationary Lava ", [
        ["
                                still_lava ", 0]
    ], 11, true, 4)
};
if (ghostss == true && Entity.isSneaking(Player.getEntity()) == true) {
    setVelY(getPlayerEnt(), -0.004);
    var playerDir = [0, 0, 0];
    toDirectionalVector(playerDir, (getYaw() + 90) * Math.PI / 180, getPitch() * Math.PI / 180 * -1);
    setVelX(getPlayerEnt(), 0.6 * playerDir[0]);
    setVelZ(getPlayerEnt(), 0.6 * playerDir[2])
};
if (glidess) {
    setPosition(getPlayerEnt(), px, py + 0.19, pz);
    setVelY(getPlayerEnt(), -0.3)
};
if (criticales && critTick < 22) {
    critTick++;
    if (critTick == 13) {
        Entity.setPositionRelative(getPlayerEnt(), 0, 2, 0)
    };
    if (critTick == 12) {
        criticalTick = 12
    };
    if (criticalTick > 0) {
        criticalTick--;
        setVelY(getPlayerEnt(), -0.2)
    }
};

function rptask() {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            new android.os.Handler().postDelayed(new java.lang.Runnable({
                run: function() {
                    if (aimbotss) {
                        if (Level.getGameMode() == 1) {
                            _0x1350x152 = getNearestEntity(9)
                        } else {
                            _0x1350x152 = getNearestEntity(7)
                        }; if (_0x1350x152 != null && Player.getName(_0x1350x152) != "
                                " && Player.getName(_0x1350x152) != "
                                " && Player.getName(_0x1350x152) != "
                                ") {
                            aimAtEnt(_0x1350x152)
                        }
                    };
                    if (aimassistss) {
                        var _0x1350x152 = Player.getPointedEntity();
                        if (_0x1350x152 != null) {
                            aimAtEnt(_0x1350x152)
                        }
                    };
                    if (backfacess) {
                        var _0x1350x173 = getPlayerEnt();
                        var _0x1350x34 = Math.floor(Entity.getYaw(_0x1350x173));
                        var _0x1350x35 = Math.floor(Entity.getPitch(_0x1350x173));
                        if (_0x1350x35 <= 189) {
                            Entity.setRot(_0x1350x173, _0x1350x34, 192)
                        }
                    };
                    if (bowaimbotss) {
                        var _0x1350x152 = getNearestEntity(100);
                        if (_0x1350x152 != null && Player.getCarriedItem() == 261 && Player.getName(_0x1350x152) != "
                                " && Player.getName(_0x1350x152) != "
                                " && Player.getName(_0x1350x152) != "
                                " && isNotTeam(_0x1350x152)) {
                            bowAimAt(_0x1350x152);
                            ModPE.setFov(13)
                        } else {
                            ModPE.resetFov()
                        }
                    };
                    if (twerkss) {
                        tCounter++;
                        if (tCounter == 6) {
                            Entity.setSneaking(Player.getEntity(), 1)
                        };
                        if (tCounter == 11) {
                            Entity.setSneaking(Player.getEntity(), 0);
                            tCounter = 1
                        }
                    };
                    if (bhopl) {
                        if (Utils.Player.isOnGround()) {
                            setVelY(getPlayerEnt(), 0.4);
                            setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 1.1);
                            setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 1.0)
                        }
                    };
                    if (derpss) {
                        var _0x1350x173 = getPlayerEnt();
                        var _0x1350x34 = Math.floor(Entity.getYaw(_0x1350x173));
                        var _0x1350x35 = Math.floor(Entity.getPitch(_0x1350x173));
                        Entity.setRot(_0x1350x173, _0x1350x34 + 30, _0x1350x35)
                    };
                    nx = getPlayerX();
                    ny = getPlayerY();
                    nz = getPlayerZ();
                    eval(rptask())
                }
            }), 900 / 70)
        }
    }))
}
rptask()