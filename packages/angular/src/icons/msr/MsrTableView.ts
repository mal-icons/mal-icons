import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-table-view",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrTableView {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M340-120q-24.75 0-42.37-17.62T280-180v-440q0-24.75 17.63-42.37T340-680h440q24.75 0 42.38 17.63T840-620v440q0 24.75-17.62 42.38T780-120H340Zm53-394h334q22 0 37.5-15.5T780-567q0-22-15.5-37.5T727-620H393q-22 0-37.5 15.5T340-567q0 22 15.5 37.5T393-514Zm113 168h108v-108H506v108Zm0 166h108v-106H506v106ZM340-346h106v-108H340v108Zm334 0h106v-108H674v108ZM340-180h106v-106H340v106Zm334 0h106v-106H674v106ZM180-280q-24.75 0-42.37-17.62T120-340v-440q0-24.75 17.63-42.37T180-840h440q24.75 0 42.38 17.63T680-780v70h-60v-70H180v440h70v60h-70Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrTableView;
