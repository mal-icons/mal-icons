import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-tamiya",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiTamiya {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 6.41v4.27h4.5l1.36-4.27Zm5.86 0 1.4 4.27h4.5v-4.27Zm5.89 4.27-3.63 2.64 1.4 4.27h2.23Zm-2.23 6.91-3.66-2.64-3.63 2.65Zm-7.29 0 1.4-4.27L0 10.68v6.91zM12.25 6.41v4.27h4.5l1.36-4.27zm5.86 0 1.4 4.27H24v-4.27ZM24 10.68l-3.63 2.64 1.4 4.27H24Zm-2.23 6.91-3.66-2.64-3.63 2.65zm-7.29 0 1.4-4.27-3.63-2.64v6.91z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiTamiya;
