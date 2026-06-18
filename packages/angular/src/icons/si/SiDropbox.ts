import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-dropbox",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiDropbox {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 1.81L0 5.63l6 3.82 6-3.82L6 1.81zM18 1.81l-6 3.82 6 3.82 6-3.82-6-3.82zM0 13.27l6 3.82 6-3.82L6 9.45l-6 3.82zM18 9.45l-6 3.82 6 3.82 6-3.82-6-3.82zM6 18.37l6 3.82 6-3.82-6-3.82L6 18.37z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiDropbox;
