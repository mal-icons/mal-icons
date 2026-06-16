import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-developer-board",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrDeveloperBoard {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M150-120q-24 0-42-18t-18-42v-600q0-23 18-41.5t42-18.5h600q23 0 41.5 18.5T810-780v60.15h30q12.75 0 21.38 8.65T870-689.78q0 12.78-8.62 21.28Q852.75-660 840-660h-30v150h30.18q12.83 0 21.33 8.68 8.5 8.68 8.5 21.5 0 12.83-8.62 21.33T840-450h-30v150h30.18q12.83 0 21.33 8.68 8.5 8.68 8.5 21.5 0 12.83-8.62 21.42-8.62 8.6-21.37 8.6h-30V-180q0 24-18.5 42T750-120H150Zm0-60h600v-600H150v600Zm90-60h193q12.75 0 21.38-8.62T463-270v-140q0-12.75-8.62-21.37T433-440H240q-12.75 0-21.37 8.63T210-410v140q0 12.75 8.63 21.38T240-240Zm283-336h137q12.75 0 21.38-8.62T690-606v-84q0-12.75-8.62-21.37T660-720H523q-12.75 0-21.37 8.63T493-690v84q0 12.75 8.63 21.38T523-576ZM240-470h193q12.75 0 21.38-8.62T463-500v-190q0-12.75-8.62-21.37T433-720H240q-12.75 0-21.37 8.63T210-690v190q0 12.75 8.63 21.38T240-470Zm283 230h137q12.75 0 21.38-8.62T690-270v-246q0-12.75-8.62-21.37T660-546H523q-12.75 0-21.37 8.63T493-516v246q0 12.75 8.63 21.38T523-240ZM150-780v600-600Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrDeveloperBoard;
