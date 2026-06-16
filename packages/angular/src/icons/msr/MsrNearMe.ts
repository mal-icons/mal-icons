import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-near-me",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrNearMe {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M413-413 137-520q-10-4-14.5-12t-4.5-17q0-9 4.5-16t14.5-11l641-241q9-4 17.5-1.5T810-810q6 6 8.5 14.5T817-778L576-137q-4 10-11 14.5t-16 4.5q-9 0-17-4.5T520-137L413-413Zm132 179 192-503-502 192 224 86 86 225Zm-86-225Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrNearMe;
