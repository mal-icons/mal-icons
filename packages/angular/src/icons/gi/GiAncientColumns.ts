import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-ancient-columns",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiAncientColumns {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M57 39v16h110V39H57zm32 34v318h46V73H89zm334 21.56l-46 23.04V391h46V94.56zM254.2 187L233 197.6V391h46V211.7L254.2 187zM73 409v30h78v-30H73zm144 0v30h78v-30h-78zm144 0v30h78v-30h-78zM38.49 457l-10 30H483.5l-10-30H38.49z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiAncientColumns;
