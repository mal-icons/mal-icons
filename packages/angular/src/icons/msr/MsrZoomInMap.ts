import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-zoom-in-map",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrZoomInMap {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M150-610q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T150-670h97L121-796q-9-9-8.5-21.5T122-839q9-9 21.5-9t21.5 9l125 126v-97q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T350-810v170q0 12.75-8.62 21.38T320-610H150Zm660 0H640q-12.75 0-21.37-8.62T610-640v-170q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T670-810v97l127-127q9-9 21.5-9t21.5 9q9 9 9 21.5t-9 21.5L713-670h97q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T810-610ZM122-122q-9-9-9-21.5t9-21.5l125-125h-97q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T150-350h170q12.75 0 21.38 8.63T350-320v170q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63-12.82 0-21.32-8.62T290-150v-97L164-121q-9 9-21 8.5t-21-9.5Zm517.83 2Q627-120 618.5-128.62T610-150v-170q0-12.75 8.63-21.37T640-350h170q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T810-290h-97l126 126q9 9 9 21t-9 21q-9 9-21.5 9t-21.5-9L670-247v97q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrZoomInMap;
