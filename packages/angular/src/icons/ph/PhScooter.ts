import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ph-scooter",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class PhScooter {
  readonly viewBox = "0 0 256 256";
  readonly nodes: NodeTuple[] = [["path",{"d":"M212,136c-1.18,0-2.350.06-3.510.17l-10.75-32.25v0L175.59,37.47A8,8,0,0,0,168,32H136a8,8,0,0,0,0,16h26.23l19,56.87L132.09,168H79.77a36,36,0,1,0-1.83,16H136a8,8,0,0,0,6.31-3.09l45-57.8,6,18.13A36,36,0,1,0,212,136ZM44,192a20,20,0,1,1,20-20A20,20,0,0,1,44,192Zm168,0a20,20,0,1,1,20-20A20,20,0,0,1,212,192Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default PhScooter;
