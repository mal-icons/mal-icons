import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-music",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfMusic {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.77 4.46l0.42-0.91-7.19-3.34v9.88c-0.51-0.44-1.17-0.72-1.9-0.72-1.61 0-2.91 1.31-2.91 2.91s1.31 2.91 2.91 2.91 2.91-1.31 2.91-2.91c0-0.05-0.01-0.1-0.02-0.15v-10.35l5.77 2.68zM6.1 14.2c-1.06 0-1.91-0.86-1.91-1.91s0.86-1.91 1.91-1.91 1.91 0.86 1.91 1.91-0.86 1.91-1.91 1.91z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfMusic;
