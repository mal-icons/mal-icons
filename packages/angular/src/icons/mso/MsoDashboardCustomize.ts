import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-dashboard-customize",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoDashboardCustomize {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M120-840h330v330H120v-330Zm60 59v188-188Zm330-59h330v330H510v-330Zm83 59v188-188ZM120-450h330v330H120v-330Zm60 81v189-189Zm465-81h60v135h135v60H705v135h-60v-135H510v-60h135v-135Zm-75-330v210h210v-210H570Zm-390 0v210h210v-210H180Zm0 390v210h210v-210H180Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoDashboardCustomize;
