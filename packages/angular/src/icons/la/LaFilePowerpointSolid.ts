import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-file-powerpoint-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaFilePowerpointSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 6 3 L 6 29 L 26 29 L 26 9.6 L 25.7 9.3 L 19.7 3.3 L 19.4 3 L 6 3 z M 8 5 L 18 5 L 18 11 L 24 11 L 24 27 L 8 27 L 8 5 z M 20 6.4 L 22.6 9 L 20 9 L 20 6.4 z M 13 13 L 13 15 L 17 15 C 18.2 15 19 15.8 19 17 C 19 18.2 18.2 19 17 19 C 15.8 19 15 18.2 15 17 L 13 17 L 13 24 L 15 24 L 15 20.4 C 15.6 20.8 16.3 21 17 21 C 19.2 21 21 19.2 21 17 C 21 14.8 19.2 13 17 13 L 13 13 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaFilePowerpointSolid;
