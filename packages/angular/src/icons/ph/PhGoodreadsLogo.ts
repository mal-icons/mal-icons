import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ph-goodreads-logo",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class PhGoodreadsLogo {
  readonly viewBox = "0 0 256 256";
  readonly nodes: NodeTuple[] = [["path",{"d":"M184,24a8,8,0,0,0-8,8V45.74A64,64,0,0,0,64,88v24a64,64,0,0,0,112,42.26V168a48.05,48.05,0,0,1-48,48c-16.45,0-32.72-8.08-41.44-20.58a8,8,0,1,0-13.12,9.16C85.06,221.24,106.48,232,128,232a64.07,64.07,0,0,0,64-64V32A8,8,0,0,0,184,24ZM128,160a48.05,48.05,0,0,1-48-48V88a48,48,0,0,1,96,0v24A48.05,48.05,0,0,1,128,160Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default PhGoodreadsLogo;
