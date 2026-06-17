import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-file-earmark-binary-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsFileEarmarkBinaryFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.53 10.27c-0.54 0-0.830.56-0.83 1.61q0 0.130.010.25l1.56-1.14c-0.13-0.47-0.37-0.72-0.73-0.72zm-0.73 2.51c0.130.470.370.720.730.720.54 0 0.83-0.560.83-1.61q0-0.13-0.01-0.25z"}],["path",{"d":"M9.29 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.71A1 1 0 0 0 13.71 4L10 0.29A1 1 0 0 0 9.29 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1m-2.45 8.39c0 1.42-0.55 2.21-1.52 2.21C4.55 14.09 4 13.3 4 11.89c0-1.410.55-2.2 1.53-2.20.98 0 1.520.79 1.52 2.2m3.81 1.52V14h-3v-0.59h1.18V10.5h-0.05l-1.140.75v-0.69l1.19-0.79h0.69v3.63z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsFileEarmarkBinaryFill;
