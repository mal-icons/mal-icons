import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ph-phosphor-logo",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class PhPhosphorLogo {
  readonly viewBox = "0 0 256 256";
  readonly nodes: NodeTuple[] = [["path",{"d":"M144,24H64a8,8,0,0,0-8,8V160a80.09,80.09,0,0,0,80,80,8,8,0,0,0,8-8V168a72,72,0,0,0,0-144ZM72,62.54,122.32,152H72Zm56,66.92L77.68,40H128ZM72.51,168H128v55.5A64.14,64.14,0,0,1,72.51,168ZM144,152V40a56,56,0,0,1,0,112Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default PhPhosphorLogo;
