import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-interpreter-mode",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssInterpreterMode {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M824.94-305Q802-305 786-321.04 770-337.08 770-360v-100q0-22.92 16.06-38.96 16.06-16.04 39-16.04T864-498.96q16 16.04 16 38.96v100q0 22.92-16.06 38.96-16.06 16.04-39 16.04ZM810-160v-66q-51-8-85-43.5T690-355h30q2 42 32.5 71t72.5 29q42 0 72.5-29t32.5-71h30q-1 50-35 85.5t-85 43.96V-160h-30ZM399-500q-67 0-108.5-41.5T249-650q0-67 41.5-108.5T399-800q7 0 19 1.5t22 3.5q-26 31-38.5 66.5T389-650q0 43 12.5 78.5T440-505q-11.05 2.78-22.52 3.89Q406-500 399-500ZM40-160v-94q0-37 17.5-63t51.5-45q39-22 98-37.5T340-423q-65 31-90.5 75T224-254v94H40Zm559-340q-63 0-106.5-43.5T449-650q0-63 43.5-106.5T599-800q63 0 106.5 43.5T749-650q0 63-43.5 106.5T599-500Zm0-60q38 0 64-26.44 26-26.44 26-63.56 0-38-26-64t-63.5-26q-37.5 0-64 26T509-650.5q0 37.5 26.44 64Q561.88-560 599-560ZM284-160v-94q0-35 18.5-63.5T353-360q47-21 108.5-40.5T599-420q5 0 13.50.5t14.50.5q-6 15-10 29.5t-6 29.5h-12q-72 0-124 16.5T377-306q-16 8-24.5 21.5T344-254v34h304q11 16 26 31.5t35 28.5H284Zm315-490Zm0 430Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssInterpreterMode;
