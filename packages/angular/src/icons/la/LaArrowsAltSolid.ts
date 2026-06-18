import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-arrows-alt-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaArrowsAltSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 1.59 L 10.29 7.29 L 11.71 8.71 L 15 5.41 L 15 15 L 5.41 15 L 8.71 11.71 L 7.29 10.29 L 1.59 16 L 7.29 21.71 L 8.71 20.29 L 5.41 17 L 15 17 L 15 26.59 L 11.71 23.29 L 10.29 24.71 L 16 30.41 L 21.71 24.71 L 20.29 23.29 L 17 26.59 L 17 17 L 26.59 17 L 23.29 20.29 L 24.71 21.71 L 30.41 16 L 24.71 10.29 L 23.29 11.71 L 26.59 15 L 17 15 L 17 5.41 L 20.29 8.71 L 21.71 7.29 L 16 1.59 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaArrowsAltSolid;
