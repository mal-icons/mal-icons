import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-transcribe",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdTranscribe {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 0.9 2 2s-0.9 2-2 2-2-0.9-2-2 0.9-2 2-2zm6.39 8.56C13.71 14.7 11.53 14 9 14s-4.710.7-6.39 1.56A2.97 2.97 0 0 0 1 18.22V21h16v-2.78c0-1.12-0.61-2.15-1.61-2.66zM15 19H3v-0.78c0-0.380.2-0.720.52-0.88C4.71 16.73 6.63 16 9 16c2.37 0 4.290.73 5.48 1.340.320.160.520.50.520.88V19zm2.93-3 1.63-1.63c-2.77-3.02-2.77-7.56 0-10.74L17.93 2c-3.9 3.89-3.91 9.95 0 14zm4.99-5.05a3.32 3.32 0 0 1 0-3.89l-1.68-1.69c-2.02 2.02-2.02 5.07 0 7.27l1.68-1.69z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdTranscribe;
