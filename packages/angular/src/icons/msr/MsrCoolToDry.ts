import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-cool-to-dry",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrCoolToDry {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M450-141q-121-11-205.5-100T160-455q0-66 25-122.5T254-678l205-201q5-5 10.13-7 5.13-2 11-2Q486-888 491-886q5 2 10 7l205 201q38 38 62 85t30 102h-59.83q-5.17-42-23.67-77T666-633L480-816 294-633q-36 36-55 80t-19 98q0 100 66.5 171T450-202.39V-141Zm29-368Zm218 154q-18-8-37.5-14t-39.5-6q-16 0-31.5 4T558-361q-10 4-20 1t-14-13q-5-9.67-0.5-19.33Q528-402 538-407q19.81-8 40.61-13t41.6-5q22.78 0 44.28 5.5T707-406q18 8 37.5 14t39.5 6q16 0 31.5-4t30.5-10q10-4 19.93-0.89Q875.86-397.78 880-388q5 10 0.5 19.5T866-354q-19.81 8-40.61 13t-41.6 5Q761-336 739.5-341.5T697-355Zm0 130q-18-8-37.5-14t-39.5-6q-16 0-31.5 4T558-231q-10 4-20 1t-14-13q-5-9.67-0.5-19.33Q528-272 538-277q19.81-8 40.61-13t41.6-5q22.78 0 44.28 5.5T707-276q18 8 37.5 14t39.5 6q16 0 31.5-4t30.5-10q10-4 19.93-0.89Q875.86-267.78 880-258q5 10 0.5 19.5T866-224q-19.81 8-40.61 13t-41.6 5Q761-206 739.5-211.5T697-225Zm0 130q-18-8-37.5-14t-39.5-6q-16 0-31.5 4T558-101q-10 4-19.930.63Q528.14-103.74 524-113q-5-9.67-0.5-19.33Q528-142 538-147q19.81-8 40.61-13t41.6-5q22.78 0 44.28 5.5T707-146q18 8 37.5 14t39.5 6q16 0 31.5-4t30.5-10q10-4 19.93-0.89Q875.86-137.78 880-128q5 10 0.5 19.5T866-94q-19.81 8-40.61 13t-41.6 5Q761-76 739.5-81.5T697-95Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrCoolToDry;
