import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-hexagon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrHexagon {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M307-120q-16 0-29.79-7.87Q263.43-135.75 255-150L81-450q-8-14.33-8-30.16Q73-496 81-510l174-300q8.43-14.25 22.21-22.12T307-840h346q16 0 29.79 7.88Q696.57-824.25 705-810l174 300q8 14.33 8 30.16Q887-464 879-450L705-150q-8.43 14.25-22.21 22.13T653-120H307Zm-1-60h348l172-300-172-300H306L133-480l173 300Zm174-300Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrHexagon;
