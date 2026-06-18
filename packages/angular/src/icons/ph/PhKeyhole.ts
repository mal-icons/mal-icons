import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ph-keyhole",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class PhKeyhole {
  readonly viewBox = "0 0 256 256";
  readonly nodes: NodeTuple[] = [["path",{"d":"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm0-144a40,40,0,0,0-28.28,68.28L88.86,167.56A12,12,0,0,0,100,184h56a12,12,0,0,0,11.14-16.44l-10.86-27.28A40,40,0,0,0,128,72Zm11.31,68.9L150.1,168H105.9l10.79-27.1a8,8,0,0,0-2.74-9.44,24,24,0,1,1,28.1,0A8,8,0,0,0,139.31,140.9Zm13,32.58Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default PhKeyhole;
