import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-generalmotors",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiGeneralmotors {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.34 0A3.35 3.35 0 0 0 0 3.34v17.32A3.35 3.35 0 0 0 3.34 24h17.32A3.35 3.35 0 0 0 24 20.66V3.34C23.98 1.5 22.5 0 20.66 0zm0 1.54h17.32c0.99 0 1.810.81 1.81 1.81v17.3c0 0.99-0.81 1.81-1.81 1.81H3.34a1.81 1.81 0 0 1-1.81-1.81v-17.3c0-0.990.81-1.81 1.81-1.81zm2.98 4.68A1.88 1.88 0 0 0 4.44 8.09v4.57c0 1.030.85 1.86 1.88 1.88h1.55v0.34c-0.020.85-0.5 1.34-1.68 1.36h-0.74v1.54h0.74c2.17 0 3.4-1.03 3.43-2.91v-8.65zm4.62 0v8.31h1.75V7.73h1.68v6.79h1.75V7.73h1.01c0.36 0 0.670.290.670.67v6.14h1.75V8.09c-0.02-1.03-0.85-1.88-1.88-1.88zM6.86 7.73h1.01v5.27h-1.01a0.670.67 0 0 1-0.67-0.67V8.4c0-0.360.29-0.670.67-0.67zm4.08 8.51v1.54h8.6v-1.53z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiGeneralmotors;
