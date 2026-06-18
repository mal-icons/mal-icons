import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-datastax",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiDatastax {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.86 8.82v6.36l-2.18 1.68H0v-9.73h8.68l2.18 1.68Zm-9.18 6.37h7.5V8.82H1.68v6.37Zm13.24-6.3v2.26h6.92L24 12.79v2.32l-2.15 1.65h-8.15v-1.65h8.65v-2.32h-6.92l-2.15-1.64v-2.26l2.15-1.64h7.94v1.65h-8.43Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiDatastax;
