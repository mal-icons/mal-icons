import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-database",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiDatabase {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12,2.06c-3.53,0-6.18,1.23-6.18,2.86V19.08c0,1.63,2.65,2.86,6.18,2.86s6.18-1.23,6.18-2.86V4.92C18.18,3.29,15.52,2.06,12,2.06Zm5.18,17.02c0,0.78-1.97,1.86-5.18,1.86s-5.18-1.08-5.18-1.86V15.96A9.35,9.35,0,0,0,12,17.22a9.37,9.37,0,0,0,5.18-1.26Zm0-4.72c0,0.78-1.97,1.86-5.18,1.86s-5.18-1.08-5.18-1.86V11.24A9.35,9.35,0,0,0,12,12.5a9.37,9.37,0,0,0,5.18-1.26Zm0-4.72c0,0.78-1.97,1.86-5.18,1.86S6.82,10.42,6.82,9.64V6.52A9.35,9.35,0,0,0,12,7.78a9.37,9.37,0,0,0,5.18-1.26ZM12,6.78c-3.21,0-5.18-1.08-5.18-1.86S8.79,3.06,12,3.06s5.18,1.08,5.18,1.86S15.21,6.78,12,6.78Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiDatabase;
