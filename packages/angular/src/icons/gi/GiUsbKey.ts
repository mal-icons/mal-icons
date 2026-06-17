import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-usb-key",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiUsbKey {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M394.8 30.88l-65 65.03 86.3 86.29 65.1-65-86.4-86.32zm-6.3 36.04l17 17-12.8 12.72-17-17 12.8-12.72zm-82.8 30.4l-11.3 11.28 109 108.9 11.3-11.2-109-108.98zM263.3 103L23.4 342.9v60.5l85.2 85.2h60.5l240-239.9L263.3 103zm164.9 3.6l16.9 17-12.8 12.6-16.9-17 12.8-12.6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiUsbKey;
