import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-add-to-drive",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoAddToDrive {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M721-120v-120H601v-80h120v-120h80v120h120v80H801v120h-80Zm-492 20q-22 0-40-11t-29-29L65-305q-11-19-11-40t11-40l251-435q11-20 29.5-30t40.5-10h189q22 0 40 10t29 30l178 309q-15-5-30.5-7t-31.5-2h-17.5q-9.5 0-17.5 1L574-780H386L134-345l95 165h313q11 23 25.5 43.5T602-100H229Zm61-180-30-51 184-319h72l101 175q-19 14-33 28t-25 33l-79-137-110 191h165q-8 19-11 38.5t-3 41.5H290Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoAddToDrive;
