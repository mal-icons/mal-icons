import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-fulcrum",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaFulcrum {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 15 0 L 13.72 12.2 L 10.1 16 L 13.72 19.8 L 15 32 L 15 19 L 12 16 L 15 13 L 15 0 z M 17 0 L 17 13 L 20 16 L 17 19 L 17 32 L 18.28 19.8 L 21.9 16 L 18.28 12.2 L 17 0 z M 9.5 7 L 7 10 L 9.5 13 L 12 10 L 9.5 7 z M 22.5 7 L 20 10 L 22.5 13 L 25 10 L 22.5 7 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaFulcrum;
