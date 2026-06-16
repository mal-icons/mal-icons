import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-rounded-corner",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoRoundedCorner {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M780-120v-60h60v60h-60Zm0-148v-83h60v83h-60ZM120-438v-83h60v83h-60Zm0 170v-83h60v83h-60Zm0-341v-83h60v83h-60Zm0-171v-60h60v60h-60Zm148 0v-60h83v60h-83Zm342 660v-60h83v60h-83Zm-171 0v-60h83v60h-83Zm-171 0v-60h83v60h-83Zm-148 0v-60h60v60h-60Zm660-319v-191q0-64-43-107t-107-43H439v-60h191q88 0 149 61t61 149v191h-60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoRoundedCorner;
