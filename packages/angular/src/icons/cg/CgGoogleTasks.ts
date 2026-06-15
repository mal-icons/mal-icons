import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-google-tasks",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgGoogleTasks {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.77 5.71C17.48 4.87 18.74 4.76 19.59 5.47C20.43 6.18 20.54 7.44 19.83 8.29L10.83 19.01C10.12 19.86 8.86 19.97 8.02 19.26C7.17 18.55 7.06 17.29 7.77 16.44L16.77 5.71Z","fill":"currentColor"}],["path",{"d":"M3 12.74C3 11.64 3.9 10.74 5 10.74C6.1 10.74 7 11.64 7 12.74C7 13.84 6.1 14.74 5 14.74C3.9 14.74 3 13.84 3 12.74Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgGoogleTasks;
