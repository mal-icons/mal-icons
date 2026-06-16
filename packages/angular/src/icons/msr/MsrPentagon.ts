import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-pentagon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrPentagon {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M283.6-180H676l133-397-329-229-329 229 132.6 397ZM283-120q-19.5 0-35.25-11.18T226-161L94-558q-6-19 0.11-37.85Q100.21-614.69 117-626l329-230q16-11 34-11t34 11l329 230q16.79 11.31 22.9 30.15Q872-577 866-558L734-161q-6 18.64-21.75 29.82Q696.5-120 677-120H283Zm197-373Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrPentagon;
