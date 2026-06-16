import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-table-view",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssTableView {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M280-120v-560h560v560H280Zm60-394h440v-106H340v106Zm166 168h108v-108H506v108Zm0 166h108v-106H506v106ZM340-346h106v-108H340v108Zm334 0h106v-108H674v108ZM340-180h106v-106H340v106Zm334 0h106v-106H674v106ZM250-280H120v-560h560v130h-60v-70H180v440h70v60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssTableView;
