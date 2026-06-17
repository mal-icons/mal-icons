import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-abstract-113",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiAbstract113 {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"m112.39,31.39-81,57.56 30.88,93.07 100.230.14 31.02-93.21-81.14-57.56zm287.22,0-81.14,57.56 30.88,93.07 100.230.14 31.02-93.21-81-57.56zm-193.73,58.26-30.88,93.21 81.14,57.56 81-57.7-31.02-93.07h-100.23zm-144.03,106.27-40.85,60.22 40.85,59.94h55.59 12.35 38.46l84.93-59.94-84.93-60.22h-38.46-12.35-55.59zm281.75,0-84.93,60.22 84.93,59.94h38.46 12.35 55.73l40.85-59.94-40.85-60.22h-55.73-12.35-38.46zm-87.46,75.67-81.14,57.56 30.88,93.21h100.23l31.02-93.07-81-57.7zm-93.63,58.26-100.230.14-30.88,93.07 81,57.56 81.14-57.56-31.02-93.21zm287.08,0-100.230.14-30.88,93.07 81.14,57.56 81-57.56-31.02-93.21z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiAbstract113;
