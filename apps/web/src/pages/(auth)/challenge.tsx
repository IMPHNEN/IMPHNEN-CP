import Header from "#/components/layout/header";
import { Button } from "#/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card";
import { CodeEditor, CodeEditorContent, CodeEditorCopyButton, CodeEditorHeader } from "#/components/ui/code-editor";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "#/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "#/components/ui/table";
import { useAuth } from "#/hooks/use-auth";
import { LANGUAGES, useChallenge } from "#/hooks/use-challenge";
import { useNavigate } from "@tanstack/react-router";

export default function Challenge(){
    const auth = useAuth()
    const navigation = useNavigate()
    const challenge = useChallenge()

    return (
        <>
            <Header authInfo={auth.sessionUser} />
            <div className="w-full max-w-7xl m-auto px-5 py-3 flex flex-col md:flex-row gap-3">
                <div className="w-full flex flex-col gap-2">
                    <Card>
                        <CardContent>
                            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                                <div className="flex min-w-0 items-center gap-3">
                                    {auth.sessionUser?.image ? (
                                        <img
                                            src={auth.sessionUser.image}
                                            alt={`Foto ${auth.sessionUser.name}`}
                                            width={48}
                                            height={48}
                                            className="size-12 shrink-0 rounded-full object-cover"
                                        />
                                    ) : (
                                        <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary font-semibold">
                                            {auth.sessionUser?.name?.charAt(0).toUpperCase() ?? "?"}
                                        </div>
                                    )}
                                    <div className="min-w-0">
                                        <p className="truncate font-semibold text-xl">
                                            {auth.sessionUser?.name || "Pengguna"}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-8">
                                    <div>
                                        <p className="text-sm text-muted-foreground">Rank saat ini</p>
                                        <p className="font-semibold">Master</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Poin saat ini</p>
                                        <p className="font-semibold">1.000</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Tantangan</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <h3 className="text-xl font-bold">Penjumlahan Dua Bilangan</h3>
                            <p>Diberikan dua bilangan bulat (A) dan (B). Buatlah program untuk menghitung hasil penjumlahan kedua bilangan tersebut.</p>
                            <h6 className="font-bold mt-5">Input:</h6>
                            <p>Satu baris berisi dua bilangan bulat (A) dan (B), dipisahkan oleh spasi.</p>
                            <h6 className="font-bold mt-5">Output:</h6>
                            <p>Cetak satu bilangan bulat yang merupakan hasil penjumlahan (A + B)</p>
                            <h6 className="font-bold mt-5">Contoh:</h6>
                            <h6>Input:</h6>
                            <Card className="bg-secondary">
                                <CardHeader>
                                    <CardTitle>5 3</CardTitle>
                                </CardHeader>
                            </Card>
                            <h6 className="mt-2">Output:</h6>
                            <Card className="bg-secondary">
                                <CardHeader>
                                    <CardTitle>8</CardTitle>
                                </CardHeader>
                            </Card>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Jawaban Anda</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CodeEditor defaultValue={""} language={challenge.language} onValueChange={(v) => {}}>
                                <CodeEditorHeader>
                                  <CodeEditorCopyButton />
                                </CodeEditorHeader>
                                <CodeEditorContent />
                            </CodeEditor>
                            <div className="flex justify-between mt-5">
                                <Select items={LANGUAGES} onValueChange={(v) => challenge.setLanguage(v as string)}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Pilih Bahasa Pemrograman" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {LANGUAGES.map((v) => (
                                            <SelectItem key={v.value} value={v.value}>
                                                {v.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <Button>Kirim</Button>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Hasil</CardTitle>
                        </CardHeader>
                    </Card>
                </div>
                <div className="md:w-1/3 flex flex-col gap-2 w-full">
                    <Card>
                        <CardHeader>
                            <CardTitle>Riwayat Submission</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Judul</TableHead>
                                        <TableHead>Tanggal</TableHead>
                                        <TableHead>Poin</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow className="cursor-pointer" onClick={() => navigation({to: "/"})}>
                                        <TableCell>Mencari bilangan bulat</TableCell>
                                        <TableCell>03/11/2026</TableCell>
                                        <TableCell>100</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Leaderboard</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table className="table-fixed">
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-10">No</TableHead>
                                        <TableHead>Player</TableHead>
                                        <TableHead className="w-16">Rank</TableHead>
                                        <TableHead className="w-16">Point</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody className="overflow-x-auto">
                                    <TableRow>
                                        <TableCell>1</TableCell>
                                        <TableCell className="min-w-0">
                                            <div className="flex min-w-0 items-center gap-2">
                                                <img src={auth.sessionUser?.image} alt="User Photo" width={30} className="shrink-0 rounded-full" />
                                                <h6 className="min-w-0 truncate">Shinomiya Azumi</h6>
                                            </div>
                                        </TableCell>
                                        <TableCell>Master</TableCell>
                                        <TableCell>1000</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}