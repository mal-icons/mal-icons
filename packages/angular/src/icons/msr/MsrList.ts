import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-list",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrList {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M320-620q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T320-680h490q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T810-620H320Zm0 170q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T320-510h490q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T810-450H320Zm0 170q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T320-340h490q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T810-280H320ZM149.82-620Q137-620 128.5-628.67q-8.5-8.68-8.5-21.5 0-12.82 8.68-21.32 8.68-8.5 21.5-8.5 12.83 0 21.33 8.68 8.5 8.68 8.5 21.5 0 12.83-8.68 21.33-8.68 8.5-21.5 8.5Zm0 170Q137-450 128.5-458.67q-8.5-8.68-8.5-21.5 0-12.82 8.68-21.32 8.68-8.5 21.5-8.5 12.83 0 21.33 8.68 8.5 8.68 8.5 21.5 0 12.83-8.68 21.33-8.68 8.5-21.5 8.5Zm0 170Q137-280 128.5-288.67q-8.5-8.68-8.5-21.5 0-12.82 8.68-21.32 8.68-8.5 21.5-8.5 12.83 0 21.33 8.68 8.5 8.68 8.5 21.5 0 12.83-8.68 21.33-8.68 8.5-21.5 8.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrList;
