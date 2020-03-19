ModPE.log(0);
ModPE.langEdit('menu.copyright', '§eXanerix §aV3.0');
ModPE.langEdit('menu.play', '§4HACK');
ModPE.langEdit('playscreen.new', '§bLets Hack On');
ModPE.langEdit('multiplayer.player.joined', '§aJoined the game To Hack');
ModPE.langEdit('externalServerScreen.addServer', '§cLets Hack');
print('Engine Loaded');
print('Random Messages Loaded');
print('Cleared Lag');
var ENGINE = 'Engine: Running';
var ENGINER = 'ENGINE';
var engineP = false;
var RUN = 'Run';

function showEngine() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var layout = new LinearLayout(ctx);
                layout.setOrientation(1);
                var _0x5b5ex7 = new Button(ctx);
                _0x5b5ex7.setText(ENGINER);
                _0x5b5ex7.setTextSize(11);
                _0x5b5ex7.setTextColor(android.graphics.Color.RED);
                _0x5b5ex7.setBackground(bg69);
                _0x5b5ex7.getBackground().setAlpha(150);
                _0x5b5ex7.setOnClickListener(new View.OnClickListener({
                    onClick: function(_0x5b5ex8) {
                        if (!engine) {
                            xan('ImportedLine(9180)');
                            Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), 'random.pop', 1, 1);
                            engine = true
                        } else {
                            xan('Engine: Status: Engine Running: Dismissed');
                            Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), 'random.pop', 1, 1);
                            engine = false
                        }
                    }
                }));
                _0x5b5ex7.setOnTouchListener(new android.view.View.OnTouchListener({
                    onTouch: function(view, _0x5b5exa) {
                        try {
                            if (!movingui77) {
                                return false
                            };
                            switch (_0x5b5exa.getAction()) {
                                case android.view.MotionEvent.ACTION_DOWN:
                                    dx = mPosX - _0x5b5exa.getRawX();
                                    dy = mPosY - _0x5b5exa.getRawY();
                                    break;
                                case android.view.MotionEvent.ACTION_MOVE:
                                    mPosX = (_0x5b5exa.getRawX() + dx);
                                    mPosY = (_0x5b5exa.getRawY() + dy);
                                    GUI77.update(mPosX, mPosY - 15, -1, -1);
                                    break;
                                case android.view.MotionEvent.ACTION_UP:
                                    ;
                                case android.view.MotionEvent.ACTION_CANCEL:
                                    movingui7 = false;
                                    break
                            }
                        } catch (e) {};
                        return true
                    }
                }));
                _0x5b5ex7.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function(_0x5b5exb, _0x5b5exc) {
                        movingui77 = true;
                        return true
                    }
                }));
                layout.addView(_0x5b5ex7);
                GUI77 = new PopupWindow(layout, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
                GUI77.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                GUI77.showAtLocation(ctx.getWindow().getDecorView(), Gravity.BOTTOM | Gravity.RIGHT, 0, 0)
            } catch (err) {
                Toast.makeText(ctx, 'An error occured: ' + err, 1).show()
            }
        }
    }))
}
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
var view = 0;
var Intent = android.content.Intent;
var Uri = android.net.Uri;
var esp;
var esps = false;
var esp = false;
var bg = new android.graphics.drawable.GradientDrawable();
bg.setColor(android.graphics.Color.TRANSPARENT);
bg.setStroke(10, android.graphics.Color.rgb(260, 260, 260));
bg.setCornerRadius(5);
var Utils = {
    File: {
        dragopDir: android.os.Environment.getExternalStorageDirectory() + '/DragOP/',
        getTextFromFile: function(_0x5b5ex22) {
            let _0x5b5ex23 = (new java.io.BufferedReader(new java.io.FileReader(_0x5b5ex22)));
            let _0x5b5ex24 = new java.lang.StringBuilder();
            let _0x5b5ex25;
            while ((_0x5b5ex25 = _0x5b5ex23.readLine()) != null) {
                _0x5b5ex24.append(_0x5b5ex25 + '
')
            };
            return _0x5b5ex24.toString()
        },
        saveTextToFile: function(_0x5b5ex22, _0x5b5ex26) {
            if (!_0x5b5ex22.exists()) {
                _0x5b5ex22.createNewFile()
            };
            let _0x5b5ex27 = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, _0x5b5ex26.length());
            for (let i = 0; i < _0x5b5ex26.length(); i++) {
                _0x5b5ex27[i] = _0x5b5ex26.charCodeAt(i)
            };
            let _0x5b5ex29 = new java.io.FileOutputStream(_0x5b5ex22);
            try {
                _0x5b5ex29.write(_0x5b5ex27)
            } finally {
                _0x5b5ex29.close()
            }
        }
    },
    Render: {
        getFloatBuffer: function(_0x5b5ex2a) {
            let _0x5b5ex2b = java.nio.ByteBuffer.allocateDirect(_0x5b5ex2a.length * 4);
            _0x5b5ex2b.order(java.nio.ByteOrder.nativeOrder());
            let _0x5b5ex2c = _0x5b5ex2b.asFloatBuffer();
            _0x5b5ex2c.put(_0x5b5ex2a);
            _0x5b5ex2c.position(0);
            return _0x5b5ex2c
        },
        getShortBuffer: function(_0x5b5ex2d) {
            let _0x5b5ex2b = java.nio.ByteBuffer.allocateDirect(_0x5b5ex2d.length * 2);
            _0x5b5ex2b.order(java.nio.ByteOrder.nativeOrder());
            let _0x5b5ex2e = _0x5b5ex2b.asShortBuffer();
            _0x5b5ex2e.put(_0x5b5ex2d);
            _0x5b5ex2e.position(0);
            return _0x5b5ex2e
        },
        renderer: null,
        glSurface: null,
        fov: 90,
        color: android.graphics.Color.argb(125, 255, 255, 0),
        initted: false,
        init: function() {
            if (Utils.Render.initted) {
                return
            };
            let _0x5b5ex2f = Utils.File.getTextFromFile(new java.io.File(android.os.Environment.getExternalStorageDirectory() + '/games/com.mojang/minecraftpe/', 'options.txt'));
            _0x5b5ex2f = _0x5b5ex2f.split('
');
            _0x5b5ex2f.forEach(function(entry) {
                let _0x5b5ex31 = entry.split(':');
                if (_0x5b5ex31[0] == 'gfx_field_of_view') {
                    Utils.Render.fov = _0x5b5ex31[1]
                }
            });
            this.renderer = new android.opengl.GLSurfaceView.Renderer({
                onSurfaceCreated: function(gl, _0x5b5ex33) {
                    let _0x5b5ex34 = javax.microedition.khronos.opengles.GL10;
                    gl.glClearColor(0, 0, 0, 0);
                    gl.glShadeModel(_0x5b5ex34.GL_SMOOTH);
                    gl.glClearDepthf(1.0);
                    gl.glDisable(_0x5b5ex34.GL_DITHER);
                    gl.glEnable(_0x5b5ex34.GL_DEPTH_TEST);
                    gl.glDepthFunc(_0x5b5ex34.GL_LEQUAL);
                    gl.glHint(_0x5b5ex34.GL_PERSPECTIVE_CORRECTION_HINT, _0x5b5ex34.GL_NICEST)
                },
                onSurfaceChanged: function(gl, _0x5b5ex35, _0x5b5ex36) {
                    let _0x5b5ex34 = javax.microedition.khronos.opengles.GL10;
                    gl.glMatrixMode(_0x5b5ex34.GL_PROJECTION);
                    gl.glLoadIdentity();
                    android.opengl.GLU.gluPerspective(gl, Utils.Render.fov, _0x5b5ex35 / _0x5b5ex36, 0.1, 100);
                    gl.glMatrixMode(_0x5b5ex34.GL_MODELVIEW);
                    gl.glLoadIdentity()
                },
                onDrawFrame: function(gl) {
                    let _0x5b5ex34 = javax.microedition.khronos.opengles.GL10;
                    gl.glClear(_0x5b5ex34.GL_COLOR_BUFFER_BIT | _0x5b5ex34.GL_DEPTH_BUFFER_BIT);
                    gl.glLoadIdentity();
                    if (esp == true && getPlayerEnt() != -1) {
                        try {
                            gl.glDisable(_0x5b5ex34.GL_LIGHTING);
                            let yaw = getYaw() % 360;
                            let pitch = getPitch() % 360;
                            let _0x5b5ex39 = getPlayerX();
                            let _0x5b5ex3a = getPlayerY() + 1;
                            let _0x5b5ex3b = getPlayerZ();
                            let _0x5b5ex3c = Math.sin(yaw / 180 * Math.PI);
                            let _0x5b5ex3d = Math.cos(yaw / 180 * Math.PI);
                            let _0x5b5ex3e = Math.sqrt(_0x5b5ex3c * _0x5b5ex3c + _0x5b5ex3d * _0x5b5ex3d) * Math.tan((pitch - 180) / 180 * Math.PI);
                            let _0x5b5ex3f = _0x5b5ex39 - _0x5b5ex3c;
                            let _0x5b5ex40 = _0x5b5ex3b + _0x5b5ex3d;
                            let _0x5b5ex41 = _0x5b5ex3a - _0x5b5ex3e;
                            android.opengl.GLU.gluLookAt(gl, _0x5b5ex39, _0x5b5ex3a, _0x5b5ex3b, _0x5b5ex3f, _0x5b5ex41, _0x5b5ex40, 0, 1.0, 0);
                            let _0x5b5ex42 = Entity.getAll();
                            let players = Server.getAllPlayers();
                            let _0x5b5ex44 = Block.getRenderType(54);
                            _0x5b5ex42.forEach(function(entry) {
                                if (entry != getPlayerEnt() && Entity.getEntityTypeId(entry) <= 64) {;
                                }; {
                                    Utils.Render.drawFlat(gl, Entity.getX(entry) - 0.60, Entity.getY(entry) - 0.60, Entity.getZ(entry) - 0.60, 1, 2, 1);
                                    color: android.graphics.Color.argb(125, 0, 255, 255);
                                }
                            });
                            players.forEach(function(entry) {
                                if (entry != getPlayerEnt() && Entity.getEntityTypeId(entry) == EntityType.PLAYER) {
                                    Utils.Render.drawFlat(gl, Entity.getX(entry) - 0.5, Entity.getY(entry) - 0.5, Entity.getZ(entry) - 0.5, 1, 2, 1)
                                }
                            });
                            players.forEach(function(entry) {
                                if (entry != getPlayerEnt() && Entity.getEntityTypeId(entry) == EntityType.PLAYER) {
                                    Utils.Render.drawLine(gl, lx, ly - 0.4, lz, Entity.getX(entry), Entity.getY(entry) + 1, Entity.getZ(entry))
                                }
                            });
                            onRender: function(gl) {
                                _0x5b5ex44.forEach(function(entry) {
                                    if (entry != getPlayerEnt() && Entity.getEntityType(entry) == EntityType.Chest) {
                                        Utils.Render.drawFlat(gl, Entity.getX(entry) - 0.5, Entity.getY(entry) - 0.5, Entity.getZ(entry) - 0.5, 1, 1, 1)
                                    }
                                })
                            }
                        } catch (e) {
                            clientMessage('RenderProblem: ' + e)
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
        drawFlat: function(gl, x, y, z, _0x5b5ex48, _0x5b5ex49, _0x5b5ex4a) {
            let _0x5b5ex34 = javax.microedition.khronos.opengles.GL10;
            let _0x5b5ex4b = new Array(_0x5b5ex48, _0x5b5ex49, _0x5b5ex4a);
            let _0x5b5ex4c = [0, 0, 0, _0x5b5ex4b[0], 0, 0, 0, 0, _0x5b5ex4b[2], _0x5b5ex4b[0], 0, _0x5b5ex4b[2], 0, _0x5b5ex4b[1], 0, _0x5b5ex4b[0], _0x5b5ex4b[1], 0, 0, _0x5b5ex4b[1], _0x5b5ex4b[2], _0x5b5ex4b[0], _0x5b5ex4b[1], _0x5b5ex4b[2]];
            let _0x5b5ex4d = Utils.Render.getFloatBuffer(_0x5b5ex4c);
            let _0x5b5ex4e = [0, 1, 0, 2, 0, 4, 3, 1, 3, 2, 3, 7, 5, 4, 5, 7, 5, 1, 6, 4, 6, 7, 6, 2];
            let _0x5b5ex4f = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            let _0x5b5ex50 = Utils.Render.getShortBuffer(_0x5b5ex4e);
            let _0x5b5ex51 = Utils.Render.getShortBuffer(_0x5b5ex4f);
            gl.glTranslatef(x, y, z);
            gl.glFrontFace(_0x5b5ex34.GL_CCW);
            gl.glEnable(_0x5b5ex34.GL_BLEND);
            gl.glBlendFunc(_0x5b5ex34.GL_SRC_ALPHA, _0x5b5ex34.GL_ONE_MINUS_SRC_ALPHA);
            gl.glLineWidth(4);
            gl.glColor4f(android.graphics.Color.red(Utils.Render.color) / 255, android.graphics.Color.green(Utils.Render.color) / 255, android.graphics.Color.blue(Utils.Render.color) / 255, 0.7);
            gl.glEnableClientState(_0x5b5ex34.GL_VERTEX_ARRAY);
            gl.glVertexPointer(3, _0x5b5ex34.GL_FLOAT, 0, _0x5b5ex4d);
            gl.glDrawElements(_0x5b5ex34.GL_LINES, _0x5b5ex4e.length, _0x5b5ex34.GL_UNSIGNED_SHORT, _0x5b5ex50);
            gl.glColor4f(android.graphics.Color.red(Utils.Render.color) / 255, android.graphics.Color.green(Utils.Render.color) / 255, android.graphics.Color.blue(Utils.Render.color) / 255, 0.2);
            gl.glDrawElements(_0x5b5ex34.GL_TRIANGLES, _0x5b5ex4f.length, _0x5b5ex34.GL_UNSIGNED_SHORT, _0x5b5ex51);
            gl.glDisable(_0x5b5ex34.GL_LINE_SMOOTH);
            gl.glTranslatef(-x, -y, -z)
        },
        drawLine: function(gl, x, y, z, _0x5b5ex52, _0x5b5ex53, _0x5b5ex54) {
            let _0x5b5ex34 = javax.microedition.khronos.opengles.GL10;
            let _0x5b5ex4b = new Array(_0x5b5ex52, _0x5b5ex53, _0x5b5ex54);
            let _0x5b5ex4c = [0, 0, 0, _0x5b5ex52 - x, _0x5b5ex53 - y, _0x5b5ex54 - z];
            let _0x5b5ex4d = Utils.Render.getFloatBuffer(_0x5b5ex4c);
            let _0x5b5ex55 = [0, 1];
            let _0x5b5ex56 = Utils.Render.getShortBuffer(_0x5b5ex55);
            gl.glTranslatef(x, y, z);
            gl.glEnable(_0x5b5ex34.GL_BLEND);
            gl.glDepthMask(false);
            gl.glBlendFunc(_0x5b5ex34.GL_SRC_ALPHA, _0x5b5ex34.GL_ONE_MINUS_SRC_ALPHA);
            gl.glLineWidth(4);
            gl.glColor4f(android.graphics.Color.red(Utils.Render.color) / 255, android.graphics.Color.green(Utils.Render.color) / 255, android.graphics.Color.blue(Utils.Render.color) / 255, 0.7);
            gl.glEnableClientState(_0x5b5ex34.GL_VERTEX_ARRAY);
            gl.glVertexPointer(3, _0x5b5ex34.GL_FLOAT, 0, _0x5b5ex4d);
            gl.glDrawElements(_0x5b5ex34.GL_LINES, _0x5b5ex55.length, _0x5b5ex34.GL_UNSIGNED_SHORT, _0x5b5ex56);
            gl.glTranslatef(-x, -y, -z);
            gl.glDepthMask(true);
            gl.glDisable(_0x5b5ex34.GL_LINE_SMOOTH)
        }
    },
    Block: {
        isLiquid: function(_0x5b5ex57) {
            if (_0x5b5ex57 >= 8 && _0x5b5ex57 <= 11) {
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
            var y = Entity.getY(getPlayerEnt());
            while (y > 1) {
                y -= 1
            };
            if ((Math.round(y * 100) >= 61 && Math.round(y * 100) <= 63) && getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())) != 0 && !Utils.Block.isLiquid(getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())))) {
                return true
            };
            if ((Math.round(y * 100) >= 11 && Math.round(y * 100) <= 13) && getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())) != 0 && !Utils.Block.isLiquid(getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())))) {
                return true
            } else {
                return false
            }
        },
        isOnGround: function() {
            var y = Entity.getY(getPlayerEnt());
            while (y > 1) {
                y -= 1
            };
            if ((Math.round(y * 100) >= 61 && Math.round(y * 100) <= 63) && getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())) != 0 && !Utils.Block.isLiquid(getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())))) {
                return true
            };
            if ((Math.round(y * 100) >= 11 && Math.round(y * 100) <= 13) && getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())) != 0 && !Utils.Block.isLiquid(getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())))) {
                return true
            } else {
                return false
            }
        },
        isCollidedHorizontally: function() {
            var x = Entity.getX(getPlayerEnt());
            var z = Entity.getZ(getPlayerEnt());
            var _0x5b5ex58 = Math.round(x - 0.5);
            var _0x5b5ex59 = Math.round(z - 0.5);
            while (x < 1) {
                x += 1
            };
            while (z < 1) {
                z += 1
            };
            while (x > 1) {
                x -= 1
            };
            while (z > 1) {
                z -= 1
            };
            if (Math.round(x * 100) == 31) {
                x -= 0.01
            };
            if (Math.round(z * 100) == 31) {
                z -= 0.01
            };
            if (Math.round(x * 100) == 69) {
                x += 0.01
            };
            if (Math.round(z * 100) == 69) {
                z += 0.01
            };
            if (Math.round(x * 100) == 30) {
                _0x5b5ex58--
            };
            if (Math.round(z * 100) == 30) {
                _0x5b5ex59--
            };
            if (Math.round(x * 100) == 70) {
                _0x5b5ex58++
            };
            if (Math.round(z * 100) == 70) {
                _0x5b5ex59++
            };
            if (getTile(_0x5b5ex58, Entity.getY(getPlayerEnt()), _0x5b5ex59) == 0 && getTile(_0x5b5ex58, Entity.getY(getPlayerEnt()) - 1, _0x5b5ex59) == 0) {
                return false
            };
            if (Block.getDestroyTime(getTile(_0x5b5ex58, Entity.getY(getPlayerEnt()) - 1, _0x5b5ex59)) <= 0.1 && Block.getDestroyTime(getTile(_0x5b5ex58, Entity.getY(getPlayerEnt()), _0x5b5ex59)) <= 0.1) {
                return false
            };
            if (Math.round(x * 100) == 30 || Math.round(x * 100) == 70) {
                return true
            };
            if (Math.round(z * 100) == 30 || Math.round(z * 100) == 70) {
                return true
            };
            return false
        }
    }
};

function screenChangeHook(_0x5b5ex5b) {
    if (_0x5b5ex5b.toString().indexOf('progress_screen') > -1) {
        Utils.Render.init()
    }
}
var GUI;
var menu;
var exitUI;
var VERSION = '';
var NAME = 'Xanerix 0.2';
var DEVELOPERS = 'ItzMax';
var p = getPlayerEnt();
var px = Player.getX();
var py = Player.getY();
var pz = Player.getZ();
var DEG_TO_RAD = Math.PI / 180;
var playerWalkSpeed = 0.3;
var SYM = '₰';
var XANE = 'Xan';
android.graphics.Color.YELLOW;
var RIX = 'erix v0.2';
android.graphics.Color.RED;
var VNAME = 'v0.2';
android.graphics.Color.RED;
var getRandomColor = '§a';
'§e';
'§b4';
'§9';
'§d';
var Rainbow = false;
var random = '§eMenu §7is §7in §7beta';
var random1 = '§7Menu §eis §7in §7beta';
var random2 = '§7Menu §7is §ein §7beta';
var random3 = '§7Menu §7is §7in §ebeta';
var gmSwitch;
var gmMaker = false;
var gmSwitchs;
var gmSwitched = false;
var gmSwitchh;
var gmMakerr = false;
var gmSwitchy;
var gmSwitched = false;
var gmSprint;
var gmMaked = false;
var gmSwitche;
var gmMakerrd = false;
var gmSwicht;
var gmSwitchd = false;
var aim;
var aimbot = false;
var aimed = false;
var grapples;
var grappless = false;
var grappleed = false;
var taptps;
var taptpss = false;
var taptped = false;
var snipers;
var sniperss = false;
var sniperhh = true;
var snipered = false;
var antikbs;
var antikbss = false;
var antikbed = false;
var ndglides;
var ndglidess = false;
var ndglideed = false;
var fff;
var fffee = false;
var aimbots;
var aimbotss = false;
var aimboted = false;
var reachs;
var reachss = false;
var reached = false;
var reachs;
var reachss = false;
var reached = false;
var i;
var i1 = false;
var i2 = false;
var g;
var g1 = false;
var g2 = false;
var a;
var a1 = false;
var a2 = false;
var eps;
var esps = false;
var esp = false;
var warni;
var warn = false;
var warnig = false;
var tpa;
var tpa1 = false;
var bhop = false;
var bhopl = false;
var bhoped = false;
var gl;
var gl1 = false;
var gl2 = false;
var mftick = 0;
var cstep;
var csteps = false;
var cstepss = false;
var lhealths;
var lhealthss = false;
var lhealthed = false;
var lhungers;
var lhungerss = false;
var lhungered = false;
var lcords;
var lcordss = false;
var lcorded = false;
var criticaltrailss;
var criticaltrailsss = false;
var criticaltrailsed = false;
var glides;
var glidess = false;
var glideed = false;
var cross;
var crosshair = false;
var glides1;
var glidess1 = false;
var glideed1 = false;
var pvp;
var pvp1 = false;
var pvp2 = false;
var elevators2;
var elevatoredd = false;
var elavators0;
var elavatordddsds = false;
var elevators12;
var elevatordddboi = false;
var elevators4;
var elevatoredddd = false;
var elevators5;
var elevatoreddddd = false;
var elevators6;
var elevatoredddddd = false;
var elevators7;
var elevatoreddddddd = false;
var bed;
var bedbreak = false;
var bedbreaker = false;
var steps;
var stepss = false;
var steped = false;
var anti;
var anti1 = false;
var anti2 = false;
var step;
var bstep = false;
var stepes = false;
var cspeeds;
var cspeedss = false;
var cspeeded = false;
var autosword;
var autoswords = false;
var autoswordss = false;
var criticalss;
var criticales = false;
var criticalsed = false;
var critTick = 0;
var criticalTick = 0;
var ilong;
var ilonge = false;
var ilongd = false;
var sboost = 1.1;
var jboost = 1.247;
var fboost = 0.84;
var normalspeed = 1.00;
var spam;
var spamming = false;
var spammed = false;
var er;
var er1 = false;
var er2 = false;
var ender;
var ender1 = false;
var ender2 = false;
var key = false;
var key1 = false;
var elevators = false;
var elevatored = false;
var elevator = false;
var elevatore = false;
var bar;
var espep = false;
var elev;
var elevd = false;
var eleva;
var elevatodddd = false;
var tapjumps;
var tapjumpss = false;
var tapjumped = false;
var antigravitys;
var antigravityss = false;
var antigravityed = false;
var autowalks;
var autowalkss = false;
var autowalked = false;
var sidea;
var sideaura = false;
var sideaurad = false;
var sword;
var speeds1 = false;
var speeds2 = false;
var derps;
var derpss = false;
var derped = false;
var pc;
var pc1 = false;
var pc2 = false;
var csteps;
var cstepss = false;
var csteped = false;
var adv = android.graphics.Color.YELLOW;
var twerks;
var twerkss = false;
var twerked = false;
var tCounter = 0;
var criticalss;
var criticales = false;
var criticalsed = false;
var critTick = 0;
var criticalTick = 0;
var byglide;
var byglidee = false;
var byglidess = false;
var bgtick = 0;
var ir;
var ir1 = false;
var ir2 = false;
var ir3 = null;
var backfaces;
var backfacess = false;
var backfaceed = false;
var elevators = false;
var elevatored = false;
var elevatorss = false;
var elevatoredd = false;
var elevatorsss = false;
var elevatoreddd = false;
var pvp;
var pvps = false;
var pvped = false;
var warn;
var warn1 = false;
var warn2 = false;
var menuf;
var menur = false;
var lg;
var lg1 = false;
var lg2 = false;
var time;
var timess = false;
var timed = false;
var ride;
var rides = false;
var rided = false;
var game;
var game1 = false;
var game2 = false;
var time;
var time1 = false;
var time2 = false;
var blong;
var bhopss = false;
var blonged = false;
var gmode;
var gmodess = false;
var gmoded = false;
var barp;
var followb1 = false;
var flight;
var ffb = false;
var ffbed = false;
var eat;
var feat1 = false;
var feat2 = false;
var aimm;
var faimf = false;
var faimf = false;
var bow;
var zbow1 = false;
var zbow2 = false;
var follow;
var follow1 = false;
var follow2 = false;
var cderp;
var cderps = false;
var cderped = false;
var speed;
var speed1 = false;
var speed2 = false;
var fbright;
var fbrightss = false;
var fbrighted = false;
var fladder;
var fladder1 = false;
var fladder2 = false;
var ladderspeed = 1;
var afk;
var antiafk1 = false;
var antiafk2 = false;
var zoomed = false;
var hjump;
var hjumpss = false;
var hjumped = false;
var asword;
var sworda = false;
var swordd = false;
var hpot;
var apot = false;
var apoted = false;
var imine;
var iminss = false;
var imined = false;
var toggled = false;
var swalk;
var swalk1 = false;
var swalk2 = false;
var scaff;
var scaff1 = false;
var scaff2 = false;
var jj;
var jj1 = false;
var jj2 = false;
var gg;
var gg1 = false;
var gg2 = false;
var lspeed;
var lspeed1 = false;
var lspeed2 = false;
var hovera;
var hoveraa = false;
var hoverr = false;
var hoverar = null;
var bow;
var zbow1 = false;
var zbow2 = false;
var mspeed;
var mspeed1 = false;
var mspeed2 = false;
var clear;
var clear1 = false;
var clear2 = false;
var ss;
var ss1 = false;
var ss2 = false;
var ff;
var ff1 = false;
var ff2 = false;
var sf;
var sf1 = false;
var sf2 = false;
var ver;
var ver1 = false;
var ver2 = false;
var lbsg;
var lbsg1 = false;
var lbsg2 = false;
var mftick = 0;
var sh;
var sh1 = false;
var sh2 = false;
var bff;
var bf1 = false;
var bf2 = false;
var ffo;
var ffo1 = false;
var ffo2 = false;
var air;
var air1 = false;
var air2 = false;
var hb;
var hb1 = false;
var hb2 = false;
var menut;
var menui = false;
var ir;
var ir1 = false;
var ir2 = false;
var bhit;
var bhit1 = false;
var bhit2 = false;
var ender;
var enderr = false;
var enderrd = false;
var bff;
var bf1 = false;
var bf2 = false;
var wall;
var wall1 = false;
var wall2 = false;
var tb;
var tb1 = false;
var tb2 = false;
var zoom;
var zoomeed = false;
var arp;
var arp1 = false;
var arp2 = false;
var menu;
var menux = false;
var ab;
var ab1 = false;
var ab2 = false;
var at;
var at1 = false;
var at2 = false;
var hit;
var hit1 = false;
var hit2 = false;
var js;
var js1 = false;
var js2 = false;
var fa;
var fa1 = false;
var fa2 = false;
var wscaff;
var wscaff1 = false;
var wscaff2 = false;
var walk;
var bwalk1 = false;
var bwalk2 = false;
var sidet;
var sidee = false;
var sider = false;
var fastbridge;
var fastbridged = false;
var fastbridgedd = false;
var wood;
var wood1 = false;
var wood2 = false;
var stone;
var stone1 = false;
var stone2 = false;
var fsneak;
var fsneak1 = false;
var fsneak2 = false;
var gold;
var gold1 = false;
var gold2 = false;
var diamond;
var diamond1 = false;
var diamond2 = false;
var ar;
var are = false;
var ard = false;
var ss;
var ssa = false;
var ssad = false;
var gs;
var gsa = false;
var gsad = false;
var ds;
var dsa = false;
var dsad = false;
var money;
var money1 = false;
var money2 = false;
var sur;
var sur1 = false;
var sur2 = false;
var surv;
var surv1 = false;
var surv2 = false;
var dx = 0;
var dy = 0;
var dx2 = 0;
var dy2 = 0;
var mPosX2 = 0;
var mPosY2 = 0;
var dx232 = 0;
var dy232 = 0;
var mPosX232 = 285 + 285;
var mPosY232 = 0;
var dx23 = 0;
var dy23 = 0;
var mPosX23 = 285;
var mPosY23 = 0;
var dxf = 0;
var dyf = 0;
var mPosXf = 0;
var mPosYf = 0;
var dxj = 0;
var dyj = 0;
var mPosXj = 0;
var mPosYj = 0;
var moving = false;
var movingui = false;
var movingui2 = false;
var movingui3 = false;
var movingui4 = false;
var movingui5 = false;
var movingui6 = false;
var movinguie = false;
var movinguii = false;
var movingui0 = false;
var movinguin = false;
var movingui80 = false;
var movingui66 = false;
var movingui666 = false;
var movingui090 = false;
var movingui0800 = false;
var movingui77 = false;
var movingui660 = false;
var movinguiS = false;
var movinguiSS = false;
var movinguib = false;
var movinguiLIQ = false;
mainMenu6 = false;
mainMenu39 = false;
mainMenu69 = false;
mainMenu3 = false;
mainMenu396 = false;
mainMenu006 = false;
mainMenu0010 = false;
mainMenu013 = false;
mainMenu00 = false;
mainBtn = false;
menu099 = false;
menu009 = false;
mainMenu46 = false;
mainMenu66 = false;
mainMenu666 = false;
mainMenuk = false;
ADVANCE = false;
mainExploit = false;
var hidee = false;
var antiad2 = false;
var jumpp = false;
var beta1 = false;
var tapboost = false;
var main = false;
var maino = false;
var maini = false;
var textview = false;
var fastb2 = false;
var ghand = false;
var ghandd = false;
var nofall1 = false;
var nofall2 = false;
var instantnofall = true;
var delaynofall = false;
var hitaim = false;
var crosshair = false;
var guii = false;
var speeed = false;
var guiii = false;
var engine = false;
var nobob = false;
var packs = false;
var rsteps = false;
var hoverau = false;
var hoverr = null;
var hitaim = false;
var third = false;
var killaura = false;
var highjump = false;
var safewalk = false;
var fastswords = false;
var fastsword = false;
var fastswor = false;
var fastswo = false;
var fastsw = false;
var ghostt = false;
var xray = false;
var waterman = false;
var fastmine = false;
var destroy = false;
var fastladder = false;
var sett = false;
var crouchtp = false;
var boosti = false;
var boxx = false;
var fname = false;
var combat = android.graphics.Color.YELLOW;
var keybind = android.graphics.Color.YELLOW;
var movement = android.graphics.Color.YELLOW;
var player = android.graphics.Color.YELLOW;
var other = android.graphics.Color.YELLOW;
var range = false;
var range1 = false;
var rag = false;
var range2 = false;
var tag = false;
var range3 = false;
var pag = false;
var range4 = false;
var lag = false;
var liquidfyy = false;
var crunch = false;
var lair = false;
var mkilla = false;
var betterhit = false;
var jumphit = false;
var hitaim = false;
var opaura = false;
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
var bg69 = new android.graphics.drawable.GradientDrawable();
bg69.setColor(android.graphics.Color.TRANSPARENT);
bg69.setStroke(4, android.graphics.Color.TRANSPARENT);
bg69.setCornerRadius(2);
var bg = new android.graphics.drawable.GradientDrawable();
bg.setColor(android.graphics.Color.BLACK);
bg.setStroke(4, android.graphics.Color.TRANSPARENT);
bg.setCornerRadius(2);
var bg9 = new android.graphics.drawable.GradientDrawable();
bg9.setColor(android.graphics.Color.TRANSPARENT);
bg9.setStroke(4, android.graphics.Color.CYAN);
bg9.setCornerRadius(2);
var fg = new android.graphics.drawable.GradientDrawable();
fg.setColor(android.graphics.Color.BLACK);
fg.setStroke(4, android.graphics.Color.TRANSPARENT);
fg.setCornerRadius(2);
var xbg = new android.graphics.drawable.GradientDrawable();
xbg.setColor(android.graphics.Color.WHITE);
xbg.setStroke(4, android.graphics.Color.WHITE);
xbg.setCornerRadius(2);
var bg2 = new android.graphics.drawable.GradientDrawable();
bg2.setColor(android.graphics.Color.BLACK);
bg2.setStroke(4, android.graphics.Color.BLUE);
bg2.setCornerRadius(2);
var rpg = new android.graphics.drawable.GradientDrawable();
rpg.setColor(android.graphics.Color.BLACK);
rpg.setStroke(4, android.graphics.Color.YELLOW);
rpg.setCornerRadius(2);
var bg03 = new android.graphics.drawable.GradientDrawable();
bg03.setColor(android.graphics.Color.TRANSPARENT);
bg03.setStroke(4, android.graphics.Color.YELLOW);
bg03.setCornerRadius(2);
var bg1 = new android.graphics.drawable.GradientDrawable();
bg1.setColor(android.graphics.Color.TRANSPARENT);
bg1.setStroke(4, android.graphics.Color.BLACK);
bg1.setCornerRadius(2);
var bg5 = new android.graphics.drawable.GradientDrawable();
bg5.setColor(android.graphics.Color.BLACK);
bg5.setStroke(4, android.graphics.Color.YELLOW);
bg5.setCornerRadius(2);
var bg4 = new android.graphics.drawable.GradientDrawable();
bg4.setColor(android.graphics.Color.BLACK);
bg4.setStroke(4, android.graphics.Color.TRANSPARENT);
bg4.setCornerRadius(2);
var meb = new android.graphics.drawable.GradientDrawable();
meb.setColor(android.graphics.Color.BLACK);
meb.setStroke(4, android.graphics.Color.YELLOW);
meb.setCornerRadius(2);
var DKGRAY = new android.graphics.drawable.GradientDrawable();
DKGRAY.setColor(android.graphics.Color.BLACK);
DKGRAY.setStroke(4, android.graphics.Color.RED);
DKGRAY.setCornerRadius(2);
var DKBLACK = new android.graphics.drawable.GradientDrawable();
DKBLACK.setColor(android.graphics.Color.TRANSPARENT);
DKBLACK.setStroke(4, android.graphics.Color.BLACK);
DKBLACK.setCornerRadius(2);
var btbg = new android.graphics.drawable.GradientDrawable();
btbg.setColor(Color.YELLOW);
btbg.setAlpha(100);
btbg.setStroke(4, android.graphics.Color.YELLOW);
var btbg2 = new android.graphics.drawable.GradientDrawable();
btbg2.setColor(Color.TRANSPARENT);
btbg2.setAlpha(100);
btbg2.setStroke(4, android.graphics.Color.TRANSPARENT);
var bttheme = new android.graphics.drawable.GradientDrawable();
bttheme.setColor(android.graphics.Color.WHITE);
bttheme.setStroke(7, android.graphics.Color.RED);
bttheme.setCornerRadius(10);
var maintheme = bttheme;
var mainbt = btbg;
var mainbt2 = btbg2;
var vres = new android.graphics.drawable.GradientDrawable();
vres.setColor(Color.YELLOW);
btbg.setAlpha(100);
btbg.setStroke(4, android.graphics.Color.YELLOW);
var bres = new android.graphics.drawable.GradientDrawable();
bres.setColor(Color.TRANSPARENT);
btbg2.setAlpha(100);
btbg2.setStroke(4, android.graphics.Color.TRANSPARENT);
var cres = new android.graphics.drawable.GradientDrawable();
cres.setColor(android.graphics.Color.WHITE);
bttheme.setStroke(7, android.graphics.Color.RED);
bttheme.setCornerRadius(10);
var green = new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125, 0, 125, 0));
var cyan = new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125, 0, 255, 255));
var yellow = new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125, 255, 255, 0));
var red = new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125, 125, 0, 0));
var black = new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(140, 0, 0, 0));
var pink = new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125, 120, 0, 82));
var bg01 = new android.graphics.drawable.GradientDrawable();
bg01.setColor(android.graphics.Color.TRANSPARENT);
bg01.setStroke(4, android.graphics.Color.TRANSPARENT);
bg01.setCornerRadius(2);
var bg02 = new android.graphics.drawable.GradientDrawable();
bg02.setColor(android.graphics.Color.BLACK);
bg02.setStroke(4, android.graphics.Color.YELLOW);
bg02.setCornerRadius(2);
var bg03 = new android.graphics.drawable.GradientDrawable();
bg03.setColor(android.graphics.Color.BLACK);
bg03.setStroke(4, android.graphics.Color.YELLOW);
bg03.setCornerRadius(2);
var bg04 = new android.graphics.drawable.GradientDrawable();
bg04.setColor(android.graphics.Color.BLACK);
bg04.setStroke(4, android.graphics.Color.YELLOW);
bg04.setCornerRadius(2);
var bg3 = new android.graphics.drawable.GradientDrawable();
bg3.setColor(android.graphics.Color.TRANSPARENT);
bg3.setStroke(4, android.graphics.Color.TRANSPARENT);
bg3.setCornerRadius(2);
var xan4 = new android.graphics.drawable.GradientDrawable();
xan4.setColor(android.graphics.Color.BLACK);
xan4.setStroke(4, android.graphics.Color.YELLOW);
xan4.setCornerRadius(2);
var bg1 = new android.graphics.drawable.GradientDrawable();
bg1.setColor(android.graphics.Color.TRANSPARENT);
bg1.setStroke(4, android.graphics.Color.YELLOW);
bg1.setCornerRadius(2);

function arrayMenu() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                layout088 = new LinearLayout(ctx);
                layout088.setOrientation(1);
                bg3 = new android.graphics.drawable.GradientDrawable();
                bg3.setColor(android.graphics.Color.argb(0, 20, 20, 20));
                bg3.setCornerRadius(dip2px(3));
                opa = new TextView(ctx);
                opa.setTextColor(android.graphics.Color.YELLOW);
                opa.setBackground(bg3);
                opa.setText('OpAura');
                hita = new TextView(ctx);
                hita.setTextColor(android.graphics.Color.YELLOW);
                hita.setBackground(bg3);
                hita.setText('Aimassist');
                jhit = new TextView(ctx);
                jhit.setTextColor(android.graphics.Color.YELLOW);
                jhit.setBackground(bg3);
                jhit.setText('JumpHit');
                betterHit = new TextView(ctx);
                betterHit.setTextColor(android.graphics.Color.YELLOW);
                betterHit.setBackground(bg3);
                betterHit.setText('BetterHitter');
                bhop = new TextView(ctx);
                bhop.setTextColor(android.graphics.Color.YELLOW);
                bhop.setBackground(bg3);
                bhop.setText('BunnyHop');
                crosshair = new TextView(ctx);
                crosshair.setTextColor(android.graphics.Color.YELLOW);
                crosshair.setBackground(bg3);
                crosshair.setText('CrossHair [Toggle]');
                liqq = new TextView(ctx);
                liqq.setTextColor(android.graphics.Color.YELLOW);
                liqq.setBackground(bg3);
                liqq.setText('Escape [Toggle]');
                dol = new TextView(ctx);
                dol.setTextColor(android.graphics.Color.YELLOW);
                dol.setBackground(bg3);
                dol.setText('Dolphin');
                flarename = new TextView(ctx);
                flarename.setTextColor(android.graphics.Color.YELLOW);
                flarename.setBackground(bg3);
                flarename.setText('FlareName');
                boxe = new TextView(ctx);
                boxe.setTextColor(android.graphics.Color.YELLOW);
                boxe.setBackground(bg3);
                boxe.setText('Box');
                boost = new TextView(ctx);
                boost.setTextColor(android.graphics.Color.YELLOW);
                boost.setBackground(bg3);
                boost.setText('Boost [Toggle]');
                gflight = new TextView(ctx);
                gflight.setTextColor(android.graphics.Color.YELLOW);
                gflight.setBackground(bg3);
                gflight.setText('Glide [Flight]');
                ladder = new TextView(ctx);
                ladder.setTextColor(android.graphics.Color.YELLOW);
                ladder.setBackground(bg3);
                ladder.setText('CrouchTP [Smooth]');
                des = new TextView(ctx);
                des.setTextColor(android.graphics.Color.YELLOW);
                des.setBackground(bg3);
                des.setText('AutoBreak');
                mine = new TextView(ctx);
                mine.setTextColor(android.graphics.Color.YELLOW);
                mine.setBackground(bg3);
                mine.setText('FastMine');
                man = new TextView(ctx);
                man.setTextColor(android.graphics.Color.YELLOW);
                man.setBackground(bg3);
                man.setText('WaterMan');
                bhit = new TextView(ctx);
                bhit.setTextColor(android.graphics.Color.YELLOW);
                bhit.setBackground(bg3);
                bhit.setText('BoostHit');
                ray = new TextView(ctx);
                ray.setTextColor(android.graphics.Color.YELLOW);
                ray.setBackground(bg3);
                ray.setText('Xray [Beta]');
                ghost = new TextView(ctx);
                ghost.setTextColor(android.graphics.Color.YELLOW);
                ghost.setBackground(bg3);
                ghost.setText('Ghost');
                module = new TextView(ctx);
                module.setTextColor(android.graphics.Color.YELLOW);
                module.setBackground(bg3);
                module.setText('Flight');
                sword = new TextView(ctx);
                sword.setTextColor(android.graphics.Color.YELLOW);
                sword.setBackground(bg3);
                sword.setText('FastSwords');
                safe = new TextView(ctx);
                safe.setTextColor(android.graphics.Color.YELLOW);
                safe.setBackground(bg3);
                safe.setText('SafeWalk');
                kill = new TextView(ctx);
                kill.setTextColor(android.graphics.Color.YELLOW);
                kill.setBackground(bg3);
                kill.setText('KillAura');
                by = new TextView(ctx);
                by.setTextColor(android.graphics.Color.YELLOW);
                by.setBackground(bg3);
                by.setText('ByGlide');
                high = new TextView(ctx);
                high.setTextColor(android.graphics.Color.YELLOW);
                high.setBackground(bg3);
                high.setText('HighJump');
                bow = new TextView(ctx);
                bow.setTextColor(android.graphics.Color.YELLOW);
                bow.setBackground(bg3);
                bow.setText('ZoomBow');
                walk = new TextView(ctx);
                walk.setTextColor(android.graphics.Color.YELLOW);
                walk.setBackground(bg3);
                walk.setText('AutoWalk');
                hit = new TextView(ctx);
                hit.setTextColor(android.graphics.Color.YELLOW);
                hit.setBackground(bg3);
                hit.setText('Killaura [Mobs]');
                tpaura = new TextView(ctx);
                tpaura.setTextColor(android.graphics.Color.YELLOW);
                tpaura.setBackground(bg3);
                tpaura.setText('TpAura');
                hover = new TextView(ctx);
                hover.setTextColor(android.graphics.Color.YELLOW);
                hover.setBackground(bg3);
                hover.setText('HoverAura');
                packet = new TextView(ctx);
                packet.setTextColor(android.graphics.Color.YELLOW);
                packet.setBackground(bg3);
                packet.setText('Packets');
                bob = new TextView(ctx);
                bob.setTextColor(android.graphics.Color.YELLOW);
                bob.setBackground(bg3);
                bob.setText('ReverseStep');
                name0 = new TextView(ctx);
                name0.setTextColor(android.graphics.Color.YELLOW);
                name0.setBackground(bg3);
                name0.setText('Aimbot');
                name000 = new TextView(ctx);
                name000.setTextColor(android.graphics.Color.YELLOW);
                name000.setBackground(bg3);
                name000.setText('Zoom');
                name00 = new TextView(ctx);
                name00.setTextColor(android.graphics.Color.YELLOW);
                name00.setBackground(bg3);
                name00.setText('Speed');
                ai = new TextView(ctx);
                ai.setTextColor(android.graphics.Color.YELLOW);
                ai.setBackground(bg3);
                ai.setText('HitAim');
                aim1 = new TextView(ctx);
                aim1.setTextColor(android.graphics.Color.YELLOW);
                aim1.setBackground(bg3);
                aim1.setText('Aimbot');
                aima = new TextView(ctx);
                aima.setTextColor(android.graphics.Color.YELLOW);
                aima.setBackground(bg3);
                aima.setText('Aimghostist');
                top = new TextView(ctx);
                top.setTextColor(android.graphics.Color.YELLOW);
                top.setBackground(bg3);
                top.setText('TopAura');
                side = new TextView(ctx);
                side.setTextColor(android.graphics.Color.YELLOW);
                side.setBackground(bg3);
                side.setText('SideAura');
                water = new TextView(ctx);
                water.setTextColor(android.graphics.Color.YELLOW);
                water.setBackground(bg3);
                water.setText('WaterAura');
                name6 = new TextView(ctx);
                name6.setTextColor(android.graphics.Color.YELLOW);
                name6.setBackground(bg3);
                name6.setText('Hitbox');
                name7 = new TextView(ctx);
                name7.setTextColor(android.graphics.Color.YELLOW);
                name7.setBackground(bg3);
                name7.setText('BowAimbot');
                name8 = new TextView(ctx);
                name8.setTextColor(android.graphics.Color.YELLOW);
                name8.setBackground(bg3);
                name8.setText('TpAura');
                name9 = new TextView(ctx);
                name9.setTextColor(android.graphics.Color.YELLOW);
                name9.setBackground(bg3);
                name9.setText('Velocity');
                name10 = new TextView(ctx);
                name10.setTextColor(android.graphics.Color.YELLOW);
                name10.setBackground(bg3);
                name10.setText('AutoSword');
                name11 = new TextView(ctx);
                name11.setTextColor(android.graphics.Color.YELLOW);
                name11.setBackground(bg3);
                name11.setText('Reach');
                name12 = new TextView(ctx);
                name12.setTextColor(android.graphics.Color.YELLOW);
                name12.setBackground(bg3);
                name12.setText('Betterhit');
                name13 = new TextView(ctx);
                name13.setTextColor(android.graphics.Color.YELLOW);
                name13.setBackground(bg3);
                name13.setText('ESP+Tracer');
                name14 = new TextView(ctx);
                name14.setTextColor(android.graphics.Color.YELLOW);
                name14.setBackground(bg3);
                name14.setText('AntiAFK');
                name15 = new TextView(ctx);
                name15.setTextColor(android.graphics.Color.YELLOW);
                name15.setBackground(bg3);
                name15.setText('Detect');
                name16 = new TextView(ctx);
                name16.setTextColor(android.graphics.Color.YELLOW);
                name16.setBackground(bg3);
                name16.setText('Float');
                name17 = new TextView(ctx);
                name17.setTextColor(android.graphics.Color.YELLOW);
                name17.setBackground(bg3);
                name17.setText('Phase');
                name18 = new TextView(ctx);
                name18.setTextColor(android.graphics.Color.YELLOW);
                name18.setBackground(bg3);
                name18.setText('Scaffold');
                name19 = new TextView(ctx);
                name19.setTextColor(android.graphics.Color.YELLOW);
                name19.setBackground(bg3);
                name19.setText('Bouncer');
                name20 = new TextView(ctx);
                name20.setTextColor(android.graphics.Color.YELLOW);
                name20.setBackground(bg3);
                name20.setText('Dolphin');
                name21 = new TextView(ctx);
                name21.setTextColor(android.graphics.Color.YELLOW);
                name21.setBackground(bg3);
                name21.setText('Jesus');
                name22 = new TextView(ctx);
                name22.setTextColor(android.graphics.Color.YELLOW);
                name22.setBackground(bg3);
                name22.setText('Airbooster');
                name23 = new TextView(ctx);
                name23.setTextColor(android.graphics.Color.YELLOW);
                name23.setBackground(bg3);
                name23.setText('LongJump');
                name24 = new TextView(ctx);
                name24.setTextColor(android.graphics.Color.YELLOW);
                name24.setBackground(bg3);
                name24.setText('JetPack');
                name25 = new TextView(ctx);
                name25.setTextColor(android.graphics.Color.YELLOW);
                name25.setBackground(bg3);
                name25.setText('Enchant');
                name26 = new TextView(ctx);
                name26.setTextColor(android.graphics.Color.YELLOW);
                name26.setBackground(bg3);
                name26.setText('FullBright');
                name27 = new TextView(ctx);
                name27.setTextColor(android.graphics.Color.YELLOW);
                name27.setBackground(bg3);
                name27.setText('WallPghost');
                name28 = new TextView(ctx);
                name28.setTextColor(android.graphics.Color.YELLOW);
                name28.setBackground(bg3);
                name28.setText('Float');
                name29 = new TextView(ctx);
                name29.setTextColor(android.graphics.Color.YELLOW);
                name29.setBackground(bg3);
                name29.setText('AutoWalk');
                name30 = new TextView(ctx);
                name30.setTextColor(android.graphics.Color.YELLOW);
                name30.setBackground(bg3);
                name30.setText('CrouchSpeed');
                name31 = new TextView(ctx);
                name31.setTextColor(android.graphics.Color.YELLOW);
                name31.setBackground(bg3);
                name31.setText('TapTP');
                name32 = new TextView(ctx);
                name32.setTextColor(android.graphics.Color.YELLOW);
                name32.setBackground(bg3);
                name32.setText('QuickEscape');
                name33 = new TextView(ctx);
                name33.setTextColor(android.graphics.Color.YELLOW);
                name33.setBackground(bg3);
                name33.setText('Escape [2]');
                name34 = new TextView(ctx);
                name34.setTextColor(android.graphics.Color.YELLOW);
                name34.setBackground(bg3);
                name34.setText('Glide');
                name35 = new TextView(ctx);
                name35.setTextColor(android.graphics.Color.YELLOW);
                name35.setBackground(bg3);
                name35.setText('Follow');
                name36 = new TextView(ctx);
                name36.setTextColor(android.graphics.Color.YELLOW);
                name36.setBackground(bg3);
                name36.setText('SafeWalk');
                name37 = new TextView(ctx);
                name37.setTextColor(android.graphics.Color.YELLOW);
                name37.setBackground(bg3);
                name37.setText('Sprint');
                name38 = new TextView(ctx);
                name38.setTextColor(android.graphics.Color.YELLOW);
                name38.setBackground(bg3);
                name38.setText('Speed [30]');
                name39 = new TextView(ctx);
                name39.setTextColor(android.graphics.Color.YELLOW);
                name39.setBackground(bg3);
                name39.setText('Step [Vanilla]');
                name40 = new TextView(ctx);
                name40.setTextColor(android.graphics.Color.YELLOW);
                name40.setBackground(bg3);
                name40.setText('Glide [Bypghost]');
                name41 = new TextView(ctx);
                name41.setTextColor(android.graphics.Color.YELLOW);
                name41.setBackground(bg3);
                name41.setText('Regen');
                name42 = new TextView(ctx);
                name42.setTextColor(android.graphics.Color.YELLOW);
                name42.setBackground(bg3);
                name42.setText('Scaffold');
                name43 = new TextView(ctx);
                name43.setTextColor(android.graphics.Color.YELLOW);
                name43.setBackground(bg3);
                name43.setText('Exploit [1]');
                name44 = new TextView(ctx);
                name44.setTextColor(android.graphics.Color.YELLOW);
                name44.setBackground(bg3);
                name44.setText('Exploit [2]');
                name54 = new TextView(ctx);
                name54.setTextColor(android.graphics.Color.YELLOW);
                name54.setBackground(bg3);
                name54.setText('NDG');
                name55 = new TextView(ctx);
                name55.setTextColor(android.graphics.Color.YELLOW);
                name55.setBackground(bg3);
                name55.setText('Jump [Toggle]');
                name56 = new TextView(ctx);
                name56.setTextColor(android.graphics.Color.YELLOW);
                name56.setBackground(bg3);
                name56.setText('Elevator [Toggle]');
                name57 = new TextView(ctx);
                name57.setTextColor(android.graphics.Color.YELLOW);
                name57.setBackground(bg3);
                name57.setText('Spam');
                name58 = new TextView(ctx);
                name58.setTextColor(android.graphics.Color.YELLOW);
                name58.setBackground(bg3);
                name58.setText('AutoTower');
                name70 = new TextView(ctx);
                name70.setTextColor(android.graphics.Color.YELLOW);
                name70.setBackground(bg3);
                name70.setText('FastBridge');
                name71 = new TextView(ctx);
                name71.setTextColor(android.graphics.Color.YELLOW);
                name71.setBackground(bg3);
                name71.setText('NoFall');
                name72 = new TextView(ctx);
                name72.setTextColor(android.graphics.Color.YELLOW);
                name72.setBackground(bg3);
                name72.setText('GhostHand');
                GUIlist = new PopupWindow(layout088, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
                GUIlist.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                GUIlist.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 1, 1)
            } catch (err) {
                Toast.makeText(ctx, 'An error occured: ' + err, 1).show()
            }
        }
    }))
}
arrayMenu();
var GUI;
var GUIe;
var menu;
var mainMenu;
var exitUI;
var entry = getPlayerEnt();
var lx = getPlayerX();
var ly = getPlayerY();
var lz = getPlayerZ();

function dip2px(_0x5b5ex299) {
    return Math.ceil(_0x5b5ex299 * ctx.getResources().getDisplayMetrics().density)
}

function showElevatorBtn() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var layout = new LinearLayout(ctx);
                layout.setOrientation(1);
                var _0x5b5ex29b = new Button(ctx);
                _0x5b5ex29b.setText('Up');
                _0x5b5ex29b.setTextColor(android.graphics.Color.YELLOW);
                _0x5b5ex29b.setBackground(bg5);
                _0x5b5ex29b.setPadding(10, 10, 10, 10);
                _0x5b5ex29b.getBackground().setAlpha(150);
                _0x5b5ex29b.setOnClickListener(new View.OnClickListener({
                    onClick: function(_0x5b5ex8) {
                        Entity.setPositionRelative(getPlayerEnt(), 0, +2.53, 0)
                    }
                }));
                _0x5b5ex29b.setOnTouchListener(new android.view.View.OnTouchListener({
                    onTouch: function(view, _0x5b5exa) {
                        try {
                            if (!movinguie) {
                                return false
                            };
                            switch (_0x5b5exa.getAction()) {
                                case android.view.MotionEvent.ACTION_DOWN:
                                    dx = mPosX - _0x5b5exa.getRawX();
                                    dy = mPosY - _0x5b5exa.getRawY();
                                    break;
                                case android.view.MotionEvent.ACTION_MOVE:
                                    mPosX = (_0x5b5exa.getRawX() + dx);
                                    mPosY = (_0x5b5exa.getRawY() + dy);
                                    GUIe.update(mPosX, mPosY - 15, -1, -1);
                                    break;
                                case android.view.MotionEvent.ACTION_UP:
                                    ;
                                case android.view.MotionEvent.ACTION_CANCEL:
                                    movinguie = false;
                                    break
                            }
                        } catch (e) {};
                        return true
                    }
                }));
                _0x5b5ex29b.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function(_0x5b5exb, _0x5b5exc) {
                        movinguie = true;
                        return true
                    }
                }));
                layout.addView(_0x5b5ex29b);
                var _0x5b5ex29c = new Button(ctx);
                _0x5b5ex29c.setText('Down');
                _0x5b5ex29c.setTextColor(android.graphics.Color.YELLOW);
                _0x5b5ex29c.setBackground(bg5);
                _0x5b5ex29c.setPadding(10, 10, 10, 10);
                _0x5b5ex29c.getBackground().setAlpha(150);
                _0x5b5ex29c.setOnClickListener(new View.OnClickListener({
                    onClick: function(_0x5b5ex8) {
                        Entity.setPosition(getPlayerEnt(), getPlayerX(), getPlayerY() - 1.01, getPlayerZ())
                    }
                }));
                _0x5b5ex29c.setOnTouchListener(new android.view.View.OnTouchListener({
                    onTouch: function(view, _0x5b5exa) {
                        try {
                            if (!movinguie) {
                                return false
                            };
                            switch (_0x5b5exa.getAction()) {
                                case android.view.MotionEvent.ACTION_DOWN:
                                    dx = mPosX - _0x5b5exa.getRawX();
                                    dy = mPosY - _0x5b5exa.getRawY();
                                    break;
                                case android.view.MotionEvent.ACTION_MOVE:
                                    mPosX = (_0x5b5exa.getRawX() + dx);
                                    mPosY = (_0x5b5exa.getRawY() + dy);
                                    GUIe.update(mPosX, mPosY - 15, -1, -1);
                                    break;
                                case android.view.MotionEvent.ACTION_UP:
                                    ;
                                case android.view.MotionEvent.ACTION_CANCEL:
                                    movinguie = false;
                                    break
                            }
                        } catch (e) {};
                        return true
                    }
                }));
                _0x5b5ex29c.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function(_0x5b5exb, _0x5b5exc) {
                        movinguie = true;
                        return true
                    }
                }));
                layout.addView(_0x5b5ex29c);
                GUIe = new PopupWindow(layout, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
                GUIe.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                GUIe.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.CENTER, 0, 0)
            } catch (err) {
                Toast.makeText(ctx, 'An error occured: ' + err, 1).show()
            }
        }
    }))
}

function TapHide() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var layout = new LinearLayout(ctx);
                layout.setOrientation(1);
                var _0x5b5ex29e = new Button(ctx);
                _0x5b5ex29e.setText('CLOSE');
                _0x5b5ex29e.setTextColor(android.graphics.Color.YELLOW);
                _0x5b5ex29e.setBackground(bg5);
                _0x5b5ex29e.getBackground().setAlpha(150);
                _0x5b5ex29e.setOnClickListener(new View.OnClickListener({
                    onClick: function(_0x5b5ex8) {
                        if (!hidee) {
                            _0x5b5ex29e.setText('OPEN');
                            GUI00.dismiss();
                            menu.dismiss();
                            xan('Xanerix Hidden');
                            hidee = true
                        } else {
                            _0x5b5ex29e.setText('CLOSE');
                            mainMenu();
                            xan('Xanerix Showing');
                            hidee = false
                        }
                    }
                }));
                _0x5b5ex29e.setOnTouchListener(new android.view.View.OnTouchListener({
                    onTouch: function(view, _0x5b5exa) {
                        try {
                            if (!moving) {
                                return false
                            };
                            switch (_0x5b5exa.getAction()) {
                                case android.view.MotionEvent.ACTION_DOWN:
                                    dx = mPosX - _0x5b5exa.getRawX();
                                    dy = mPosY - _0x5b5exa.getRawY();
                                    break;
                                case android.view.MotionEvent.ACTION_MOVE:
                                    mPosX = (_0x5b5exa.getRawX() + dx);
                                    mPosY = (_0x5b5exa.getRawY() + dy);
                                    GUI099.update(mPosX, mPosY - 15, -1, -1);
                                    break;
                                case android.view.MotionEvent.ACTION_UP:
                                    ;
                                case android.view.MotionEvent.ACTION_CANCEL:
                                    moving = false;
                                    break
                            }
                        } catch (e) {};
                        return true
                    }
                }));
                _0x5b5ex29e.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function(_0x5b5exb, _0x5b5exc) {
                        moving = true;
                        return true
                    }
                }));
                layout.addView(_0x5b5ex29e);
                GUI099 = new PopupWindow(layout, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
                GUI099.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                GUI099.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.RIGHT, 0, 0)
            } catch (err) {
                Toast.makeText(ctx, 'An error occured: ' + err, 1).show()
            }
        }
    }))
}
var tos;

function showToS() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var _0x5b5ex2a1 = new android.widget.LinearLayout(ctx);
                var _0x5b5ex2a2 = new android.widget.ScrollView(ctx);
                var _0x5b5ex2a3 = new android.widget.LinearLayout(ctx);
                _0x5b5ex2a1.setOrientation(1);
                _0x5b5ex2a3.setOrientation(1);
                _0x5b5ex2a2.addView(_0x5b5ex2a1);
                _0x5b5ex2a3.addView(_0x5b5ex2a2);
                _0x5b5ex2a1.setBackground(bg1);
                var _0x5b5ex2a4 = new TextView(ctx);
                _0x5b5ex2a4.setTextSize(9);
                _0x5b5ex2a4.setText('Fixed a lot of Lag Issues, Fixed Buggs With Enchant and Overlamping, Also fixed Elevator Crash, Did With ESP to make It Look like PC idk xd');
                _0x5b5ex2a4.setTextColor(android.graphics.Color.RED);
                _0x5b5ex2a4.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
                _0x5b5ex2a4.setGravity(Gravity.CENTER);
                _0x5b5ex2a1.addView(_0x5b5ex2a4);
                var _0x5b5ex2a4 = new TextView(ctx);
                _0x5b5ex2a4.setTextSize(9);
                _0x5b5ex2a4.setText('Added, Escape(Keybind), Crosshair, Liquidfy, BunnyHop, Increased Hitbox to 11% With No Lag');
                _0x5b5ex2a4.setTextColor(android.graphics.Color.RED);
                _0x5b5ex2a4.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
                _0x5b5ex2a4.setGravity(Gravity.CENTER);
                _0x5b5ex2a1.addView(_0x5b5ex2a4);
                var _0x5b5ex2a5 = new android.widget.Button(ctx);
                _0x5b5ex2a5.setText('Lets Use Xanerix V3!');
                _0x5b5ex2a5.setTextColor(android.graphics.Color.GREEN);
                _0x5b5ex2a5.setBackground(bg5);
                _0x5b5ex2a5.setTextSize(15);
                _0x5b5ex2a5.setGravity(android.view.Gravity.CENTER);
                _0x5b5ex2a5.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(_0x5b5ex8) {
                        tos.dismiss();
                        mainMenu();
                        TapHide();
                        showEngine()
                    }
                }));
                _0x5b5ex2a1.addView(_0x5b5ex2a5);
                tos = new PopupWindow(_0x5b5ex2a3, ctx.getWindowManager().getDefaultDisplay().getWidth() / 2.9, ctx.getWindowManager().getDefaultDisplay().getHeight());
                tos.setAnimationStyle(android.R.style.Animation_Toast);
                tos.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                tos.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, 0, 15)
            } catch (error) {
                print('An error occured: ' + error)
            }
        }
    }))
}
showToS();
var directory = new android.graphics.BitmapFactory.decodeFile('/sdcard/Download/TheDevXanerix/TheDevXanerix/layout.png');
var layout = new android.graphics.drawable.BitmapDrawable(directory);
var imagee = new android.widget.ImageView(ctx);

function mainMenu() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var _0x5b5ex2a8 = new LinearLayout(ctx);
                var _0x5b5ex2a9 = new ScrollView(ctx);
                var _0x5b5ex2aa = new LinearLayout(ctx);
                _0x5b5ex2a8.setOrientation(1);
                _0x5b5ex2a8.setBackground(bg69);
                _0x5b5ex2a8.getBackground().setAlpha(100);
                _0x5b5ex2aa.setOrientation(1);
                _0x5b5ex2a9.addView(_0x5b5ex2a8);
                _0x5b5ex2aa.addView(_0x5b5ex2a9);

                function _0x5b5ex2ab() {
                    ctx.runOnUiThread(new Runnable({
                        run: function() {
                            try {
                                var layout = new LinearLayout(ctx);
                                var _0x5b5ex2a9 = new ScrollView(ctx);
                                var _0x5b5ex2ac = new LinearLayout(ctx);
                                layout.setOrientation(1);
                                _0x5b5ex2ac.setOrientation(1);
                                _0x5b5ex2a9.addView(layout);
                                _0x5b5ex2ac.addView(_0x5b5ex2a9);
                                var _0x5b5ex2ad = new TextView(ctx);
                                _0x5b5ex2ad.setTextSize(16);
                                _0x5b5ex2ad.setText('Xanerix 3.0');
                                _0x5b5ex2ad.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex2ad.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                                _0x5b5ex2ad.getBackground().setAlpha(150);
                                _0x5b5ex2ad.setGravity(Gravity.CENTER);
                                _0x5b5ex2ad.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        Rainbow = true;
                                        clientMessage('§eWelcome §4' + Player.getName(Player.getEntity()) + 'To §eXanerix §av0.2')
                                    }
                                }));
                                layout.addView(_0x5b5ex2ad);
                                var _0x5b5ex2ae = new android.widget.TextView(ctx);
                                _0x5b5ex2ae.setText('Combat');
                                _0x5b5ex2ae.setGravity(Gravity.CENTER);
                                _0x5b5ex2ae.setTextColor(combat);
                                _0x5b5ex2ae.setBackground(bg02);
                                _0x5b5ex2ae.setTextSize(15);
                                _0x5b5ex2ae.getBackground().setAlpha(150);
                                _0x5b5ex2ae.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!mainMenu6) {
                                            mainMenu6 = true;
                                            _0x5b5ex2cf();
                                            _0x5b5ex2ae.setTextColor(android.graphics.Color.GREEN)
                                        } else {
                                            mainMenu6 = false;
                                            menu009.dismiss();
                                            _0x5b5ex2ae.setTextColor(android.graphics.Color.YELLOW)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex2ae);
                                var _0x5b5ex2af = new android.widget.TextView(ctx);
                                _0x5b5ex2af.setText('Player');
                                _0x5b5ex2af.setGravity(Gravity.CENTER);
                                _0x5b5ex2af.setTextColor(player);
                                _0x5b5ex2af.setBackground(bg02);
                                _0x5b5ex2af.setTextSize(15);
                                _0x5b5ex2af.getBackground().setAlpha(150);
                                _0x5b5ex2af.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!mainMenu0010) {
                                            mainMenu0010 = true;
                                            _0x5b5ex2e1();
                                            _0x5b5ex2af.setTextColor(android.graphics.Color.GREEN)
                                        } else {
                                            mainMenu0010 = false;
                                            menu005.dismiss();
                                            _0x5b5ex2af.setTextColor(android.graphics.Color.YELLOW)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex2af);
                                var _0x5b5ex2b0 = new android.widget.TextView(ctx);
                                _0x5b5ex2b0.setText('Movement');
                                _0x5b5ex2b0.setGravity(Gravity.CENTER);
                                _0x5b5ex2b0.setTextColor(movement);
                                _0x5b5ex2b0.setBackground(bg02);
                                _0x5b5ex2b0.setTextSize(15);
                                _0x5b5ex2b0.getBackground().setAlpha(150);
                                _0x5b5ex2b0.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!mainMenu66) {
                                            mainMenu66 = true;
                                            _0x5b5ex2ed();
                                            _0x5b5ex2b0.setTextColor(android.graphics.Color.GREEN)
                                        } else {
                                            mainMenu66 = false;
                                            menu66.dismiss();
                                            _0x5b5ex2b0.setTextColor(android.graphics.Color.YELLOW)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex2b0);
                                var _0x5b5ex2b1 = new android.widget.TextView(ctx);
                                _0x5b5ex2b1.setText('Keybinds');
                                _0x5b5ex2b1.setGravity(Gravity.CENTER);
                                _0x5b5ex2b1.setTextColor(keybind);
                                _0x5b5ex2b1.setBackground(bg02);
                                _0x5b5ex2b1.setTextSize(15);
                                _0x5b5ex2b1.getBackground().setAlpha(150);
                                _0x5b5ex2b1.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!mainMenu666) {
                                            mainMenu666 = true;
                                            _0x5b5ex2fa();
                                            _0x5b5ex2b1.setTextColor(android.graphics.Color.GREEN)
                                        } else {
                                            mainMenu666 = false;
                                            menu666.dismiss();
                                            _0x5b5ex2b1.setTextColor(android.graphics.Color.YELLOW)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex2b1);
                                var _0x5b5ex2b2 = new android.widget.TextView(ctx);
                                _0x5b5ex2b2.setText('Exploits');
                                _0x5b5ex2b2.setGravity(Gravity.CENTER);
                                _0x5b5ex2b2.setTextColor(other);
                                _0x5b5ex2b2.setBackground(bg02);
                                _0x5b5ex2b2.setTextSize(15);
                                _0x5b5ex2b2.getBackground().setAlpha(150);
                                _0x5b5ex2b2.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!mainExploit) {
                                            mainExploit = true;
                                            _0x5b5ex30b();
                                            _0x5b5ex2b2.setTextColor(android.graphics.Color.GREEN)
                                        } else {
                                            mainExploit = false;
                                            menuE.dismiss();
                                            _0x5b5ex2b2.setTextColor(android.graphics.Color.YELLOW)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex2b2);
                                var _0x5b5ex2b3 = new android.widget.TextView(ctx);
                                _0x5b5ex2b3.setText('Other');
                                _0x5b5ex2b3.setGravity(Gravity.CENTER);
                                _0x5b5ex2b3.setTextColor(other);
                                _0x5b5ex2b3.setBackground(bg02);
                                _0x5b5ex2b3.setTextSize(15);
                                _0x5b5ex2b3.getBackground().setAlpha(150);
                                _0x5b5ex2b3.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!mainMenuk) {
                                            mainMenuk = true;
                                            _0x5b5ex301();
                                            _0x5b5ex2b3.setTextColor(android.graphics.Color.GREEN)
                                        } else {
                                            mainMenuk = false;
                                            menu660.dismiss();
                                            _0x5b5ex2b3.setTextColor(android.graphics.Color.YELLOW)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex2b3);
                                GUI00 = new PopupWindow(_0x5b5ex2ac, ctx.getWindowManager().getDefaultDisplay().getWidth() / 6, ctx.getWindowManager().getDefaultDisplay().getHeight() / 1.6);
                                GUI00.setAnimationStyle(android.R.style.Animation_Translucent);
                                GUI00.setAnimationStyle(android.R.style.Animation_Toast);
                                GUI00.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                                GUI00.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 0, 200)
                            } catch (error) {
                                Toast.makeText(ctx, 'Template Error: ' + error, 1).show()
                            }
                        }
                    }))
                }
                _0x5b5ex2ab();

                function _0x5b5ex2b4() {
                    ctx.runOnUiThread(new Runnable({
                        run: function() {
                            try {
                                var layout = new LinearLayout(ctx);
                                var _0x5b5ex2a9 = new ScrollView(ctx);
                                var _0x5b5ex2b5 = new LinearLayout(ctx);
                                layout.setOrientation(1);
                                _0x5b5ex2b5.setOrientation(1);
                                _0x5b5ex2a9.addView(layout);
                                _0x5b5ex2b5.addView(_0x5b5ex2a9);
                                var _0x5b5ex2b6 = new android.widget.TextView(ctx);
                                _0x5b5ex2b6.setText('Settings');
                                _0x5b5ex2b6.setGravity(Gravity.CENTER);
                                _0x5b5ex2b6.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex2b6.setBackground(bg02);
                                _0x5b5ex2b6.setTextSize(16);
                                _0x5b5ex2b6.getBackground().setAlpha(150);
                                _0x5b5ex2b6.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!sett) {
                                            sett = true;
                                            extraMenu();
                                            _0x5b5ex2b6.setTextColor(android.graphics.Color.GREEN)
                                        } else {
                                            sett = false;
                                            menuS.dismiss();
                                            _0x5b5ex2b6.setTextColor(android.graphics.Color.YELLOW)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex2b6);
                                EXTRA = new PopupWindow(_0x5b5ex2b5, ctx.getWindowManager().getDefaultDisplay().getWidth() / 6, ctx.getWindowManager().getDefaultDisplay().getHeight() / 1.6);
                                EXTRA.setAnimationStyle(android.R.style.Animation_InputMethod);
                                EXTRA.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                                EXTRA.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 400, 0)
                            } catch (error) {
                                Toast.makeText(ctx, 'Template Error: ' + error, 1).show()
                            }
                        }
                    }))
                }

                function _0x5b5ex2b7() {
                    ctx.runOnUiThread(new Runnable({
                        run: function() {
                            try {
                                var _0x5b5ex2b8 = new LinearLayout(ctx);
                                var _0x5b5ex2b9 = new Button(ctx);
                                layoutToggle = new LinearLayout(ctx);
                                layoutToggle.setOrientation(1);
                                var _0x5b5ex2ba = new Button(ctx);
                                _0x5b5ex2ba.setText('Aimbot');
                                _0x5b5ex2ba.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex2ba.setBackground(bg5);
                                _0x5b5ex2ba.getBackground().setAlpha(200);
                                _0x5b5ex2ba.setOnClickListener(new View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!aimboted) {
                                            _0x5b5ex2ba.setTextColor(android.graphics.Color.GREEN);
                                            aimbotss = true;
                                            aimboted = true;
                                            layout088.addView(name0)
                                        } else {
                                            _0x5b5ex2ba.setTextColor(android.graphics.Color.YELLOW);
                                            aimbotss = false;
                                            aimboted = false;
                                            layout088.removeView(name0)
                                        }
                                    }
                                }));
                                _0x5b5ex2ba.setOnTouchListener(new android.view.View.OnTouchListener({
                                    onTouch: function(view, _0x5b5exa) {
                                        try {
                                            if (!moving) {
                                                return false
                                            };
                                            switch (_0x5b5exa.getAction()) {
                                                case android.view.MotionEvent.ACTION_DOWN:
                                                    dx = mPosX - _0x5b5exa.getRawX();
                                                    dy = mPosY - _0x5b5exa.getRawY();
                                                    break;
                                                case android.view.MotionEvent.ACTION_MOVE:
                                                    mPosX = (_0x5b5exa.getRawX() + dx);
                                                    mPosY = (_0x5b5exa.getRawY() + dy);
                                                    GUI090.update(mPosX, mPosY - 15, -1, -1);
                                                    break;
                                                case android.view.MotionEvent.ACTION_UP:
                                                    ;
                                                case android.view.MotionEvent.ACTION_CANCEL:
                                                    moving = false;
                                                    break
                                            }
                                        } catch (e) {};
                                        return true
                                    }
                                }));
                                _0x5b5ex2ba.setOnLongClickListener(new android.view.View.OnLongClickListener({
                                    onLongClick: function(_0x5b5exb, _0x5b5exc) {
                                        moving = true;
                                        return true
                                    }
                                }));
                                layoutToggle.addView(_0x5b5ex2ba);
                                var _0x5b5ex2bb = new Button(ctx);
                                _0x5b5ex2bb.setText('Speed');
                                _0x5b5ex2bb.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex2bb.setBackground(bg5);
                                _0x5b5ex2bb.getBackground().setAlpha(200);
                                _0x5b5ex2bb.setOnClickListener(new View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!speeed) {
                                            _0x5b5ex2bb.setTextColor(android.graphics.Color.GREEN);
                                            ModPE.setGameSpeed(28);
                                            speeed = true;
                                            layout088.addView(name00)
                                        } else {
                                            _0x5b5ex2bb.setTextColor(android.graphics.Color.YELLOW);
                                            ModPE.setGameSpeed(20);
                                            speeed = false;
                                            layout088.removeView(name00)
                                        }
                                    }
                                }));
                                _0x5b5ex2bb.setOnTouchListener(new android.view.View.OnTouchListener({
                                    onTouch: function(view, _0x5b5exa) {
                                        try {
                                            if (!moving) {
                                                return false
                                            };
                                            switch (_0x5b5exa.getAction()) {
                                                case android.view.MotionEvent.ACTION_DOWN:
                                                    dx = mPosX - _0x5b5exa.getRawX();
                                                    dy = mPosY - _0x5b5exa.getRawY();
                                                    break;
                                                case android.view.MotionEvent.ACTION_MOVE:
                                                    mPosX = (_0x5b5exa.getRawX() + dx);
                                                    mPosY = (_0x5b5exa.getRawY() + dy);
                                                    GUI090.update(mPosX, mPosY - 15, -1, -1);
                                                    break;
                                                case android.view.MotionEvent.ACTION_UP:
                                                    ;
                                                case android.view.MotionEvent.ACTION_CANCEL:
                                                    moving = false;
                                                    break
                                            }
                                        } catch (e) {};
                                        return true
                                    }
                                }));
                                _0x5b5ex2bb.setOnLongClickListener(new android.view.View.OnLongClickListener({
                                    onLongClick: function(_0x5b5exb, _0x5b5exc) {
                                        moving = true;
                                        return true
                                    }
                                }));
                                layoutToggle.addView(_0x5b5ex2bb);
                                var _0x5b5ex2bc = new Button(ctx);
                                _0x5b5ex2bc.setText('Zoom');
                                _0x5b5ex2bc.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex2bc.setBackground(bg5);
                                _0x5b5ex2bc.getBackground().setAlpha(200);
                                _0x5b5ex2bc.setOnClickListener(new View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!zoomed) {
                                            _0x5b5ex2bc.setTextColor(android.graphics.Color.GREEN);
                                            ModPE.setFov(20);
                                            zoomed = true;
                                            layout088.addView(name000)
                                        } else {
                                            _0x5b5ex2bc.setTextColor(android.graphics.Color.YELLOW);
                                            ModPE.resetFov();
                                            zoomed = false;
                                            layout088.removeView(name000)
                                        }
                                    }
                                }));
                                _0x5b5ex2bc.setOnTouchListener(new android.view.View.OnTouchListener({
                                    onTouch: function(view, _0x5b5exa) {
                                        try {
                                            if (!moving) {
                                                return false
                                            };
                                            switch (_0x5b5exa.getAction()) {
                                                case android.view.MotionEvent.ACTION_DOWN:
                                                    dx = mPosX - _0x5b5exa.getRawX();
                                                    dy = mPosY - _0x5b5exa.getRawY();
                                                    break;
                                                case android.view.MotionEvent.ACTION_MOVE:
                                                    mPosX = (_0x5b5exa.getRawX() + dx);
                                                    mPosY = (_0x5b5exa.getRawY() + dy);
                                                    GUI090.update(mPosX, mPosY - 15, -1, -1);
                                                    break;
                                                case android.view.MotionEvent.ACTION_UP:
                                                    ;
                                                case android.view.MotionEvent.ACTION_CANCEL:
                                                    moving = false;
                                                    break
                                            }
                                        } catch (e) {};
                                        return true
                                    }
                                }));
                                _0x5b5ex2bc.setOnLongClickListener(new android.view.View.OnLongClickListener({
                                    onLongClick: function(_0x5b5exb, _0x5b5exc) {
                                        moving = true;
                                        return true
                                    }
                                }));
                                layoutToggle.addView(_0x5b5ex2bc);
                                var _0x5b5ex2bd = new Button(ctx);
                                _0x5b5ex2bd.setText('KillAura');
                                _0x5b5ex2bd.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex2bd.setBackground(bg5);
                                _0x5b5ex2bd.getBackground().setAlpha(200);
                                _0x5b5ex2bd.setOnClickListener(new View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!killaura) {
                                            _0x5b5ex2bd.setTextColor(android.graphics.Color.GREEN);
                                            xan('Its Not Killaura But it\'s pretty good');
                                            killaura = true;
                                            sidee = true;
                                            sider = true;
                                            layout088.addView(kill)
                                        } else {
                                            _0x5b5ex2bd.setTextColor(android.graphics.Color.YELLOW);
                                            ModPE.resetFov();
                                            killaura = false;
                                            sidee = false;
                                            sider = false;
                                            ModPE.setGameSpeed(20);
                                            layout088.removeView(kill)
                                        }
                                    }
                                }));
                                _0x5b5ex2bd.setOnTouchListener(new android.view.View.OnTouchListener({
                                    onTouch: function(view, _0x5b5exa) {
                                        try {
                                            if (!moving) {
                                                return false
                                            };
                                            switch (_0x5b5exa.getAction()) {
                                                case android.view.MotionEvent.ACTION_DOWN:
                                                    dx = mPosX - _0x5b5exa.getRawX();
                                                    dy = mPosY - _0x5b5exa.getRawY();
                                                    break;
                                                case android.view.MotionEvent.ACTION_MOVE:
                                                    mPosX = (_0x5b5exa.getRawX() + dx);
                                                    mPosY = (_0x5b5exa.getRawY() + dy);
                                                    GUI090.update(mPosX, mPosY - 15, -1, -1);
                                                    break;
                                                case android.view.MotionEvent.ACTION_UP:
                                                    ;
                                                case android.view.MotionEvent.ACTION_CANCEL:
                                                    moving = false;
                                                    break
                                            }
                                        } catch (e) {};
                                        return true
                                    }
                                }));
                                _0x5b5ex2bd.setOnLongClickListener(new android.view.View.OnLongClickListener({
                                    onLongClick: function(_0x5b5exb, _0x5b5exc) {
                                        moving = true;
                                        return true
                                    }
                                }));
                                layoutToggle.addView(_0x5b5ex2bd);
                                GUI090 = new PopupWindow(layoutToggle, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
                                GUI090.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                                GUI090.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 0, 0)
                            } catch (exception) {
                                Toast.makeText(ctx, exception, 1).show()
                            }
                        }
                    }))
                }

                function _0x5b5ex2be() {
                    ctx.runOnUiThread(new Runnable({
                        run: function() {
                            try {
                                var layout = new LinearLayout(ctx);
                                layout.setOrientation(1);
                                var toggled = false;
                                var _0x5b5ex2bf = new android.widget.ToggleButton(ctx);
                                _0x5b5ex2bf.setText('E');
                                _0x5b5ex2bf.setBackground(bg);
                                _0x5b5ex2bf.setPadding(10, 10, 10, 10);
                                _0x5b5ex2bf.setChecked(toggled);
                                _0x5b5ex2bf.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!toggled) {
                                            _0x5b5ex2bf.setText('E');
                                            _0x5b5ex2bf.setTextColor(Color.CYAN);
                                            toggled = true;
                                            esps = true;
                                            esp = true
                                        } else {
                                            _0x5b5ex2bf.setText('E');
                                            _0x5b5ex2bf.setTextColor(Color.RED);
                                            toggled = false;
                                            esps = false;
                                            esp = false
                                        };
                                        _0x5b5ex2bf.setChecked(toggled)
                                    }
                                }));
                                layout.addView(_0x5b5ex2bf);
                                GUI12 = new PopupWindow(layout, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
                                GUI12.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                                GUI12.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 35 * 10, 0)
                            } catch (err) {
                                Toast.makeText(ctx, 'An error occured: ' + err, 1).show()
                            }
                        }
                    }))
                }

                function _0x5b5ex2c0() {
                    ctx.runOnUiThread(new Runnable({
                        run: function() {
                            try {
                                var layout = new LinearLayout(ctx);
                                layout.setOrientation(1);
                                var toggled = false;
                                var _0x5b5ex2bf = new android.widget.ToggleButton(ctx);
                                _0x5b5ex2bf.setText('R');
                                _0x5b5ex2bf.setBackground(bg);
                                _0x5b5ex2bf.setPadding(10, 10, 10, 10);
                                _0x5b5ex2bf.setChecked(toggled);
                                _0x5b5ex2bf.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!toggled) {
                                            _0x5b5ex2bf.setText('R');
                                            _0x5b5ex2bf.setTextColor(Color.CYAN);
                                            toggled = true;
                                            Level.setGameMode(1);
                                            Player.setCanFly(0)
                                        } else {
                                            _0x5b5ex2bf.setText('R');
                                            _0x5b5ex2bf.setTextColor(Color.RED);
                                            toggled = false;
                                            Level.setGameMode(0);
                                            Player.setCanFly(0)
                                        };
                                        _0x5b5ex2bf.setChecked(toggled)
                                    }
                                }));
                                layout.addView(_0x5b5ex2bf);
                                GUI1 = new PopupWindow(layout, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
                                GUI1.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                                GUI1.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 35 * 3, 0)
                            } catch (err) {
                                Toast.makeText(ctx, 'An error occured: ' + err, 1).show()
                            }
                        }
                    }))
                }

                function _0x5b5ex2c1() {
                    ctx.runOnUiThread(new Runnable({
                        run: function() {
                            try {
                                var layout = new LinearLayout(ctx);
                                layout.setOrientation(1);
                                var _0x5b5ex2c2 = new Button(ctx);
                                _0x5b5ex2c2.setText('Jump');
                                _0x5b5ex2c2.setTextColor(Color.YELLOW);
                                _0x5b5ex2c2.setBackground(bg5);
                                _0x5b5ex2c2.getBackground().setAlpha(100);
                                _0x5b5ex2c2.setOnClickListener(new View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        setVelY(getPlayerEnt(), 0.4)
                                    }
                                }));
                                _0x5b5ex2c2.setOnTouchListener(new android.view.View.OnTouchListener({
                                    onTouch: function(view, _0x5b5exa) {
                                        try {
                                            if (!moving) {
                                                return false
                                            };
                                            switch (_0x5b5exa.getAction()) {
                                                case android.view.MotionEvent.ACTION_DOWN:
                                                    dx = mPosX - _0x5b5exa.getRawX();
                                                    dy = mPosY - _0x5b5exa.getRawY();
                                                    break;
                                                case android.view.MotionEvent.ACTION_MOVE:
                                                    mPosX = (_0x5b5exa.getRawX() + dx);
                                                    mPosY = (_0x5b5exa.getRawY() + dy);
                                                    GUI2.update(mPosX, mPosY - 15, -1, -1);
                                                    break;
                                                case android.view.MotionEvent.ACTION_UP:
                                                    ;
                                                case android.view.MotionEvent.ACTION_CANCEL:
                                                    moving = false;
                                                    break
                                            }
                                        } catch (e) {};
                                        return true
                                    }
                                }));
                                _0x5b5ex2c2.setOnLongClickListener(new android.view.View.OnLongClickListener({
                                    onLongClick: function(_0x5b5exb, _0x5b5exc) {
                                        moving = true;
                                        return true
                                    }
                                }));
                                layout.addView(_0x5b5ex2c2);
                                GUI2 = new PopupWindow(layout, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
                                GUI2.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                                GUI2.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.BOTTOM, 0, 0)
                            } catch (err) {
                                Toast.makeText(ctx, 'An error occured: ' + err, 1).show()
                            }
                        }
                    }))
                }

                function _0x5b5ex2c3() {
                    ctx.runOnUiThread(new Runnable({
                        run: function() {
                            try {
                                var _0x5b5ex2c4 = new LinearLayout(ctx);
                                _0x5b5ex2c4.setOrientation(1);
                                var _0x5b5ex2c5 = new Button(ctx);
                                _0x5b5ex2c5.setText('Escape');
                                _0x5b5ex2c5.setTextColor(Color.YELLOW);
                                _0x5b5ex2c5.setBackground(bg5);
                                _0x5b5ex2c5.getBackground().setAlpha(100);
                                _0x5b5ex2c5.setOnClickListener(new View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        setVelZ(getPlayerEnt(), 7)
                                    }
                                }));
                                _0x5b5ex2c5.setOnTouchListener(new android.view.View.OnTouchListener({
                                    onTouch: function(view, _0x5b5exa) {
                                        try {
                                            if (!moving) {
                                                return false
                                            };
                                            switch (_0x5b5exa.getAction()) {
                                                case android.view.MotionEvent.ACTION_DOWN:
                                                    dx = mPosX - _0x5b5exa.getRawX();
                                                    dy = mPosY - _0x5b5exa.getRawY();
                                                    break;
                                                case android.view.MotionEvent.ACTION_MOVE:
                                                    mPosX = (_0x5b5exa.getRawX() + dx);
                                                    mPosY = (_0x5b5exa.getRawY() + dy);
                                                    ESCAPE.update(mPosX, mPosY - 15, -1, -1);
                                                    break;
                                                case android.view.MotionEvent.ACTION_UP:
                                                    ;
                                                case android.view.MotionEvent.ACTION_CANCEL:
                                                    moving = false;
                                                    break
                                            }
                                        } catch (e) {};
                                        return true
                                    }
                                }));
                                _0x5b5ex2c5.setOnLongClickListener(new android.view.View.OnLongClickListener({
                                    onLongClick: function(_0x5b5exb, _0x5b5exc) {
                                        moving = true;
                                        return true
                                    }
                                }));
                                _0x5b5ex2c4.addView(_0x5b5ex2c5);
                                ESCAPE = new PopupWindow(_0x5b5ex2c4, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
                                ESCAPE.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                                ESCAPE.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.BOTTOM, 0, 0)
                            } catch (err) {
                                Toast.makeText(ctx, 'An error occured: ' + err, 1).show()
                            }
                        }
                    }))
                }

                function _0x5b5ex2c6() {
                    ctx.runOnUiThread(new Runnable({
                        run: function() {
                            try {
                                var _0x5b5ex2c7 = new LinearLayout(ctx);
                                _0x5b5ex2c7.setOrientation(1);
                                var _0x5b5ex2c8 = new Button(ctx);
                                _0x5b5ex2c8.setText('Boost');
                                _0x5b5ex2c8.setTextColor(Color.YELLOW);
                                _0x5b5ex2c8.setBackground(bg5);
                                _0x5b5ex2c8.getBackground().setAlpha(100);
                                _0x5b5ex2c8.setOnClickListener(new View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        var hit = getYaw() + 90;
                                        var _0x5b5ex2c9 = getPitch() - 180;
                                        x = Math.cos(hit * (Math.PI / 180));
                                        y = Math.sin(_0x5b5ex2c9 * (Math.PI / 180));
                                        z = Math.sin(hit * (Math.PI / 180));
                                        setVelX(Player.getEntity(), x * 1);
                                        setVelY(Player.getEntity(), y * 1);
                                        setVelZ(Player.getEntity(), z * 1)
                                    }
                                }));
                                _0x5b5ex2c8.setOnTouchListener(new android.view.View.OnTouchListener({
                                    onTouch: function(view, _0x5b5exa) {
                                        try {
                                            if (!movinguib) {
                                                return false
                                            };
                                            switch (_0x5b5exa.getAction()) {
                                                case android.view.MotionEvent.ACTION_DOWN:
                                                    dx = mPosX - _0x5b5exa.getRawX();
                                                    dy = mPosY - _0x5b5exa.getRawY();
                                                    break;
                                                case android.view.MotionEvent.ACTION_MOVE:
                                                    mPosX = (_0x5b5exa.getRawX() + dx);
                                                    mPosY = (_0x5b5exa.getRawY() + dy);
                                                    BOOST.update(mPosX, mPosY - 15, -1, -1);
                                                    break;
                                                case android.view.MotionEvent.ACTION_UP:
                                                    ;
                                                case android.view.MotionEvent.ACTION_CANCEL:
                                                    movinguib = false;
                                                    break
                                            }
                                        } catch (e) {};
                                        return true
                                    }
                                }));
                                _0x5b5ex2c8.setOnLongClickListener(new android.view.View.OnLongClickListener({
                                    onLongClick: function(_0x5b5exb, _0x5b5exc) {
                                        movinguib = true;
                                        return true
                                    }
                                }));
                                _0x5b5ex2c7.addView(_0x5b5ex2c8);
                                BOOST = new PopupWindow(_0x5b5ex2c7, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
                                BOOST.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                                BOOST.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.BOTTOM, 0, 200)
                            } catch (err) {
                                Toast.makeText(ctx, 'An error occured: ' + err, 1).show()
                            }
                        }
                    }))
                }

                function _0x5b5ex2ca() {
                    ctx.runOnUiThread(new Runnable({
                        run: function() {
                            try {
                                var _0x5b5ex2cb = new LinearLayout(ctx);
                                _0x5b5ex2cb.setOrientation(1);
                                var _0x5b5ex2cc = new Button(ctx);
                                _0x5b5ex2cc.setText('⊰⌖⊱');
                                _0x5b5ex2cc.setTextSize(28);
                                _0x5b5ex2cc.setTextColor(Color.YELLOW);
                                _0x5b5ex2cc.setBackground(bg69);
                                _0x5b5ex2cc.setOnClickListener(new View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {}
                                }));
                                _0x5b5ex2cc.setOnTouchListener(new android.view.View.OnTouchListener({
                                    onTouch: function(view, _0x5b5exa) {
                                        try {
                                            if (!moving) {
                                                return false
                                            };
                                            switch (_0x5b5exa.getAction()) {
                                                case android.view.MotionEvent.ACTION_DOWN:
                                                    dx = mPosX - _0x5b5exa.getRawX();
                                                    dy = mPosY - _0x5b5exa.getRawY();
                                                    break;
                                                case android.view.MotionEvent.ACTION_MOVE:
                                                    mPosX = (_0x5b5exa.getRawX() + dx);
                                                    mPosY = (_0x5b5exa.getRawY() + dy);
                                                    CROS.update(mPosX, mPosY - 15, -1, -1);
                                                    break;
                                                case android.view.MotionEvent.ACTION_UP:
                                                    ;
                                                case android.view.MotionEvent.ACTION_CANCEL:
                                                    moving = false;
                                                    break
                                            }
                                        } catch (e) {};
                                        return true
                                    }
                                }));
                                _0x5b5ex2cc.setOnLongClickListener(new android.view.View.OnLongClickListener({
                                    onLongClick: function(_0x5b5exb, _0x5b5exc) {
                                        moving = true;
                                        return true
                                    }
                                }));
                                _0x5b5ex2cb.addView(_0x5b5ex2cc);
                                CROS = new PopupWindow(_0x5b5ex2cb, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
                                CROS.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                                CROS.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.CENTER, 0, 0)
                            } catch (err) {
                                Toast.makeText(ctx, 'An error occured: ' + err, 1).show()
                            }
                        }
                    }))
                }

                function _0x5b5ex2cd() {
                    ctx.runOnUiThread(new Runnable({
                        run: function() {
                            try {
                                var layout = new LinearLayout(ctx);
                                layout.setOrientation(1);
                                var _0x5b5ex2ce = new Button(ctx);
                                _0x5b5ex2ce.setText('NDG');
                                _0x5b5ex2ce.setTextColor(Color.YELLOW);
                                _0x5b5ex2ce.setBackground(bg5);
                                _0x5b5ex2ce.getBackground().setAlpha(100);
                                _0x5b5ex2ce.setOnClickListener(new View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!maini) {
                                            _0x5b5ex2ce.setTextColor(Color.YELLOW);
                                            maini = true;
                                            ndglidess = true;
                                            ndglideed = true
                                        } else {
                                            _0x5b5ex2ce.setTextColor(Color.RED);
                                            maini = false;
                                            ndglidess = false;
                                            ndglideed = false
                                        }
                                    }
                                }));
                                _0x5b5ex2ce.setOnTouchListener(new android.view.View.OnTouchListener({
                                    onTouch: function(view, _0x5b5exa) {
                                        try {
                                            if (!movinguin) {
                                                return false
                                            };
                                            switch (_0x5b5exa.getAction()) {
                                                case android.view.MotionEvent.ACTION_DOWN:
                                                    dx = mPosX - _0x5b5exa.getRawX();
                                                    dy = mPosY - _0x5b5exa.getRawY();
                                                    break;
                                                case android.view.MotionEvent.ACTION_MOVE:
                                                    mPosX = (_0x5b5exa.getRawX() + dx);
                                                    mPosY = (_0x5b5exa.getRawY() + dy);
                                                    GUI2.update(mPosX, mPosY - 15, -1, -1);
                                                    break;
                                                case android.view.MotionEvent.ACTION_UP:
                                                    ;
                                                case android.view.MotionEvent.ACTION_CANCEL:
                                                    movinguin = false;
                                                    break
                                            }
                                        } catch (e) {};
                                        return true
                                    }
                                }));
                                _0x5b5ex2ce.setOnLongClickListener(new android.view.View.OnLongClickListener({
                                    onLongClick: function(_0x5b5exb, _0x5b5exc) {
                                        movinguin = true;
                                        return true
                                    }
                                }));
                                layout.addView(_0x5b5ex2ce);
                                GUI2 = new PopupWindow(layout, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
                                GUI2.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                                GUI2.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.CENTER, 0, 0)
                            } catch (err) {
                                Toast.makeText(ctx, 'An error occured: ' + err, 1).show()
                            }
                        }
                    }))
                }

                function _0x5b5ex2cf() {
                    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
                    ctx.runOnUiThread(new java.lang.Runnable({
                        run: function() {
                            try {
                                var _0x5b5ex2d0 = new android.graphics.BitmapFactory.decodeFile('/sdcard/Download/TheXanerixDev/TheXanerixDev/layout.png');
                                var layout = new android.graphics.drawable.BitmapDrawable(_0x5b5ex2d0);
                                var _0x5b5ex2d1 = new android.widget.ImageView(ctx);
                                var _0x5b5ex2a8 = new android.widget.LinearLayout(ctx);
                                var _0x5b5ex2a9 = new android.widget.ScrollView(ctx);
                                var _0x5b5ex2d2 = new android.widget.LinearLayout(ctx);
                                _0x5b5ex2a8.setOrientation(1);
                                _0x5b5ex2a8.setBackground(bg5);
                                _0x5b5ex2d2.setOrientation(1);
                                _0x5b5ex2a9.addView(_0x5b5ex2a8);
                                _0x5b5ex2d2.addView(_0x5b5ex2a9);
                                var _0x5b5ex2d3 = new TextView(ctx);
                                _0x5b5ex2d3.setTextSize(18);
                                _0x5b5ex2d3.setText('Combat');
                                _0x5b5ex2d3.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex2d3.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                                _0x5b5ex2d3.getBackground().setAlpha(150);
                                _0x5b5ex2d3.setGravity(Gravity.CENTER);
                                _0x5b5ex2d3.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {}
                                }));
                                _0x5b5ex2d3.setOnTouchListener(new android.view.View.OnTouchListener({
                                    onTouch: function(view, _0x5b5exa) {
                                        try {
                                            if (!movingui5) {
                                                return false
                                            };
                                            switch (_0x5b5exa.getAction()) {
                                                case android.view.MotionEvent.ACTION_DOWN:
                                                    dx = mPosX - _0x5b5exa.getRawX();
                                                    dy = mPosY - _0x5b5exa.getRawY();
                                                    break;
                                                case android.view.MotionEvent.ACTION_MOVE:
                                                    mPosX = (_0x5b5exa.getRawX() + dx);
                                                    mPosY = (_0x5b5exa.getRawY() + dy);
                                                    menu009.update(mPosX, mPosY - 15, -1, -1);
                                                    break;
                                                case android.view.MotionEvent.ACTION_UP:
                                                    ;
                                                case android.view.MotionEvent.ACTION_CANCEL:
                                                    moving = false;
                                                    break
                                            }
                                        } catch (e) {};
                                        return true
                                    }
                                }));
                                _0x5b5ex2d3.setOnLongClickListener(new android.view.View.OnLongClickListener({
                                    onLongClick: function(_0x5b5exb, _0x5b5exc) {
                                        movingui5 = true;
                                        return true
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex2d3);
                                var _0x5b5ex2d4 = new android.widget.TextView(ctx);
                                _0x5b5ex2d4.setText('Aimbot');
                                _0x5b5ex2d4.setTextSize(15);
                                _0x5b5ex2d4.setGravity(Gravity.CENTER);
                                _0x5b5ex2d4.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex2d4.setBackground(aimboted ? mainbt : mainbt2);
                                _0x5b5ex2d4.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!aimboted) {
                                            layout088.addView(aim1);
                                            aimbotss = true;
                                            aimboted = true;
                                            _0x5b5ex2d4.setBackground(mainbt)
                                        } else {
                                            layout088.removeView(aim1);
                                            aimbotss = false;
                                            aimboted = false;
                                            _0x5b5ex2d4.setBackground(mainbt2)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex2d4);
                                var _0x5b5ex2d5 = new android.widget.TextView(ctx);
                                _0x5b5ex2d5.setText('Killaura');
                                _0x5b5ex2d5.setTextSize(15);
                                _0x5b5ex2d5.setGravity(Gravity.CENTER);
                                _0x5b5ex2d5.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex2d5.setBackground(mkilla ? mainbt : mainbt2);
                                _0x5b5ex2d5.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!mkilla) {
                                            layout088.addView(hit);
                                            mkilla = true;
                                            _0x5b5ex2d5.setBackground(mainbt)
                                        } else {
                                            layout088.removeView(hit);
                                            mkilla = false;
                                            _0x5b5ex2d5.setBackground(mainbt2)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex2d5);
                                var _0x5b5ex2d6 = new android.widget.TextView(ctx);
                                _0x5b5ex2d6.setText('OPAura');
                                _0x5b5ex2d6.setTextSize(15);
                                _0x5b5ex2d6.setGravity(Gravity.CENTER);
                                _0x5b5ex2d6.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex2d6.setBackground(opaura ? mainbt : mainbt2);
                                _0x5b5ex2d6.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!opaura) {
                                            layout088.addView(opa);
                                            opaura = true;
                                            _0x5b5ex2d6.setBackground(mainbt)
                                        } else {
                                            layout088.removeView(opa);
                                            opaura = false;
                                            _0x5b5ex2d6.setBackground(mainbt2)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex2d6);
                                var _0x5b5ex2d7 = new android.widget.TextView(ctx);
                                _0x5b5ex2d7.setText('JumpHit');
                                _0x5b5ex2d7.setTextSize(15);
                                _0x5b5ex2d7.setGravity(Gravity.CENTER);
                                _0x5b5ex2d7.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex2d7.setBackground(jumphit ? mainbt : mainbt2);
                                _0x5b5ex2d7.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!jumphit) {
                                            layout088.addView(jhit);
                                            jumphit = true;
                                            _0x5b5ex2d7.setBackground(mainbt)
                                        } else {
                                            layout088.removeView(jhit);
                                            jumphit = false;
                                            _0x5b5ex2d7.setBackground(mainbt2)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex2d7);
                                var _0x5b5ex2d8 = new android.widget.TextView(ctx);
                                _0x5b5ex2d8.setText('Aimassist');
                                _0x5b5ex2d8.setTextSize(15);
                                _0x5b5ex2d8.setGravity(Gravity.CENTER);
                                _0x5b5ex2d8.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex2d8.setBackground(hitaim ? mainbt : mainbt2);
                                _0x5b5ex2d8.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!hitaim) {
                                            layout088.addView(hita);
                                            hitaim = true;
                                            _0x5b5ex2d8.setBackground(mainbt)
                                        } else {
                                            layout088.removeView(hita);
                                            hitaim = false;
                                            _0x5b5ex2d8.setBackground(mainbt2)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex2d8);
                                var _0x5b5ex2d9 = new android.widget.TextView(ctx);
                                _0x5b5ex2d9.setText('TopAura');
                                _0x5b5ex2d9.setTextSize(15);
                                _0x5b5ex2d9.setGravity(Gravity.CENTER);
                                _0x5b5ex2d9.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex2d9.setBackground(sider ? mainbt : mainbt2);
                                _0x5b5ex2d9.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!sider) {
                                            layout088.addView(top);
                                            sidee = true;
                                            sider = true;
                                            _0x5b5ex2d9.setBackground(mainbt)
                                        } else {
                                            layout088.removeView(top);
                                            sidee = false;
                                            sider = false;
                                            _0x5b5ex2d9.setBackground(mainbt2)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex2d9);
                                var _0x5b5ex2da = new android.widget.TextView(ctx);
                                _0x5b5ex2da.setText('SideAura');
                                _0x5b5ex2da.setTextSize(15);
                                _0x5b5ex2da.setGravity(Gravity.CENTER);
                                _0x5b5ex2da.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex2da.setBackground(sideaurad ? mainbt : mainbt2);
                                _0x5b5ex2da.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!sideaurad) {
                                            layout088.addView(side);
                                            ModPE.setGameSpeed(30);
                                            sideaura = true;
                                            sideaurad = true;
                                            _0x5b5ex2da.setBackground(mainbt)
                                        } else {
                                            layout088.removeView(side);
                                            ModPE.setGameSpeed(20);
                                            sideaura = false;
                                            sideaurad = false;
                                            _0x5b5ex2da.setBackground(mainbt2)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex2da);
                                var _0x5b5ex2db = new android.widget.TextView(ctx);
                                _0x5b5ex2db.setText('BetterHitter');
                                _0x5b5ex2db.setTextSize(15);
                                _0x5b5ex2db.setGravity(Gravity.CENTER);
                                _0x5b5ex2db.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex2db.setBackground(betterhit ? mainbt : mainbt2);
                                _0x5b5ex2db.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!betterhit) {
                                            layout088.addView(betterHit);
                                            betterhit = true;
                                            Entity.addEffect(Player.getEntity(), MobEffect.digSpeed, 999999, 90, false, false);
                                            _0x5b5ex2db.setBackground(mainbt)
                                        } else {
                                            layout088.removeView(betterHit);
                                            betterhit = false;
                                            Entity.removeAllEffects(getPlayerEnt());
                                            _0x5b5ex2db.setBackground(mainbt2)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex2db);
                                var hb = new android.widget.TextView(ctx);
                                hb.setText('HitBox');
                                hb.setTextSize(15);
                                hb.setGravity(Gravity.CENTER);
                                hb.setTextColor(android.graphics.Color.YELLOW);
                                hb.setBackground(hb2 ? mainbt : mainbt2);
                                hb.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!hb2) {
                                            layout088.addView(name6);
                                            hb1 = true;
                                            hb2 = true;
                                            hb.setBackground(mainbt)
                                        } else {
                                            layout088.removeView(name6);
                                            hb1 = false;
                                            hb2 = false;
                                            hb.setBackground(mainbt2)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(hb);
                                var _0x5b5ex2dc = new android.widget.TextView(ctx);
                                _0x5b5ex2dc.setText('BowAimbot');
                                _0x5b5ex2dc.setTextSize(15);
                                _0x5b5ex2dc.setGravity(Gravity.CENTER);
                                _0x5b5ex2dc.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex2dc.setBackground(snipered ? mainbt : mainbt2);
                                _0x5b5ex2dc.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!snipered) {
                                            layout088.addView(name7);
                                            sniperss = true;
                                            sniperhh = false;
                                            snipered = true;
                                            _0x5b5ex2dc.setBackground(mainbt)
                                        } else {
                                            layout088.removeView(name7);
                                            sniperss = false;
                                            sniperhh = true;
                                            snipered = false;
                                            _0x5b5ex2dc.setBackground(mainbt2)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex2dc);
                                var _0x5b5ex2dd = new android.widget.TextView(ctx);
                                _0x5b5ex2dd.setText('Fov');
                                _0x5b5ex2dd.setTextSize(15);
                                _0x5b5ex2dd.setGravity(Gravity.CENTER);
                                _0x5b5ex2dd.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex2dd.setBackground(pvped ? mainbt : mainbt2);
                                _0x5b5ex2dd.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!pvped) {
                                            layout088.addView(name12);
                                            ModPE.setFov(120);
                                            pvps = true;
                                            pvped = true;
                                            _0x5b5ex2dd.setBackground(mainbt)
                                        } else {
                                            layout088.removeView(name12);
                                            ModPE.resetFov();
                                            pvps = false;
                                            pvped = false;
                                            _0x5b5ex2dd.setBackground(mainbt2)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex2dd);
                                var _0x5b5ex2de = new android.widget.TextView(ctx);
                                _0x5b5ex2de.setText('AutoSword');
                                _0x5b5ex2de.setTextSize(15);
                                _0x5b5ex2de.setGravity(Gravity.CENTER);
                                _0x5b5ex2de.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex2de.setBackground(autoswordss ? mainbt : mainbt2);
                                _0x5b5ex2de.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!autoswordss) {
                                            layout088.addView(name10);
                                            xan('Sword Must Be In Slot 1');
                                            autoswords = true;
                                            autoswordss = true;
                                            _0x5b5ex2de.setBackground(mainbt)
                                        } else {
                                            layout088.removeView(name10);
                                            autoswords = false;
                                            autoswordss = false;
                                            _0x5b5ex2de.setBackground(mainbt2)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex2de);
                                var _0x5b5ex2df = new android.widget.TextView(ctx);
                                _0x5b5ex2df.setText('Velocity');
                                _0x5b5ex2df.setTextSize(15);
                                _0x5b5ex2df.setGravity(Gravity.CENTER);
                                _0x5b5ex2df.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex2df.setBackground(antikbed ? mainbt : mainbt2);
                                _0x5b5ex2df.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!antikbed) {
                                            layout088.addView(name9);
                                            antikbss = true;
                                            antikbed = true;
                                            _0x5b5ex2df.setBackground(mainbt)
                                        } else {
                                            layout088.removeView(name9);
                                            antikbss = false;
                                            antikbed = false;
                                            _0x5b5ex2df.setBackground(mainbt2)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex2df);
                                var _0x5b5ex2e0 = new android.widget.TextView(ctx);
                                _0x5b5ex2e0.setText('ZoomBow');
                                _0x5b5ex2e0.setTextSize(15);
                                _0x5b5ex2e0.setGravity(Gravity.CENTER);
                                _0x5b5ex2e0.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex2e0.setBackground(aimboted ? mainbt : mainbt2);
                                _0x5b5ex2e0.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!zbow1) {
                                            layout088.addView(bow);
                                            zbow1 = true;
                                            _0x5b5ex2e0.setBackground(mainbt)
                                        } else {
                                            layout088.removeView(bow);
                                            zbow1 = false;
                                            _0x5b5ex2e0.setBackground(mainbt2)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex2e0);
                                menu009 = new PopupWindow(_0x5b5ex2d2, ctx.getWindowManager().getDefaultDisplay().getWidth() / 6, ctx.getWindowManager().getDefaultDisplay().getHeight() / 2);
                                menu009.setAnimationStyle(android.R.style.Animation_Translucent);
                                menu009.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.TOP, 0, 0)
                            } catch (error) {
                                Toast.makeText(ctx, 'Template Error: ' + error, 1).show()
                            }
                        }
                    }))
                }

                function _0x5b5ex2e1() {
                    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
                    ctx.runOnUiThread(new java.lang.Runnable({
                        run: function() {
                            try {
                                var _0x5b5ex2a8 = new android.widget.LinearLayout(ctx);
                                var _0x5b5ex2a9 = new android.widget.ScrollView(ctx);
                                var _0x5b5ex2e2 = new android.widget.LinearLayout(ctx);
                                _0x5b5ex2a8.setOrientation(1);
                                _0x5b5ex2a8.setBackground(bg5);
                                _0x5b5ex2e2.setOrientation(1);
                                _0x5b5ex2a9.addView(_0x5b5ex2a8);
                                _0x5b5ex2e2.addView(_0x5b5ex2a9);
                                var _0x5b5ex2e3 = new TextView(ctx);
                                _0x5b5ex2e3.setTextSize(18);
                                _0x5b5ex2e3.setText('Player');
                                _0x5b5ex2e3.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex2e3.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                                _0x5b5ex2e3.getBackground().setAlpha(150);
                                _0x5b5ex2e3.setGravity(Gravity.CENTER);
                                _0x5b5ex2e3.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {}
                                }));
                                _0x5b5ex2e3.setOnTouchListener(new android.view.View.OnTouchListener({
                                    onTouch: function(view, _0x5b5exa) {
                                        try {
                                            if (!movingui5) {
                                                return false
                                            };
                                            switch (_0x5b5exa.getAction()) {
                                                case android.view.MotionEvent.ACTION_DOWN:
                                                    dx = mPosX - _0x5b5exa.getRawX();
                                                    dy = mPosY - _0x5b5exa.getRawY();
                                                    break;
                                                case android.view.MotionEvent.ACTION_MOVE:
                                                    mPosX = (_0x5b5exa.getRawX() + dx);
                                                    mPosY = (_0x5b5exa.getRawY() + dy);
                                                    menu005.update(mPosX, mPosY - 15, -1, -1);
                                                    break;
                                                case android.view.MotionEvent.ACTION_UP:
                                                    ;
                                                case android.view.MotionEvent.ACTION_CANCEL:
                                                    moving = false;
                                                    break
                                            }
                                        } catch (e) {};
                                        return true
                                    }
                                }));
                                _0x5b5ex2e3.setOnLongClickListener(new android.view.View.OnLongClickListener({
                                    onLongClick: function(_0x5b5exb, _0x5b5exc) {
                                        movingui5 = true;
                                        return true
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex2e3);
                                var _0x5b5ex2e4 = new android.widget.TextView(ctx);
                                _0x5b5ex2e4.setText('Jump');
                                _0x5b5ex2e4.setTextSize(15);
                                _0x5b5ex2e4.setGravity(Gravity.CENTER);
                                _0x5b5ex2e4.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex2e4.setBackground(jumpp ? mainbt : mainbt2);
                                _0x5b5ex2e4.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!jumpp) {
                                            _0x5b5ex2c1();
                                            layout088.addView(name55);
                                            jumpp = true;
                                            _0x5b5ex2e4.setBackground(mainbt)
                                        } else {
                                            GUI2.dismiss();
                                            layout088.removeView(name55);
                                            jumpp = false;
                                            _0x5b5ex2e4.setBackground(mainbt2)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex2e4);
                                var _0x5b5ex2e5 = new android.widget.TextView(ctx);
                                _0x5b5ex2e5.setText('Elevator');
                                _0x5b5ex2e5.setTextSize(15);
                                _0x5b5ex2e5.setGravity(Gravity.CENTER);
                                _0x5b5ex2e5.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex2e5.setBackground(main ? mainbt : mainbt2);
                                _0x5b5ex2e5.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!main) {
                                            layout088.addView(name56);
                                            showElevatorBtn();
                                            main = true;
                                            _0x5b5ex2e5.setBackground(mainbt)
                                        } else {
                                            layout088.removeView(name56);
                                            GUIe.dismiss();
                                            main = false;
                                            _0x5b5ex2e5.setBackground(mainbt2)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex2e5);
                                var _0x5b5ex2e6 = new android.widget.TextView(ctx);
                                _0x5b5ex2e6.setText('CrouchTP');
                                _0x5b5ex2e6.setTextSize(15);
                                _0x5b5ex2e6.setGravity(Gravity.CENTER);
                                _0x5b5ex2e6.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex2e6.setBackground(crouchtp ? mainbt : mainbt2);
                                _0x5b5ex2e6.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!crouchtp) {
                                            layout088.addView(ladder);
                                            crouchtp = true;
                                            _0x5b5ex2e6.setBackground(mainbt)
                                        } else {
                                            layout088.removeView(ladder);
                                            crouchtp = false;
                                            _0x5b5ex2e6.setBackground(mainbt2)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex2e6);
                                var walk = new android.widget.TextView(ctx);
                                walk.setText('SafeWalk');
                                walk.setTextSize(15);
                                walk.setGravity(Gravity.CENTER);
                                walk.setTextColor(android.graphics.Color.YELLOW);
                                walk.setBackground(safewalk ? mainbt : mainbt2);
                                walk.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!safewalk) {
                                            layout088.addView(safe);
                                            xan('To activate jump on a block and itll stay as a SafeWalk and be able to walk normally');
                                            safewalk = true;
                                            print('Having Errors with safewalk;');
                                            walk.setBackground(mainbt)
                                        } else {
                                            layout088.removeView(safe);
                                            ModPE.setGameSpeed(20);
                                            safewalk = false;
                                            walk.setBackground(mainbt2)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(walk);
                                var _0x5b5ex2dc = new android.widget.TextView(ctx);
                                _0x5b5ex2dc.setText('NoFall');
                                _0x5b5ex2dc.setTextSize(15);
                                _0x5b5ex2dc.setGravity(Gravity.CENTER);
                                _0x5b5ex2dc.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex2dc.setBackground(nofall1 ? mainbt : mainbt2);
                                _0x5b5ex2dc.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!nofall1) {
                                            layout088.addView(name71);
                                            nofall1 = true;
                                            nofall2 = true;
                                            _0x5b5ex2dc.setBackground(mainbt)
                                        } else {
                                            layout088.removeView(name71);
                                            nofall1 = false;
                                            nofall2 = false;
                                            _0x5b5ex2dc.setBackground(mainbt2)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex2dc);
                                var _0x5b5ex2e7 = new android.widget.TextView(ctx);
                                _0x5b5ex2e7.setText('TapTP');
                                _0x5b5ex2e7.setTextSize(15);
                                _0x5b5ex2e7.setGravity(Gravity.CENTER);
                                _0x5b5ex2e7.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex2e7.setBackground(taptped ? mainbt : mainbt2);
                                _0x5b5ex2e7.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!taptped) {
                                            layout088.addView(name31);
                                            taptpss = true;
                                            taptped = true;
                                            _0x5b5ex2e7.setBackground(mainbt)
                                        } else {
                                            layout088.removeView(name31);
                                            taptpss = false;
                                            taptped = false;
                                            _0x5b5ex2e7.setBackground(mainbt2)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex2e7);
                                var _0x5b5ex2e8 = new android.widget.TextView(ctx);
                                _0x5b5ex2e8.setText('AutoTower');
                                _0x5b5ex2e8.setTextSize(15);
                                _0x5b5ex2e8.setGravity(Gravity.CENTER);
                                _0x5b5ex2e8.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex2e8.setBackground(at1 ? mainbt : mainbt2);
                                _0x5b5ex2e8.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!at1) {
                                            layout088.addView(name58);
                                            at1 = true;
                                            _0x5b5ex2e8.setBackground(mainbt)
                                        } else {
                                            layout088.removeView(name58);
                                            at1 = false;
                                            _0x5b5ex2e8.setBackground(mainbt2)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex2e8);
                                var _0x5b5ex2e9 = new android.widget.TextView(ctx);
                                _0x5b5ex2e9.setText('BunnyHop');
                                _0x5b5ex2e9.setTextSize(15);
                                _0x5b5ex2e9.setGravity(Gravity.CENTER);
                                _0x5b5ex2e9.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex2e9.setBackground(bhopl ? mainbt : mainbt2);
                                _0x5b5ex2e9.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!bhopl) {
                                            layout088.addView(bhop);
                                            bhopl = true;
                                            ModPE.setGameSpeed(23);
                                            _0x5b5ex2e9.setBackground(mainbt)
                                        } else {
                                            layout088.removeView(bhop);
                                            bhopl = false;
                                            ModPE.setGameSpeed(20);
                                            _0x5b5ex2e9.setBackground(mainbt2)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex2e9);
                                var _0x5b5ex2ea = new android.widget.TextView(ctx);
                                _0x5b5ex2ea.setText('AutoBreak');
                                _0x5b5ex2ea.setTextSize(15);
                                _0x5b5ex2ea.setGravity(Gravity.CENTER);
                                _0x5b5ex2ea.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex2ea.setBackground(destroy ? mainbt : mainbt2);
                                _0x5b5ex2ea.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!destroy) {
                                            layout088.addView(des);
                                            destroy = true;
                                            _0x5b5ex2ea.setBackground(mainbt)
                                        } else {
                                            layout088.removeView(des);
                                            destroy = false;
                                            _0x5b5ex2ea.setBackground(mainbt2)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex2ea);
                                var _0x5b5ex2eb = new android.widget.TextView(ctx);
                                _0x5b5ex2eb.setText('Float');
                                _0x5b5ex2eb.setTextSize(15);
                                _0x5b5ex2eb.setGravity(Gravity.CENTER);
                                _0x5b5ex2eb.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex2eb.setBackground(ffbed ? mainbt : mainbt2);
                                _0x5b5ex2eb.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!ffbed) {
                                            layout088.addView(name28);
                                            ffb = true;
                                            ffbed = true;
                                            setPosition(getPlayerEnt(), Player.getX(), Player.getY() + 0.8, Player.getZ());
                                            _0x5b5ex2eb.setBackground(mainbt)
                                        } else {
                                            layout088.removeView(name28);
                                            ffb = false;
                                            ffbed = false;
                                            _0x5b5ex2eb.setBackground(mainbt2)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex2eb);
                                var _0x5b5ex2ec = new android.widget.TextView(ctx);
                                _0x5b5ex2ec.setText('FastBridge');
                                _0x5b5ex2ec.setTextSize(15);
                                _0x5b5ex2ec.setGravity(Gravity.CENTER);
                                _0x5b5ex2ec.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex2ec.setBackground(fastb2 ? mainbt : mainbt2);
                                _0x5b5ex2ec.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!fastb2) {
                                            layout088.addView(name70);
                                            fastb2 = true;
                                            _0x5b5ex2ec.setBackground(mainbt)
                                        } else {
                                            layout088.removeView(name70);
                                            fastb2 = false;
                                            _0x5b5ex2ec.setBackground(mainbt2)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex2ec);
                                menu005 = new PopupWindow(_0x5b5ex2e2, ctx.getWindowManager().getDefaultDisplay().getWidth() / 6, ctx.getWindowManager().getDefaultDisplay().getHeight() / 2);
                                menu005.setAnimationStyle(android.R.style.Animation_Translucent);
                                menu005.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 350, 0)
                            } catch (error) {
                                Toast.makeText(ctx, 'Template Error: ' + error, 1).show()
                            }
                        }
                    }))
                }

                function _0x5b5ex2ed() {
                    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
                    ctx.runOnUiThread(new java.lang.Runnable({
                        run: function() {
                            try {
                                var _0x5b5ex2a8 = new android.widget.LinearLayout(ctx);
                                var _0x5b5ex2a9 = new android.widget.ScrollView(ctx);
                                var _0x5b5ex2ee = new android.widget.LinearLayout(ctx);
                                _0x5b5ex2a8.setOrientation(1);
                                _0x5b5ex2a8.setBackground(bg5);
                                _0x5b5ex2ee.setOrientation(1);
                                _0x5b5ex2a9.addView(_0x5b5ex2a8);
                                _0x5b5ex2ee.addView(_0x5b5ex2a9);
                                var _0x5b5ex2ef = new TextView(ctx);
                                _0x5b5ex2ef.setTextSize(18);
                                _0x5b5ex2ef.setText('Movement');
                                _0x5b5ex2ef.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex2ef.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                                _0x5b5ex2ef.getBackground().setAlpha(150);
                                _0x5b5ex2ef.setGravity(Gravity.CENTER);
                                _0x5b5ex2ef.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {}
                                }));
                                _0x5b5ex2ef.setOnTouchListener(new android.view.View.OnTouchListener({
                                    onTouch: function(view, _0x5b5exa) {
                                        try {
                                            if (!movingui66) {
                                                return false
                                            };
                                            switch (_0x5b5exa.getAction()) {
                                                case android.view.MotionEvent.ACTION_DOWN:
                                                    dx = mPosX - _0x5b5exa.getRawX();
                                                    dy = mPosY - _0x5b5exa.getRawY();
                                                    break;
                                                case android.view.MotionEvent.ACTION_MOVE:
                                                    mPosX = (_0x5b5exa.getRawX() + dx);
                                                    mPosY = (_0x5b5exa.getRawY() + dy);
                                                    menu66.update(mPosX, mPosY - 15, -1, -1);
                                                    break;
                                                case android.view.MotionEvent.ACTION_UP:
                                                    ;
                                                case android.view.MotionEvent.ACTION_CANCEL:
                                                    moving = false;
                                                    break
                                            }
                                        } catch (e) {};
                                        return true
                                    }
                                }));
                                _0x5b5ex2ef.setOnLongClickListener(new android.view.View.OnLongClickListener({
                                    onLongClick: function(_0x5b5exb, _0x5b5exc) {
                                        movingui66 = true;
                                        return true
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex2ef);
                                var _0x5b5ex2f0 = new android.widget.TextView(ctx);
                                _0x5b5ex2f0.setText('Spider');
                                _0x5b5ex2f0.setTextSize(15);
                                _0x5b5ex2f0.setGravity(Gravity.CENTER);
                                _0x5b5ex2f0.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex2f0.setBackground(cstepss ? mainbt : mainbt2);
                                _0x5b5ex2f0.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!cstepss) {
                                            layout088.addView(name39);
                                            csteps = true;
                                            cstepss = true;
                                            _0x5b5ex2f0.setBackground(mainbt)
                                        } else {
                                            layout088.removeView(name39);
                                            csteps = false;
                                            cstepss = false;
                                            _0x5b5ex2f0.setBackground(mainbt2)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex2f0);
                                var _0x5b5ex2f1 = new android.widget.TextView(ctx);
                                _0x5b5ex2f1.setText('HighJump');
                                _0x5b5ex2f1.setTextSize(15);
                                _0x5b5ex2f1.setGravity(Gravity.CENTER);
                                _0x5b5ex2f1.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex2f1.setBackground(nobob ? mainbt : mainbt2);
                                _0x5b5ex2f1.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!highjump) {
                                            layout088.addView(high);
                                            highjump = true;
                                            Entity.addEffect(Player.getEntity(), MobEffect.jump, 999999, 4, false, false);
                                            _0x5b5ex2f1.setBackground(mainbt)
                                        } else {
                                            layout088.removeView(high);
                                            highjump = false;
                                            Entity.removeAllEffects(getPlayerEnt());
                                            _0x5b5ex2f1.setBackground(mainbt2)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex2f1);
                                var _0x5b5ex2f2 = new android.widget.TextView(ctx);
                                _0x5b5ex2f2.setText('NDG');
                                _0x5b5ex2f2.setTextSize(15);
                                _0x5b5ex2f2.setGravity(Gravity.CENTER);
                                _0x5b5ex2f2.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex2f2.setBackground(ndglidess ? mainbt : mainbt2);
                                _0x5b5ex2f2.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!ndglidess) {
                                            layout088.addView(name54);
                                            ndglidess = true;
                                            _0x5b5ex2f2.setBackground(mainbt)
                                        } else {
                                            layout088.removeView(name54);
                                            ndglidess = false;
                                            _0x5b5ex2f2.setBackground(mainbt2)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex2f2);
                                var _0x5b5ex2f3 = new android.widget.TextView(ctx);
                                _0x5b5ex2f3.setText('ByGlide');
                                _0x5b5ex2f3.setTextSize(15);
                                _0x5b5ex2f3.setGravity(Gravity.CENTER);
                                _0x5b5ex2f3.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex2f3.setBackground(glidess ? mainbt : mainbt2);
                                _0x5b5ex2f3.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!glidess) {
                                            layout088.addView(by);
                                            glidess = true;
                                            _0x5b5ex2f3.setBackground(mainbt)
                                        } else {
                                            layout088.removeView(by);
                                            glidess = false;
                                            _0x5b5ex2f3.setBackground(mainbt2)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex2f3);
                                var _0x5b5ex2f4 = new android.widget.TextView(ctx);
                                _0x5b5ex2f4.setText('GlideFlight');
                                _0x5b5ex2f4.setTextSize(15);
                                _0x5b5ex2f4.setGravity(Gravity.CENTER);
                                _0x5b5ex2f4.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex2f4.setBackground(byglidee ? mainbt : mainbt2);
                                _0x5b5ex2f4.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!byglidee) {
                                            layout088.addView(gflight);
                                            byglidee = true;
                                            _0x5b5ex2f4.setBackground(mainbt)
                                        } else {
                                            layout088.removeView(gflight);
                                            byglidee = false;
                                            _0x5b5ex2f4.setBackground(mainbt2)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex2f4);
                                var _0x5b5ex2f5 = new android.widget.TextView(ctx);
                                _0x5b5ex2f5.setText('Scaffold');
                                _0x5b5ex2f5.setTextSize(15);
                                _0x5b5ex2f5.setGravity(Gravity.CENTER);
                                _0x5b5ex2f5.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex2f5.setBackground(wscaff1 ? mainbt : mainbt2);
                                _0x5b5ex2f5.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!wscaff1) {
                                            layout088.addView(name42);
                                            wscaff1 = true;
                                            _0x5b5ex2f5.setBackground(mainbt)
                                        } else {
                                            layout088.removeView(name42);
                                            wscaff1 = false;
                                            _0x5b5ex2f5.setBackground(mainbt2)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex2f5);
                                var _0x5b5ex2f6 = new android.widget.TextView(ctx);
                                _0x5b5ex2f6.setText('Dolphin');
                                _0x5b5ex2f6.setTextSize(15);
                                _0x5b5ex2f6.setGravity(Gravity.CENTER);
                                _0x5b5ex2f6.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex2f6.setBackground(bf1 ? mainbt : mainbt2);
                                _0x5b5ex2f6.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!bf1) {
                                            layout088.addView(dol);
                                            bf1 = true;
                                            bf2 = true;
                                            _0x5b5ex2f6.setBackground(mainbt)
                                        } else {
                                            layout088.removeView(dol);
                                            bf1 = false;
                                            b2 = false;
                                            _0x5b5ex2f6.setBackground(mainbt2)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex2f6);
                                var _0x5b5ex2f7 = new android.widget.TextView(ctx);
                                _0x5b5ex2f7.setText('Flight');
                                _0x5b5ex2f7.setTextSize(15);
                                _0x5b5ex2f7.setGravity(Gravity.CENTER);
                                _0x5b5ex2f7.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex2f7.setBackground(lbsg1 ? mainbt : mainbt2);
                                _0x5b5ex2f7.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!lbsg1) {
                                            layout088.addView(module);
                                            lbsg1 = true;
                                            _0x5b5ex2f7.setBackground(mainbt)
                                        } else {
                                            layout088.removeView(module);
                                            lbsg1 = false;
                                            _0x5b5ex2f7.setBackground(mainbt2)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex2f7);
                                var _0x5b5ex2f8 = new android.widget.TextView(ctx);
                                _0x5b5ex2f8.setText('AutoWalk');
                                _0x5b5ex2f8.setTextSize(15);
                                _0x5b5ex2f8.setGravity(Gravity.CENTER);
                                _0x5b5ex2f8.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex2f8.setBackground(autowalkss ? mainbt : mainbt2);
                                _0x5b5ex2f8.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!autowalkss) {
                                            layout088.addView(walk);
                                            autowalkss = true;
                                            _0x5b5ex2f8.setBackground(mainbt)
                                        } else {
                                            layout088.removeView(walk);
                                            autowalkss = false;
                                            _0x5b5ex2f8.setBackground(mainbt2)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex2f8);
                                var _0x5b5ex2f9 = new android.widget.TextView(ctx);
                                _0x5b5ex2f9.setText('Speed');
                                _0x5b5ex2f9.setTextSize(15);
                                _0x5b5ex2f9.setGravity(Gravity.CENTER);
                                _0x5b5ex2f9.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex2f9.setBackground(beta1 ? mainbt : mainbt2);
                                _0x5b5ex2f9.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!beta1) {
                                            layout088.addView(name38);
                                            beta1 = true;
                                            ModPE.setGameSpeed(30);
                                            _0x5b5ex2f9.setBackground(mainbt)
                                        } else {
                                            layout088.removeView(name38);
                                            beta1 = false;
                                            ModPE.setGameSpeed(20);
                                            _0x5b5ex2f9.setBackground(mainbt2)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex2f9);
                                menu66 = new PopupWindow(_0x5b5ex2ee, ctx.getWindowManager().getDefaultDisplay().getWidth() / 6, ctx.getWindowManager().getDefaultDisplay().getHeight() / 2);
                                menu66.setAnimationStyle(android.R.style.Animation_Translucent);
                                menu66.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 450, 0)
                            } catch (error) {
                                Toast.makeText(ctx, 'Template Error: ' + error, 1).show()
                            }
                        }
                    }))
                }

                function _0x5b5ex2fa() {
                    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
                    ctx.runOnUiThread(new java.lang.Runnable({
                        run: function() {
                            try {
                                var _0x5b5ex2a8 = new android.widget.LinearLayout(ctx);
                                var _0x5b5ex2a9 = new android.widget.ScrollView(ctx);
                                var _0x5b5ex2fb = new android.widget.LinearLayout(ctx);
                                _0x5b5ex2a8.setOrientation(1);
                                _0x5b5ex2a8.setBackground(bg5);
                                _0x5b5ex2fb.setOrientation(1);
                                _0x5b5ex2a9.addView(_0x5b5ex2a8);
                                _0x5b5ex2fb.addView(_0x5b5ex2a9);
                                var _0x5b5ex2fc = new TextView(ctx);
                                _0x5b5ex2fc.setTextSize(18);
                                _0x5b5ex2fc.setText('Keybinds');
                                _0x5b5ex2fc.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex2fc.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                                _0x5b5ex2fc.getBackground().setAlpha(150);
                                _0x5b5ex2fc.setGravity(Gravity.CENTER);
                                _0x5b5ex2fc.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {}
                                }));
                                _0x5b5ex2fc.setOnTouchListener(new android.view.View.OnTouchListener({
                                    onTouch: function(view, _0x5b5exa) {
                                        try {
                                            if (!movingui666) {
                                                return false
                                            };
                                            switch (_0x5b5exa.getAction()) {
                                                case android.view.MotionEvent.ACTION_DOWN:
                                                    dx = mPosX - _0x5b5exa.getRawX();
                                                    dy = mPosY - _0x5b5exa.getRawY();
                                                    break;
                                                case android.view.MotionEvent.ACTION_MOVE:
                                                    mPosX = (_0x5b5exa.getRawX() + dx);
                                                    mPosY = (_0x5b5exa.getRawY() + dy);
                                                    menu666.update(mPosX, mPosY - 15, -1, -1);
                                                    break;
                                                case android.view.MotionEvent.ACTION_UP:
                                                    ;
                                                case android.view.MotionEvent.ACTION_CANCEL:
                                                    movingui666 = false;
                                                    break
                                            }
                                        } catch (e) {};
                                        return true
                                    }
                                }));
                                _0x5b5ex2fc.setOnLongClickListener(new android.view.View.OnLongClickListener({
                                    onLongClick: function(_0x5b5exb, _0x5b5exc) {
                                        movingui666 = true;
                                        return true
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex2fc);
                                var _0x5b5ex2fd = new android.widget.TextView(ctx);
                                _0x5b5ex2fd.setText('Key: Custom');
                                _0x5b5ex2fd.setTextSize(15);
                                _0x5b5ex2fd.setGravity(Gravity.CENTER);
                                _0x5b5ex2fd.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex2fd.setBackground(guii ? mainbt : mainbt2);
                                _0x5b5ex2fd.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!guii) {
                                            _0x5b5ex2b7();
                                            guii = true;
                                            _0x5b5ex2fd.setBackground(mainbt)
                                        } else {
                                            GUI090.dismiss();
                                            guii = false;
                                            _0x5b5ex2fd.setBackground(mainbt2)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex2fd);
                                var _0x5b5ex2fe = new android.widget.TextView(ctx);
                                _0x5b5ex2fe.setText('Key: Boost');
                                _0x5b5ex2fe.setTextSize(15);
                                _0x5b5ex2fe.setGravity(Gravity.CENTER);
                                _0x5b5ex2fe.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex2fe.setBackground(boosti ? mainbt : mainbt2);
                                _0x5b5ex2fe.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!boosti) {
                                            layout088.addView(boost);
                                            _0x5b5ex2c6();
                                            boosti = true;
                                            _0x5b5ex2fe.setBackground(mainbt)
                                        } else {
                                            layout088.removeView(boost);
                                            BOOST.dismiss();
                                            boosti = false;
                                            _0x5b5ex2fe.setBackground(mainbt2)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex2fe);
                                var _0x5b5ex2ff = new android.widget.TextView(ctx);
                                _0x5b5ex2ff.setText('Key: Escape');
                                _0x5b5ex2ff.setTextSize(15);
                                _0x5b5ex2ff.setGravity(Gravity.CENTER);
                                _0x5b5ex2ff.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex2ff.setBackground(crunch ? mainbt : mainbt2);
                                _0x5b5ex2ff.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!crunch) {
                                            crunch = true;
                                            _0x5b5ex2c3();
                                            layout088.addView(liqq);
                                            _0x5b5ex2ff.setBackground(mainbt)
                                        } else {
                                            ESCAPE.dismiss();
                                            layout088.removeView(liqq);
                                            crunch = false;
                                            _0x5b5ex2ff.setBackground(mainbt2)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex2ff);
                                var _0x5b5ex300 = new android.widget.TextView(ctx);
                                _0x5b5ex300.setText('Key: CrossHair');
                                _0x5b5ex2ff.setTextSize(15);
                                _0x5b5ex300.setGravity(Gravity.CENTER);
                                _0x5b5ex300.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex300.setBackground(lair ? mainbt : mainbt2);
                                _0x5b5ex300.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!lair) {
                                            lair = true;
                                            _0x5b5ex2ca();
                                            layout088.addView(crosshair);
                                            _0x5b5ex300.setBackground(mainbt)
                                        } else {
                                            CROS.dismiss();
                                            layout088.removeView(crosshair);
                                            lair = false;
                                            _0x5b5ex300.setBackground(mainbt2)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex300);
                                menu666 = new PopupWindow(_0x5b5ex2fb, ctx.getWindowManager().getDefaultDisplay().getWidth() / 6, ctx.getWindowManager().getDefaultDisplay().getHeight() / 2);
                                menu666.setAnimationStyle(android.R.style.Animation_Translucent);
                                menu666.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.BOTTOM, 0, 0)
                            } catch (error) {
                                Toast.makeText(ctx, 'Template Error: ' + error, 1).show()
                            }
                        }
                    }))
                }

                function _0x5b5ex301() {
                    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
                    ctx.runOnUiThread(new java.lang.Runnable({
                        run: function() {
                            try {
                                var _0x5b5ex2a8 = new android.widget.LinearLayout(ctx);
                                var _0x5b5ex2a9 = new android.widget.ScrollView(ctx);
                                var _0x5b5ex302 = new android.widget.LinearLayout(ctx);
                                _0x5b5ex2a8.setOrientation(1);
                                _0x5b5ex2a8.setBackground(bg5);
                                _0x5b5ex302.setOrientation(1);
                                _0x5b5ex2a9.addView(_0x5b5ex2a8);
                                _0x5b5ex302.addView(_0x5b5ex2a9);
                                var _0x5b5ex303 = new TextView(ctx);
                                _0x5b5ex303.setTextSize(18);
                                _0x5b5ex303.setText('Other');
                                _0x5b5ex303.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex303.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                                _0x5b5ex303.getBackground().setAlpha(150);
                                _0x5b5ex303.setGravity(Gravity.CENTER);
                                _0x5b5ex303.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {}
                                }));
                                _0x5b5ex303.setOnTouchListener(new android.view.View.OnTouchListener({
                                    onTouch: function(view, _0x5b5exa) {
                                        try {
                                            if (!movingui660) {
                                                return false
                                            };
                                            switch (_0x5b5exa.getAction()) {
                                                case android.view.MotionEvent.ACTION_DOWN:
                                                    dx = mPosX - _0x5b5exa.getRawX();
                                                    dy = mPosY - _0x5b5exa.getRawY();
                                                    break;
                                                case android.view.MotionEvent.ACTION_MOVE:
                                                    mPosX = (_0x5b5exa.getRawX() + dx);
                                                    mPosY = (_0x5b5exa.getRawY() + dy);
                                                    menu660.update(mPosX, mPosY - 15, -1, -1);
                                                    break;
                                                case android.view.MotionEvent.ACTION_UP:
                                                    ;
                                                case android.view.MotionEvent.ACTION_CANCEL:
                                                    moving = false;
                                                    break
                                            }
                                        } catch (e) {};
                                        return true
                                    }
                                }));
                                _0x5b5ex303.setOnLongClickListener(new android.view.View.OnLongClickListener({
                                    onLongClick: function(_0x5b5exb, _0x5b5exc) {
                                        movingui660 = true;
                                        return true
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex303);
                                var _0x5b5ex304 = new android.widget.TextView(ctx);
                                _0x5b5ex304.setText('ESP+Tracers');
                                _0x5b5ex304.setTextSize(15);
                                _0x5b5ex304.setGravity(Gravity.CENTER);
                                _0x5b5ex304.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex304.setBackground(esp ? mainbt : mainbt2);
                                _0x5b5ex304.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!esp) {
                                            layout088.addView(name13);
                                            esps = true;
                                            esp = true;
                                            xan('Beta');
                                            _0x5b5ex304.setBackground(mainbt)
                                        } else {
                                            layout088.removeView(name13);
                                            esps = false;
                                            esp = false;
                                            _0x5b5ex304.setBackground(mainbt2)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex304);
                                var _0x5b5ex305 = new android.widget.TextView(ctx);
                                _0x5b5ex305.setText('Box');
                                _0x5b5ex305.setTextSize(15);
                                _0x5b5ex305.setGravity(Gravity.CENTER);
                                _0x5b5ex305.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex305.setBackground(boxx ? mainbt : mainbt2);
                                _0x5b5ex305.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!boxx) {
                                            layout088.addView(boxe);
                                            boxx = true;
                                            xan('Fun to use ig? Only works offline maybe on Realms');
                                            _0x5b5ex305.setBackground(mainbt)
                                        } else {
                                            layout088.removeView(boxe);
                                            boxx = false;
                                            _0x5b5ex305.setBackground(mainbt2)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex305);
                                var _0x5b5ex306 = new android.widget.TextView(ctx);
                                _0x5b5ex306.setText('ShowHealth');
                                _0x5b5ex306.setTextSize(15);
                                _0x5b5ex306.setGravity(Gravity.CENTER);
                                _0x5b5ex306.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex306.setBackground(lhealthss ? mainbt : mainbt2);
                                _0x5b5ex306.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!lhealthss) {
                                            lhealthss = true;
                                            _0x5b5ex306.setBackground(mainbt)
                                        } else {
                                            lhealthss = false;
                                            _0x5b5ex306.setBackground(mainbt2)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex306);
                                var _0x5b5ex307 = new android.widget.TextView(ctx);
                                _0x5b5ex307.setText('Detect');
                                _0x5b5ex307.setTextSize(15);
                                _0x5b5ex307.setGravity(Gravity.CENTER);
                                _0x5b5ex307.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex307.setBackground(antiad2 ? mainbt : mainbt2);
                                _0x5b5ex307.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!antiad2) {
                                            layout088.addView(name15);
                                            antiad2 = true;
                                            _0x5b5ex307.setBackground(mainbt)
                                        } else {
                                            layout088.removeView(name15);
                                            antiad2 = false;
                                            _0x5b5ex307.setBackground(mainbt2)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex307);
                                var surv = new android.widget.TextView(ctx);
                                surv.setText('FullBright');
                                surv.setTextSize(15);
                                surv.setGravity(Gravity.CENTER);
                                surv.setTextColor(android.graphics.Color.YELLOW);
                                surv.setBackground(surv2 ? mainbt : mainbt2);
                                surv.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!surv2) {
                                            layout088.addView(name26);
                                            Entity.addEffect(Player.getEntity(), MobEffect.nightVision, 999999, 100, false, false);
                                            surv1 = true;
                                            surv2 = true;
                                            surv.setBackground(mainbt)
                                        } else {
                                            layout088.removeView(name26);
                                            Entity.removeAllEffects(getPlayerEnt());
                                            surv1 = false;
                                            surv2 = false;
                                            surv.setBackground(mainbt2)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(surv);
                                var _0x5b5ex308 = new android.widget.TextView(ctx);
                                _0x5b5ex308.setText('WaterMan');
                                _0x5b5ex308.setTextSize(15);
                                _0x5b5ex308.setGravity(Gravity.CENTER);
                                _0x5b5ex308.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex308.setBackground(waterman ? mainbt : mainbt2);
                                _0x5b5ex308.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!waterman) {
                                            layout088.addView(man);
                                            Entity.addEffect(Player.getEntity(), MobEffect.waterBreathing, 999999, 100, false, false);
                                            waterman = true;
                                            _0x5b5ex308.setBackground(mainbt)
                                        } else {
                                            layout088.removeView(man);
                                            Entity.removeAllEffects(getPlayerEnt());
                                            waterman = false;
                                            _0x5b5ex308.setBackground(mainbt2)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex308);
                                var _0x5b5ex309 = new android.widget.TextView(ctx);
                                _0x5b5ex309.setText('FastMine');
                                _0x5b5ex309.setTextSize(15);
                                _0x5b5ex309.setGravity(Gravity.CENTER);
                                _0x5b5ex309.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex309.setBackground(fastmine ? mainbt : mainbt2);
                                _0x5b5ex309.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!fastmine) {
                                            layout088.addView(mine);
                                            fastmine = true;
                                            Entity.addEffect(Player.getEntity(), MobEffect.digSpeed, 999999, 200, false, false);
                                            _0x5b5ex309.setBackground(mainbt)
                                        } else {
                                            layout088.removeView(mine);
                                            fastmine = false;
                                            Entity.removeAllEffects(getPlayerEnt());
                                            _0x5b5ex309.setBackground(mainbt2)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex309);
                                var _0x5b5ex30a = new android.widget.TextView(ctx);
                                _0x5b5ex30a.setText('Xray [Beta]');
                                _0x5b5ex30a.setTextSize(15);
                                _0x5b5ex30a.setGravity(Gravity.CENTER);
                                _0x5b5ex30a.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex30a.setBackground(xray ? mainbt : mainbt2);
                                _0x5b5ex30a.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!xray) {
                                            layout088.addView(ray);
                                            xray = true;
                                            _0x5b5ex30a.setBackground(mainbt)
                                        } else {
                                            layout088.removeView(ray);
                                            xray = false;
                                            _0x5b5ex30a.setBackground(mainbt2)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex30a);
                                menu660 = new PopupWindow(_0x5b5ex302, ctx.getWindowManager().getDefaultDisplay().getWidth() / 6, ctx.getWindowManager().getDefaultDisplay().getHeight() / 2);
                                menu660.setAnimationStyle(android.R.style.Animation_Translucent);
                                menu660.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.BOTTOM, 0, 0)
                            } catch (error) {
                                Toast.makeText(ctx, 'Template Error: ' + error, 1).show()
                            }
                        }
                    }))
                }

                function _0x5b5ex30b() {
                    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
                    ctx.runOnUiThread(new java.lang.Runnable({
                        run: function() {
                            try {
                                var _0x5b5ex2a8 = new android.widget.LinearLayout(ctx);
                                var _0x5b5ex2a9 = new android.widget.ScrollView(ctx);
                                var _0x5b5ex30c = new android.widget.LinearLayout(ctx);
                                _0x5b5ex2a8.setOrientation(1);
                                _0x5b5ex2a8.setBackground(bg5);
                                _0x5b5ex30c.setOrientation(1);
                                _0x5b5ex2a9.addView(_0x5b5ex2a8);
                                _0x5b5ex30c.addView(_0x5b5ex2a9);
                                var _0x5b5ex30d = new TextView(ctx);
                                _0x5b5ex30d.setTextSize(18);
                                _0x5b5ex30d.setText('Exploits');
                                _0x5b5ex30d.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex30d.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                                _0x5b5ex30d.getBackground().setAlpha(150);
                                _0x5b5ex30d.setGravity(Gravity.CENTER);
                                _0x5b5ex30d.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {}
                                }));
                                _0x5b5ex30d.setOnTouchListener(new android.view.View.OnTouchListener({
                                    onTouch: function(view, _0x5b5exa) {
                                        try {
                                            if (!movinguiS) {
                                                return false
                                            };
                                            switch (_0x5b5exa.getAction()) {
                                                case android.view.MotionEvent.ACTION_DOWN:
                                                    dx = mPosX - _0x5b5exa.getRawX();
                                                    dy = mPosY - _0x5b5exa.getRawY();
                                                    break;
                                                case android.view.MotionEvent.ACTION_MOVE:
                                                    mPosX = (_0x5b5exa.getRawX() + dx);
                                                    mPosY = (_0x5b5exa.getRawY() + dy);
                                                    menuE.update(mPosX, mPosY - 15, -1, -1);
                                                    break;
                                                case android.view.MotionEvent.ACTION_UP:
                                                    ;
                                                case android.view.MotionEvent.ACTION_CANCEL:
                                                    moving = false;
                                                    break
                                            }
                                        } catch (e) {};
                                        return true
                                    }
                                }));
                                _0x5b5ex30d.setOnLongClickListener(new android.view.View.OnLongClickListener({
                                    onLongClick: function(_0x5b5exb, _0x5b5exc) {
                                        movinguiS = true;
                                        return true
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex30d);
                                var _0x5b5ex30e = new android.widget.TextView(ctx);
                                _0x5b5ex30e.setText('Enchant');
                                _0x5b5ex30e.setTextSize(15);
                                _0x5b5ex30e.setGravity(Gravity.CENTER);
                                _0x5b5ex30e.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex30e.setBackground(gmMakerrd ? mainbt : mainbt2);
                                _0x5b5ex30e.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!gmMakerrd) {
                                            (Player.enchant(Player.getSelectedSlotId(), Enchantment.SHARPNESS, 150));
                                            gmMakerrd = true;
                                            _0x5b5ex30e.setBackground(mainbt)
                                        } else {
                                            (Player.enchant(Player.getSelectedSlotId(), Enchantment.SHARPNESS, 350));
                                            gmMakerrd = false;
                                            _0x5b5ex30e.setBackground(mainbt2)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex30e);
                                var _0x5b5ex30f = new android.widget.TextView(ctx);
                                _0x5b5ex30f.setText('Diamond Armour');
                                _0x5b5ex30f.setTextSize(15);
                                _0x5b5ex30f.setGravity(Gravity.CENTER);
                                _0x5b5ex30f.setTextColor(android.graphics.Color.YELLOW);
                                _0x5b5ex30f.setBackground(gmMakerrd ? mainbt : mainbt2);
                                _0x5b5ex30f.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(_0x5b5ex8) {
                                        if (!_0x5b5ex310) {
                                            _0x5b5ex310 = true;
                                            Player.setArmorSlot(0, 310, 0);
                                            Player.setArmorSlot(1, 311, 0);
                                            Player.setArmorSlot(2, 312, 0);
                                            Player.setArmorSlot(3, 313, 0);
                                            _0x5b5ex30f.setBackground(mainbt)
                                        } else {
                                            _0x5b5ex310 = false;
                                            Player.setArmorSlot(0, 0, 0);
                                            Player.setArmorSlot(0, 0, 0);
                                            Player.setArmorSlot(0, 0, 0);
                                            Player.setArmorSlot(0, 0, 0);
                                            _0x5b5ex30f.setBackground(mainbt2)
                                        }
                                    }
                                }));
                                _0x5b5ex2a8.addView(_0x5b5ex30f);
                                var _0x5b5ex310 = false;
                                menuE = new PopupWindow(_0x5b5ex30c, ctx.getWindowManager().getDefaultDisplay().getWidth() / 6, ctx.getWindowManager().getDefaultDisplay().getHeight());
                                menuE.setAnimationStyle(android.R.style.Animation_Translucent);
                                menuE.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.CENTER, 0, 0)
                            } catch (error) {
                                Toast.makeText(ctx, 'Template Error: ' + error, 1).show()
                            }
                        }
                    }))
                }
                menu = new PopupWindow(_0x5b5ex2aa, ctx.getWindowManager().getDefaultDisplay().getWidth() / 6, ctx.getWindowManager().getDefaultDisplay().getHeight() / 2);
                menu.setAnimationStyle(android.R.style.Animation_Translucent);
                menu.setAnimationStyle(android.R.style.Animation_Toast);
                menu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.CENTER, 0, 0)
            } catch (error) {
                Toast.makeText(ctx, 'Error: ' + error, 1).show()
            }
        }
    }))
}

function modTick() {
    var px = Player.getX();
    var py = Player.getY();
    var pz = Player.getZ();
    var x = Player.getX();
    var y = Player.getY();
    var z = Player.getZ()
}
var players = Server.getAllPlayers();
var small = 7;
var ent = null;
for (var i = 0; i < players.length; i++) {
    var x = Entity.getX(players[i]) - getPlayerX();
    var y = Entity.getY(players[i]) - getPlayerY();
    var z = Entity.getZ(players[i]) - getPlayerZ();
    var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
    if (dist < small && dist > 0 && Entity.getHealth(players[i]) >= 1) {
        small = dist;
        ent = players[i]
    }
};
if (ent != null) {
    py = getPlayerY / Math.sqrt(x * x + y * y + z * z);
    var yaw = (180 / Math.PI) * Math.atan2(px, pz);
    var pitch = Math.asin(py) * (180 / Math.PI);
    var yw = -yw;
    var pt = -pt;
    setRot(getPlayerEnt(), yw, pt)
};

function getNearestEntity(_0x5b5ex318) {
    var _0x5b5ex42 = Entity.getAll();
    var players = Server.getAllPlayers();
    var small = _0x5b5ex318;
    var ent = null;
    for (var i = 0; i < _0x5b5ex42.length; i++) {
        var x = Entity.getX(_0x5b5ex42[i]) - getPlayerX();
        var y = Entity.getY(_0x5b5ex42[i]) - getPlayerY();
        var z = Entity.getZ(_0x5b5ex42[i]) - getPlayerZ();
        var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
        if (dist < small && dist > 0 && Entity.getEntityTypeId(_0x5b5ex42[i]) <= 63 && Entity.getHealth(_0x5b5ex42[i]) >= 1) {
            small = dist;
            ent = _0x5b5ex42[i]
        }
    };
    for (var i = 0; i < players.length; i++) {
        var x = Entity.getX(players[i]) - getPlayerX();
        var y = Entity.getY(players[i]) - getPlayerY();
        var z = Entity.getZ(players[i]) - getPlayerZ();
        var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
        if (dist < small && dist > 0 && Entity.getHealth(players[i]) >= 1) {
            small = dist;
            ent = players[i]
        }
    };
    return ent
}

function crosshairAimAt(ent, _0x5b5ex31a) {
    if (ent != null) {
        var x = Entity.getX(ent) - getPlayerX();
        var y = Entity.getY(ent) - getPlayerY();
        var z = Entity.getZ(ent) - getPlayerZ();
        if (_0x5b5ex31a != null && _0x5b5ex31a instanceof Array) {
            x = Entity.getX(ent) - _0x5b5ex31a[0];
            y = Entity.getY(ent) - _0x5b5ex31a[1];
            z = Entity.getZ(ent) - _0x5b5ex31a[2]
        };
        if (Entity.getEntityTypeId(ent) != 63) {
            y += 0.5
        };
        var a = 0.5 + Entity.getX(ent);
        var _0x5b5ex2d5 = Entity.getY(ent);
        var _0x5b5ex31b = 0.5 + Entity.getZ(ent);
        var _0x5b5ex31c = Math.sqrt(x * x + y * y + z * z);
        var y = y / _0x5b5ex31c;
        var pitch = Math.asin(y);
        pitch = pitch * 180.0 / Math.PI;
        pitch = -pitch;
        var yaw = -Math.atan2(a - (Player.getX() + 0.5), _0x5b5ex31b - (Player.getZ() + 0.5)) * (180 / Math.PI);
        if (pitch < 89 && pitch > -89) {
            Entity.setRot(Player.getEntity(), yaw, pitch)
        }
    }
}

function modTick() {
    if (aimbot) {
        var ent = getNearestEntity(7);
        if (ent != null) {
            crosshairAimAt(ent)
        }
    }
}

function toDirectionalVector(_0x5b5ex31e, yaw, pitch) {
    _0x5b5ex31e[0] = Math.cos(yaw) * Math.cos(pitch);
    _0x5b5ex31e[1] = Math.sin(pitch);
    _0x5b5ex31e[2] = Math.sin(yaw) * Math.cos(pitch)
}

function getNearestEntity(_0x5b5ex318) {
    var _0x5b5ex42 = Entity.getAll();
    var players = Server.getAllPlayers();
    var small = _0x5b5ex318;
    var ent = null;
    for (var i = 0; i < _0x5b5ex42.length; i++) {
        var x = Entity.getX(_0x5b5ex42[i]) - getPlayerX();
        var y = Entity.getY(_0x5b5ex42[i]) - getPlayerY();
        var z = Entity.getZ(_0x5b5ex42[i]) - getPlayerZ();
        var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
        if (dist < small && dist > 0 && Entity.getEntityTypeId(_0x5b5ex42[i]) <= 63 && Entity.getHealth(_0x5b5ex42[i]) >= 1) {
            small = dist;
            ent = _0x5b5ex42[i]
        }
    };
    for (var i = 0; i < players.length; i++) {
        var x = Entity.getX(players[i]) - getPlayerX();
        var y = Entity.getY(players[i]) - getPlayerY();
        var z = Entity.getZ(players[i]) - getPlayerZ();
        var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
        if (dist < small && dist > 0 && Entity.getHealth(players[i]) >= 1) {
            small = dist;
            ent = players[i]
        }
    };
    return ent
}

function crosshairAimAt(ent, _0x5b5ex31a) {
    if (ent != null) {
        var x = Entity.getX(ent) - getPlayerX();
        var y = Entity.getY(ent) - getPlayerY();
        var z = Entity.getZ(ent) - getPlayerZ();
        if (_0x5b5ex31a != null && _0x5b5ex31a instanceof Array) {
            x = Entity.getX(ent) - _0x5b5ex31a[0];
            y = Entity.getY(ent) - _0x5b5ex31a[1];
            z = Entity.getZ(ent) - _0x5b5ex31a[2]
        };
        if (Entity.getEntityTypeId(ent) != 63) {
            y += 0.5
        };
        var a = 0.5 + Entity.getX(ent);
        var _0x5b5ex2d5 = Entity.getY(ent);
        var _0x5b5ex31b = 0.5 + Entity.getZ(ent);
        var _0x5b5ex31c = Math.sqrt(x * x + y * y + z * z);
        var y = y / _0x5b5ex31c;
        var pitch = Math.asin(y);
        pitch = pitch * 180.0 / Math.PI;
        pitch = -pitch;
        var yaw = -Math.atan2(a - (Player.getX() + 0.5), _0x5b5ex31b - (Player.getZ() + 0.5)) * (180 / Math.PI);
        if (pitch < 89 && pitch > -89) {
            Entity.setRot(Player.getEntity(), yaw, pitch)
        }
    }
}

function modTick() {
    if (anti1) {
        var ent = getNearestEntity(5);
        if (ent != null) {
            crosshairAimAt(ent)
        }
    };
    var px = Player.getX();
    var py = Player.getY();
    var pz = Player.getZ();
    var x = Player.getX();
    var y = Player.getY();
    var z = Player.getZ()
}

function toDirectionalVector(_0x5b5ex31e, yaw, pitch) {
    _0x5b5ex31e[0] = Math.cos(yaw) * Math.cos(pitch);
    _0x5b5ex31e[1] = Math.sin(pitch);
    _0x5b5ex31e[3] = Math.sin(yaw) * Math.cos(pitch)
}

function attackHook(_0x5b5ex320, _0x5b5ex321) {
    if (_0x5b5ex320 == Player.getEntity() && hitaim && Entity.getHealth(_0x5b5ex321) > 0) {
        var ent = Player.getPointedEntity();
        var ent = getNearestEntity(8);
        if (ent != null) {
            crosshairAimAt(ent)
        }
    };
    if (jumphit) {
        setVelY(getPlayerEnt(), 0.4)
    };
    if (_0x5b5ex320 == Player.getEntity() && sidee && Entity.getHealth(_0x5b5ex321) > 0) {
        setPosition(getPlayerEnt(), Entity.getX(_0x5b5ex321), Entity.getY(_0x5b5ex321) + 4, Entity.getZ(_0x5b5ex321))
    };
    if (_0x5b5ex320 == Player.getEntity() && hitaim && Entity.getHealth(_0x5b5ex321) > 0) {
        var ent = Player.getPointedEntity();
        var ent = getNearestEntity(8);
        if (ent != null) {
            crosshairAimAt(ent)
        }
    };
    if (opaura) {
        setVelY(getPlayerEnt(), 0.5);
        var hit = getYaw() + 90;
        var _0x5b5ex2c9 = getPitch() - 180;
        x = Math.cos(hit * (Math.PI / 180));
        y = Math.sin(_0x5b5ex2c9 * (Math.PI / 180));
        z = Math.sin(hit * (Math.PI / 180));
        setVelX(Player.getEntity(), x * 1);
        setVelY(Player.getEntity(), y * 1);
        setVelZ(Player.getEntity(), z * 1)
    }
}

function getNearestEntity(_0x5b5ex318) {
    var _0x5b5ex42 = Entity.getAll();
    var players = Server.getAllPlayers();
    var small = _0x5b5ex318;
    var ent = null;
    for (var i = 0; i < _0x5b5ex42.length; i++) {
        var x = Entity.getX(_0x5b5ex42[i]) - getPlayerX();
        var y = Entity.getY(_0x5b5ex42[i]) - getPlayerY();
        var z = Entity.getZ(_0x5b5ex42[i]) - getPlayerZ();
        var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
        if (dist < small && dist > 0 && Entity.getEntityTypeId(_0x5b5ex42[i]) <= 63 && Entity.getHealth(_0x5b5ex42[i]) >= 1) {
            small = dist;
            ent = _0x5b5ex42[i]
        }
    };
    for (var i = 0; i < players.length; i++) {
        var x = Entity.getX(players[i]) - getPlayerX();
        var y = Entity.getY(players[i]) - getPlayerY();
        var z = Entity.getZ(players[i]) - getPlayerZ();
        var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
        if (dist < small && dist > 0 && Entity.getHealth(players[i]) >= 1) {
            small = dist;
            ent = players[i]
        }
    };
    return ent
}

function crosshairAimAt(ent, _0x5b5ex31a) {
    if (ent != null) {
        var x = Entity.getX(ent) - getPlayerX();
        var y = Entity.getY(ent) - getPlayerY();
        var z = Entity.getZ(ent) - getPlayerZ();
        if (_0x5b5ex31a != null && _0x5b5ex31a instanceof Array) {
            x = Entity.getX(ent) - _0x5b5ex31a[0];
            y = Entity.getY(ent) - _0x5b5ex31a[1];
            z = Entity.getZ(ent) - _0x5b5ex31a[2]
        };
        if (Entity.getEntityTypeId(ent) != 63) {
            y += 0.5
        };
        var a = 0.5 + Entity.getX(ent);
        var _0x5b5ex2d5 = Entity.getY(ent);
        var _0x5b5ex31b = 0.5 + Entity.getZ(ent);
        var _0x5b5ex31c = Math.sqrt(x * x + y * y + z * z);
        var y = y / _0x5b5ex31c;
        var pitch = Math.asin(y);
        pitch = pitch * 180.0 / Math.PI;
        pitch = -pitch;
        var yaw = -Math.atan2(a - (Player.getX() + 0.5), _0x5b5ex31b - (Player.getZ() + 0.5)) * (180 / Math.PI);
        if (pitch < 89 && pitch > -89) {
            Entity.setRot(Player.getEntity(), yaw, pitch)
        }
    }
}

function getNearestEntity(_0x5b5ex318) {
    var _0x5b5ex42 = Entity.getAll();
    var players = Server.getAllPlayers();
    var small = _0x5b5ex318;
    var ent = null;
    for (var i = 0; i < _0x5b5ex42.length; i++) {
        var x = Entity.getX(_0x5b5ex42[i]) - getPlayerX();
        var y = Entity.getY(_0x5b5ex42[i]) - getPlayerY();
        var z = Entity.getZ(_0x5b5ex42[i]) - getPlayerZ();
        var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
        if (dist < small && dist > 0 && Entity.getEntityTypeId(_0x5b5ex42[i]) <= 63 && Entity.getHealth(_0x5b5ex42[i]) >= 1) {
            small = dist;
            ent = _0x5b5ex42[i]
        }
    };
    for (var i = 0; i < players.length; i++) {
        var x = Entity.getX(players[i]) - getPlayerX();
        var y = Entity.getY(players[i]) - getPlayerY();
        var z = Entity.getZ(players[i]) - getPlayerZ();
        var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
        if (dist < small && dist > 0 && Entity.getHealth(players[i]) >= 1) {
            small = dist;
            ent = players[i]
        }
    };
    return ent
}

function crosshairAimAt(ent, _0x5b5ex31a) {
    if (ent != null) {
        var x = Entity.getX(ent) - getPlayerX();
        var y = Entity.getY(ent) - getPlayerY();
        var z = Entity.getZ(ent) - getPlayerZ();
        if (_0x5b5ex31a != null && _0x5b5ex31a instanceof Array) {
            x = Entity.getX(ent) - _0x5b5ex31a[0];
            y = Entity.getY(ent) - _0x5b5ex31a[1];
            z = Entity.getZ(ent) - _0x5b5ex31a[2]
        };
        if (Entity.getEntityTypeId(ent) != 63) {
            y += 0.5
        };
        var a = 0.5 + Entity.getX(ent);
        var _0x5b5ex2d5 = Entity.getY(ent);
        var _0x5b5ex31b = 0.5 + Entity.getZ(ent);
        var _0x5b5ex31c = Math.sqrt(x * x + y * y + z * z);
        var y = y / _0x5b5ex31c;
        var pitch = Math.asin(y);
        pitch = pitch * 180.0 / Math.PI;
        pitch = -pitch;
        var yaw = -Math.atan2(a - (Player.getX() + 0.5), _0x5b5ex31b - (Player.getZ() + 0.5)) * (180 / Math.PI);
        if (pitch < 89 && pitch > -89) {
            Entity.setRot(Player.getEntity(), yaw, pitch)
        }
    }
}

function modTick() {
    if (aimbot) {
        var ent = getNearestEntity(5);
        if (ent != null) {
            crosshairAimAt(ent)
        }
    }
}

function bowAimAt(ent) {
    var _0x5b5ex323 = 1;
    var _0x5b5ex324 = Entity.getX(ent) - Player.getX();
    var _0x5b5ex325 = Entity.getEntityTypeId(ent) == EntityType.PLAYER ? Entity.getY(ent) - Player.getY() : Entity.getY(ent) + 1 - Player.getY();
    var _0x5b5ex326 = Entity.getZ(ent) - Player.getZ();
    var yaw = (Math.atan2(_0x5b5ex326, _0x5b5ex324) * 180 / Math.PI) - 90;
    var _0x5b5ex53 = Math.sqrt(_0x5b5ex324 * _0x5b5ex324 + _0x5b5ex326 * _0x5b5ex326);
    var g = 0.007;
    var _0x5b5ex327 = (_0x5b5ex323 * _0x5b5ex323 * _0x5b5ex323 * _0x5b5ex323 - g * (g * (_0x5b5ex53 * _0x5b5ex53) + 2 * _0x5b5ex325 * (_0x5b5ex323 * _0x5b5ex323)));
    var pitch = -(180 / Math.PI) * (Math.atan((_0x5b5ex323 * _0x5b5ex323 - Math.sqrt(_0x5b5ex327)) / (g * _0x5b5ex53)));
    if (pitch < 89 && pitch > -89) {
        setRot(Player.getEntity(), yaw, pitch)
    }
}

function entityHurtHook(_0x5b5ex320, _0x5b5ex321, _0x5b5ex329) {
    if (antikbss || (_0x5b5ex321 != p)) {
        return;
        Entity.setImmobile(getPlayerEnt, true);
        this.attackTick = 2
    }
}

function xan(_0x5b5ex26, _0x5b5ex32b) {
    try {
        var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                var _0x5b5ex32c = android.widget.Toast.makeText(com.mojang.minecraftpe.MainActivity.currentMainActivity.get(), '' + _0x5b5ex26, android.widget.Toast.LENGTH_LONG);
                var layout = new android.widget.LinearLayout(ctx);
                var _0x5b5ex32d = new android.widget.TextView(ctx);
                if (_0x5b5ex32b == null) {
                    _0x5b5ex26 = 'xan: ' + _0x5b5ex26
                } else {
                    _0x5b5ex26 = _0x5b5ex32b + ': ' + _0x5b5ex26
                };
                _0x5b5ex32d.setText(_0x5b5ex26);
                _0x5b5ex32d.setGravity(android.view.Gravity.CENTER);
                _0x5b5ex32d.setTextSize(15);
                _0x5b5ex32d.setPadding(10, 10, 10, 10);
                _0x5b5ex32d.setTextColor(android.graphics.Color.YELLOW);
                var _0x5b5ex32e = new android.graphics.drawable.GradientDrawable();
                _0x5b5ex32e.setColor(android.graphics.Color.BLACK);
                _0x5b5ex32e.setStroke(4, android.graphics.Color.YELLOW);
                _0x5b5ex32e.setCornerRadius(2);
                layout.addView(_0x5b5ex32d);
                layout.setBackground(_0x5b5ex32e);
                layout.getBackground().setAlpha(150);
                _0x5b5ex32c.setView(layout);
                _0x5b5ex32c.show()
            }
        }))
    } catch (e) {
        print(e)
    }
}

function useItem(x, y, z, _0x5b5ex330, _0x5b5ex331, _0x5b5ex332, _0x5b5ex333, _0x5b5ex334) {
    if (fastb2) {
        if (_0x5b5ex332 == BlockFace.NORTH) {
            Entity.setPositionRelative(getPlayerEnt(), 0, 0, -1)
        } else {
            if (_0x5b5ex332 == BlockFace.SOUTH) {
                Entity.setPositionRelative(getPlayerEnt(), 0, 0, 1)
            } else {
                if (_0x5b5ex332 == BlockFace.WEST) {
                    Entity.setPositionRelative(getPlayerEnt(), -1, 0, 0)
                } else {
                    if (_0x5b5ex332 == BlockFace.EAST) {
                        Entity.setPositionRelative(getPlayerEnt(), 1, 0, 0)
                    }
                }
            }
        }
    };
    if (taptpss && getTile(x, y + 1, z) == 0 && getTile(x, y + 2, z) == 0) {
        Entity.setPosition(Player.getEntity(), x + 0.5, y + 2.63, z + 0.5)
    }
}
if (bhopl) {
    if (Utils.Player.isOnGround()) {
        setVelY(getPlayerEnt(), 0.4);
        setVelY(getPlayerEnt(), 0.4);
        setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 1.1);
        setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 1.1)
    }
};
if (nofall1 == true) {
    if (instantnofall == true) {
        if (Entity.getVelY(getPlayerEnt()) < -0.51) {
            setVelY(getPlayerEnt(), -200.0)
        }
    };
    if (delaynofall == true) {
        if (Entity.getVelY(getPlayerEnt()) < -0.56) {
            setVelY(getPlayerEnt(), 0.00001)
        }
    }
};
if (fastladder) {
    if (getTile(getPlayerX(), getPlayerY() + 1, getPlayerZ()) == 65) {
        setVelY(getPlayerEnt(), 0.4);
        Entity.setPosition(getPlayerEnt(), Player.getX(), Player.getY() + ladderspeed, Player.getZ())
    }
};
if (lg1) {
    setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 1.9);
    setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 1.9)
};
if (pc1) {
    if (Utils.Player.isOnGround()) {
        setVelY(getPlayerEnt(), 0.3);
        setVelY(getPlayerEnt(), 0.3);
        setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 1);
        setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 1);
        Entity.setSneaking(getPlayerEnt(), 1)
    }
};
if (sniperss && getCarriedItem() == 261) {
    var ent = getNearestEntity(55);
    if (ent != null) {
        bowAimAt(ent)
    } else {
        sniperhh = true
    }
};
if (sniperhh) {};
if (antikbss || Entity.getHealth(getPlayerEnt()) <= 0) {
    if (this.tick > 0) {
        tick--
    } else {
        Entity.setImmobile(getPlayerEnt(), false)
    };
    if (this.health > Entity.getHealth(getPlayerEnt())) {
        Entity.setImmobile(getPlayerEnt(), true);
        this.tick = 1
    };
    this.tick = 0;
    this.health = Entity.getHealth(getPlayerEnt())
};
if (ndglidess) {
    setVelY(getPlayerEnt(), 0.00000001)
};
if (autoswords) {
    var slotId = 0;
    var slopId = 1;
    slonId = 2;
    var getInvSword = Player.getInventorySlot(slotId);
    if (getInvSword == 276 || getInvSword == 268 || getInvSword == 283 || getInvSword == 267 || getInvSword == 272) {
        var invSword = slotId
    } else {
        slotId++
    };
    if (slotId = 27) {
        slotId = 0;
        slopId = 1;
        slonId = 2
    };
    var ent = getNearestEntity(8);
    if (ent != null && Player.getName(ent) != '' && Player.getName(ent) != ' ' && Player.getName(ent)) {
        Player.setSelectedSlotId(invSword)
    }
};

function modTick() {
    if (hb1) {
        ent = getNearestEntity(9);
        Entity.setCollisionSize(ent, 9, 9)
    };
    if (killaura) {
        ent = getNearestEntity(18);
        Entity.setCollisionSize(ent, 15, 15);
        ModPE.setGameSpeed(22);
        Player.setHealth(30)
    };
    if (aimbotss) {
        var ent = getNearestEntity(7);
        if (ent != null) {
            crosshairAimAt(ent)
        }
    }
}
if (crosshair) {
    var ent = getNearestEntity(6);
    if (ent != null) {
        crosshairAimAt(ent)
    }
};
if (range1) {
    var ent = getNearestEntity(4);
    if (ent != null) {
        crosshairAimAt(ent)
    }
};
if (range2) {
    var ent = getNearestEntity(6);
    if (ent != null) {
        crosshairAimAt(ent)
    }
};
if (range3) {
    var ent = getNearestEntity(8);
    if (ent != null) {
        crosshairAimAt(ent)
    }
};
if (range4) {
    var ent = getNearestEntity(10);
    if (ent != null) {
        crosshairAimAt(ent)
    }
};
if (liquidfyy) {
    setVelY(getPlayerEnt(), 8)
};
if (reachss) {
    if (Level.getGameMode() == 0) {
        Level.setGameMode(0);
        Player.setCanFly(false);
        ModPE.setFov(100);
        ModPE.setGameSpeed(40);
        ModPE.resetFov();
        ModPE.setGameSpeed(20)
    }
};
if (xray) {
    Block.setRenderType(54, 1000);
    Block.setRenderLayer(54, 1000);
    Block.setLightOpacity(54, 100);
    Block.setLightLevel(54, 1000);
    Block.setLightLevel(1, 100);
    Block.setLightOpacity(1, 1000);
    Block.setRenderLayer(54, 1)
};
if (criticales && critTick < 22) {
    critTick++;
    if (critTick == 13) {
        Entity.setPositionRelative(getPlayerEnt(), 0, 2, 0)
    };
    if (critTick == 12) {
        criticalTick = 12;
        ModPE.setGameSpeed(40);
        ModPE.setGameSpeed(20)
    };
    if (criticalTick > 0) {
        criticalTick--;
        setVelY(getPlayerEnt(), -0.2)
    }
};
if (spamming) {
    Server.sendChat('§4TEST | NUKE ');
    Level.setGameMode(0);
    Level.setGameMode(1);
    Player.setCanFly(false)
};

function rptask() {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            new android.os.Handler().postDelayed(new java.lang.Runnable({
                run: function() {
                    if (backfacess) {
                        var player = getPlayerEnt();
                        var yaw = Math.floor(Entity.getYaw(player));
                        var pitch = Math.floor(Entity.getPitch(player));
                        if (pitch <= 189) {
                            Entity.setRot(player, yaw, 192)
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
                    if (crouchtp == true && Entity.isSneaking(Player.getEntity()) == true) {
                        setVelY(getPlayerEnt(), -0.003);
                        var playerDir = [0, 0, 0];
                        toDirectionalVector(playerDir, (getYaw() + 80) * Math.PI / 180, getPitch() * Math.PI / 180 * -1);
                        setVelX(getPlayerEnt(), 0.6 * "0");
                        setVelZ(getPlayerEnt(), 0.6 * "0")
                    };
                    if (hoveraa) {
                        hoverar = getNearestEntity(15);
                        if (hoverar != null && Entity.getEntityTypeId(hoverar) == EntityType.PLAYER) {
                            setPosition(getPlayerEnt(), Entity.getX(hoverar), Entity.getY(hoverar) + 2, Entity.getZ(hoverar))
                        }
                    };
                    if (cstepss && Utils.Player.isCollidedHorizontally()) {
                        setVelY(Player.getEntity(), 0.6)
                    };
                    if (stepss && Utils.Player.isCollidedHorizontally()) {
                        Entity.setPositionRelative(getPlayerEnt(), 0, 1.6, 0)
                    };
                    if (rsteps) {
                        if (Utils.Player.isFall()) {
                            setVelY(getPlayerEnt(), -100)
                        }
                    };
                    if (autowalkss) {
                        var playerDir = [0, 0, 0];
                        toDirectionalVector(playerDir, (getYaw() + 90) * Math.PI / 180, getPitch() * Math.PI / 180 * -0, 1);
                        setVelX(getPlayerEnt(), 0.4 * "0");
                        setVelZ(getPlayerEnt(), 0.4 * "0")
                    };
                    if (destroy) {
                        Level.destroyBlock(Player.getPointedBlockX(), Player.getPointedBlockY(), Player.getPointedBlockZ(), true)
                    };
                    if (byglidee) {
                        bgtick++;
                        if (Entity.getVelY(getPlayerEnt()) < 1) {
                            setVelY(Player.getEntity(), -0.2);
                            if (bgtick == 150) {
                                Entity.setPositionRelative(getPlayerEnt(), 0, +3.3, 0);
                                setVelY(getPlayerEnt(), -0.5);
                                setVelX(getPlayerEnt(), 0);
                                setVelZ(getPlayerEnt(), 0);
                                bgtick = 0
                            }
                        }
                    };
                    if (glidess) {
                        setVelY(getPlayerEnt(), -0.25);
                        setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 1.06);
                        setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 1.06)
                    };
                    if (lhealthss) {
                        ModPE.showTipMessage('
' + '§c§lYour Health Is: §4§l' + Entity.getHealth(getPlayerEnt()));
                        ModPE.showTipMessage('
' + '§cb§lYour Health Is: §d§l' + Entity.getHealth(getPlayerEnt()));
                        ModPE.showTipMessage('
' + '§e§lYour Health Is: §c§l' + Entity.getHealth(getPlayerEnt()));
                        ModPE.showTipMessage('
' + '§b§lYour Health Is: §4§l' + Entity.getHealth(getPlayerEnt()));
                        ModPE.showTipMessage('
' + '§a§lYour Health Is: §c§l' + Entity.getHealth(getPlayerEnt()));
                        ModPE.showTipMessage('
' + '§f§lYour Health Is: §4§l' + Entity.getHealth(getPlayerEnt()));
                        ModPE.showTipMessage('
' + '§c§lYour Health Is: §4§l' + Entity.getHealth(getPlayerEnt()))
                    };
                    if (tb1) {
                        ent = getNearestEntity(75);
                        Entity.setCollisionSize(ent, 12, 12)
                    };
                    if (antigravityss) {
                        setVelY(getPlayerEnt(), 0.0600000009)
                    };

                    function attackHook(_0x5b5ex320, _0x5b5ex321) {
                        if (_0x5b5ex320 == Player.getEntity() && criticales && Entity.getHealth(_0x5b5ex321) > 0) {
                            setVelY(getPlayerEnt(), 0.3);
                            if (critTick >= 5) {
                                critTick = 0
                            }
                        }
                    }
                    if (criticaltrailsss == true && Entity.isSneaking(Player.getEntity()) == true) {
                        setVelY(getPlayerEnt(), -0.004);
                        var playerDir = [0, 0, 0];
                        toDirectionalVector(playerDir, (getYaw() + 90) * Math.PI / 180, getPitch() * Math.PI / 180 * -1);
                        setVelX(getPlayerEnt(), 0.6 * "0");
                        setVelZ(getPlayerEnt(), 0.6 * "0")
                    };
                    if (ilongd) {
                        setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * sboost);
                        setVelY(getPlayerEnt(), Entity.getVelY(getPlayerEnt()) * jboost);
                        setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * sboost);
                        if (Utils.Player.isFall()) {
                            setVelY(getPlayerEnt(), Entity.getVelY(getPlayerEnt()) * fboost)
                        }
                    };
                    if (lbsg1 && !Utils.Player.isOnGround()) {
                        mftick++;
                        if (Entity.getVelY(getPlayerEnt()) < 1.1) {
                            setVelY(getPlayerEnt(), -0.060);
                            if (mftick == 46) {
                                setPosition(getPlayerEnt(), getPlayerX(), getPlayerY() + 3.40, getPlayerZ());
                                mftick = 0
                            }
                        }
                    };
                    if (mkilla == true) {
                        var _0x5b5ex42 = Entity.getAll();
                        for (var i = 0; i < _0x5b5ex42.length; i++) {
                            var x = Entity.getX(_0x5b5ex42[i]) - getPlayerX();
                            var y = Entity.getY(_0x5b5ex42[i]) - getPlayerY();
                            var z = Entity.getZ(_0x5b5ex42[i]) - getPlayerZ();
                            if (x * x + y * y + z * z <= 4 * 4 && _0x5b5ex42[i] != getPlayerEnt()) {
                                Entity.setHealth(_0x5b5ex42[i], 0)
                            }
                        }
                    };
                    if (fsneak1) {
                        setVelY(getPlayerEnt(), Entity.isSneaking(getPlayerEnt()) ? 0.2 : -0.065)
                    };
                    if (safewalk) {
                        Entity.setSneaking(getPlayerEnt(), 1, true)
                    };
                    if (lcordss) {
                        ModPE.showTipMessage('§c§l> Your Coordinates are:
x: ' + Math.floor(Player.getX()) + ' y: ' + Math.floor(Player.getY() - 1) + ' z: ' + Math.floor(Player.getZ()));
                        ModPE.showTipMessage('§b§l> Your Coordinates are:
x: ' + Math.floor(Player.getX()) + ' y: ' + Math.floor(Player.getY() - 1) + ' z: ' + Math.floor(Player.getZ()));
                        ModPE.showTipMessage('§a§l> Your Coordinates are:
x: ' + Math.floor(Player.getX()) + ' y: ' + Math.floor(Player.getY() - 1) + ' z: ' + Math.floor(Player.getZ()));
                        ModPE.showTipMessage('§e§l> Your Coordinates are:
x: ' + Math.floor(Player.getX()) + ' y: ' + Math.floor(Player.getY() - 1) + ' z: ' + Math.floor(Player.getZ()));
                        ModPE.showTipMessage('§d§l> Your Coordinates are:
x: ' + Math.floor(Player.getX()) + ' y: ' + Math.floor(Player.getY() - 1) + ' z: ' + Math.floor(Player.getZ()));
                        ModPE.showTipMessage('§9§l> Your Coordinates are:
x: ' + Math.floor(Player.getX()) + ' y: ' + Math.floor(Player.getY() - 1) + ' z: ' + Math.floor(Player.getZ()));
                        ModPE.showTipMessage('§c§l> Your Coordinates are:
x: ' + Math.floor(Player.getX()) + ' y: ' + Math.floor(Player.getY() - 1) + ' z: ' + Math.floor(Player.getZ()))
                    };
                    if (js1 && Utils.Player.isInWater()) {
                        setVelY(getPlayerEnt(), 0.1);
                        setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 1.0);
                        setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 1.0)
                    };
                    if (warn1) {
                        var ent = getNearestEntity(30);
                        ModPE.showTipMessage(ChatColorRED + 'Player Detected: ' + ChatColor.CYAN + Player.getName(ent) + ChatColor.CYAN + '')
                    };
                    if (ab1) {
                        if (Utils.Player.isOnGround()) {
                            setVelY(getPlayerEnt(), 0.4);
                            setVelY(getPlayerEnt(), 0.4);
                            setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 1.1);
                            setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 1.1);
                            ModPE.setGameSpeed(30)
                        }
                    };
                    if (arp1) {
                        if (getTile(getPlayerX(), getPlayerY() - 2.5, getPlayerZ()) == 0) {
                            setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 1.07);
                            setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 1.07)
                        }
                    };
                    if (swalk1 == 1) {
                        Entity.setSneaking(getPlayerEnt(), 0)
                    };
                    if (air1) {
                        var ent = getNearestEntity(10);
                        if (ent != null && Player.getName(ent) != '' && Player.getName(ent) != ' ' && Player.getName(ent)) {
                            setVelY(getPlayerEnt(), 0.2);
                            setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 1.7);
                            setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 1.7)
                        }
                    };
                    if (bhit1) {
                        setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 0.6);
                        setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 0.6)
                    };
                    if (scaff1) {
                        Entity.setSneaking(getPlayerEnt(), true)
                    };
                    if (pvp) {
                        ModPE.setFov(120)
                    };
                    if (time) {
                        Level.setTime(0)
                    };
                    if (wscaff1) {
                        if (!Player.getCarriedItem() == 0) {
                            Level.setTile(getPlayerX(), getPlayerY() - 2, getPlayerZ(), Player.getCarriedItem(), 0);
                            setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 0.55);
                            setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 0.55)
                        }
                    };
                    if (cderp) {
                        var player = getPlayerEnt();
                        var yaw = Math.floor(Entity.getYaw(player));
                        var pitch = Math.floor(Entity.getPitch(player));
                        Entity.setRot(player, yaw - 2, pitch)
                    };
                    if (blong) {
                        if (Utils.Player.onGround()) {
                            setVelY(getPlayerEnt(), 0.09);
                            setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 1.1)
                        }
                    };
                    if (jj1) {
                        var ent = getNearestEntity(8);
                        var hit = getYaw() + 90;
                        var _0x5b5ex2c9 = getPitch() - 180;
                        x = Math.cos(hit * (Math.PI / 180));
                        y = Math.sin(_0x5b5ex2c9 * (Math.PI / 180));
                        z = Math.sin(hit * (Math.PI / 180));
                        setVelX(Player.getEntity(), x * 2);
                        setVelY(Player.getEntity(), y * 2);
                        setVelZ(Player.getEntity(), z * 2);
                        Entity.setSneaking(getPlayerEnt(), true)
                    };
                    if (gg1) {
                        var ent = getNearestEntity(8);
                        setVelZ(getPlayerEnt(), 9)
                    };
                    if (ffb) {
                        setVelY(getPlayerEnt(), 0.00000000000000000000000000000001)
                    };
                    if (bstep && Utils.Player.isCollidedHorizontally()) {
                        Entity.setPositionRelative(getPlayerEnt(), 0, 1.4, 0)
                    };
                    if (zbow1) {
                        if (getCarriedItem() == 261) {
                            ModPE.setFov(25)
                        } else {
                            ModPE.resetFov()
                        }
                    };
                    if (fastswords) {
                        if (getCarriedItem() == 267) {
                            ModPE.setGameSpeed(28)
                        } else {
                            ModPE.setGameSpeed(20)
                        }
                    };
                    if (wood1) {
                        if (getCarriedItem() == 268) {
                            ModPE.setGameSpeed(28)
                        } else {
                            ModPE.setGameSpeed(20)
                        }
                    };
                    if (stone1) {
                        if (getCarriedItem() == 272) {
                            ModPE.setGameSpeed(28)
                        } else {
                            ModPE.setGameSpeed(20)
                        }
                    };
                    if (gold1) {
                        if (getCarriedItem() == 283) {
                            ModPE.setGameSpeed(28)
                        } else {
                            ModPE.setGameSpeed(20)
                        }
                    };
                    if (diamond1) {
                        if (getCarriedItem() == 276) {
                            ModPE.setGameSpeed(28)
                        } else {
                            ModPE.setGameSpeed(20)
                        }
                    };
                    if (gmMaker) {
                        Player.addExp(99999)
                    };
                    if (follow1) {
                        var playerDir = [0, 0, 0];
                        toDirectionalVector(playerDir, (getYaw() + 90) * Math.PI / 180, getPitch() * Math.PI / 180 * -0, 1);
                        setVelX(getPlayerEnt(), 0.1 * "0");
                        setVelZ(getPlayerEnt(), 0.1 * "0")
                    };
                    if (ffo1) {
                        var playerDir = [0, 0, 0];
                        toDirectionalVector(playerDir, (getYaw() + 90) * Math.PI / 180, getPitch() * Math.PI / 180 * -0, 1);
                        setVelX(getPlayerEnt(), 0.1 * "0");
                        setVelZ(getPlayerEnt(), 0.1 * "0")
                    };
                    if (bf1) {
                        if (Utils.Player.isInWater()) {
                            setVelY(getPlayerEnt(), 0.20)
                        };
                        if (Utils.Player.isInWater()) {
                            setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 1.1)
                        };
                        if (Utils.Player.isInWater()) {
                            setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 1.1)
                        }
                    };
                    if (at1) {
                        if (!Player.getCarriedItem() == 0) {;
                        }; {
                            setVelY(getPlayerEnt(), 0.3);
                            setTile(getPlayerX(), getPlayerY() - 1, getPlayerZ(), 0)
                        }
                    };
                    if (antiafk1) {
                        var playerDir = [0, 0, 0];
                        toDirectionalVector(playerDir, (getYaw() + 90) * Math.PI / 180, getPitch() * Math.PI / 180 * -0, 1);
                        setVelX(getPlayerEnt(), 0.1 * "undefined");
                        setVelZ(getPlayerEnt(), 0.1 * "0")
                    };
                    if (sideaura) {
                        var playerDir = [0, 0, 0];
                        toDirectionalVector(playerDir, (getYaw() + 45) * Math.PI / 180, getPitch() * Math.PI / 180 * -0, 1);
                        setVelX(getPlayerEnt(), 0.1 * "0");
                        setVelZ(getPlayerEnt(), 0.1 * "0")
                    };
                    if (bf1) {
                        if (Utils.Player.isInWater()) {
                            setVelY(getPlayerEnt(), 0.20)
                        };
                        if (Utils.Player.isInWater()) {
                            setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 1.1)
                        };
                        if (Utils.Player.isInWater()) {
                            setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 1.1)
                        }
                    };
                    if (wall1) {
                        Entity.setCollisionSize(Player.getEntity(), 0, 0)
                    };
                    if (antiad2) {
                        var ent = getNearestEntity(30);
                        ModPE.showTipMessage(ChatColor.YELLOW + 'Player Detected: ' + ChatColor.RED + Player.getName(ent) + ChatColor.RED + '')
                    };
                    if (derpss) {
                        var player = getPlayerEnt();
                        var yaw = Math.floor(Entity.getYaw(player));
                        var pitch = Math.floor(Entity.getPitch(player));
                        Entity.setRot(player, yaw + 30, pitch)
                    };

                    function attackHook(_0x5b5ex320, _0x5b5ex321) {
                        if (_0x5b5ex320 == Player.getEntity() && rides && Entity.getHealth(_0x5b5ex321) > 0) {
                            setVelZ(getPlayerEnt(), -1);
                            var playerDir = [0, 0, 0];
                            toDirectionalVector(playerDir, (getYaw() + 90) * Math.PI / 180, getPitch() * Math.PI / 180 * -1);
                            setVelX(getPlayerEnt(), 0.4 * "0");
                            setVelZ(getPlayerEnt(), 0.4 * "0");
                            Entity.setPositionRelative(getPlayerEnt(), 0, 1, 0);
                            Entity.setPositionRelative(getPlayerEnt(), 0, 0, 1)
                        }
                    }
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