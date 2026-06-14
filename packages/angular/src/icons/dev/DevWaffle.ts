import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-waffle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevWaffle {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M398.3 431.2c-1-37.4-1.3-65.5-2-84.3l125.3-125.3L300 0 78.4 221.6 300 443.2l38-38c0 23.60.3 59.5-0.8 112-0.7 33.1-9.1 39.5-11.8 58-1.9 13.4 7.9 24.8 17.5 24.8s18.4-11.2 17.5-24.8c-1-13.2-8.4-24.6-9-57.3-1.3-61.5-1.5-100.4-2.5-123.7l37.7-37.6c0 18.10.1 42.9-0.8 74.2-0.6 20.5-8 24.4-10.3 35.9-1.7 8.3 6.9 15.4 15.4 15.4s16.1-7 15.3-15.4c-0.7-8.2-7.3-15.2-8-35.5m-27.4-259.9 29.6-29.6 29.6 29.6-29.6 29.6zm9 50.3-29.7 29.6-29.6-29.6 29.6-29.6zm-29.7-70.9-29.6-29.6 29.6-29.6 29.6 29.6zm-20.6 20.6L300 201l-29.6-29.6 29.6-29.6zm-79.8-20.6-29.6-29.6 29.6-29.6 29.6 29.6zM229 171.3 199.5 201 170 171.3l29.6-29.6zm20.7 20.7 29.6 29.6-29.6 29.6-29.6-29.6zM229 271.8l-29.6 29.6-29.6-29.6 29.6-29.6zm20.7 20.6 29.6 29.6-29.6 29.6-29.6-29.6zm20.6-20.6 29.6-29.6 29.6 29.6-29.6 29.6zm79.8 20.6 29.6 29.6-29.6 29.6-29.6-29.6zm20.7-20.6 29.6-29.6 29.6 29.6-29.6 29.6zm79.8-20.6L421 221.6l29.6-29.6 29.6 29.6zm-121-180.3L300 100.5l-29.6-29.6L300 41.3zm-180.3 121 29.6 29.7-29.6 29.6-29.6-29.6zm121.1 180.4 29.6-29.6 29.6 29.6-29.6 29.6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevWaffle;
