import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-paragraph-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaParagraphSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 12 5 C 8.7 5 6 7.7 6 11 C 6 14.3 8.7 17 12 17 L 16 17 L 16 27 L 18 27 L 18 7 L 20 7 L 20 27 L 22 27 L 22 7 L 24 7 L 24 5 Z M 12 7 L 16 7 L 16 15 L 12 15 C 9.78 15 8 13.22 8 11 C 8 8.78 9.78 7 12 7 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaParagraphSolid;
