import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-remove-selection",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrRemoveSelection {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M180-120q-24 0-42-18t-18-42h60v60Zm-60-148v-83h60v83h-60Zm0-171v-83h60v83h-60Zm0-170v-83h60v83h-60Zm0-171q0-24 18-42t42-18v60h-60Zm148 660v-60h83v60h-83Zm0-660v-60h83v60h-83Zm171 0v-60h83v60h-83Zm54 660-43-43 152-152-152-152 43-43 152 152 152-152 43 43-152 152 152 152-43 43-152-152-152 152Zm116-660v-60h83v60h-83Zm171 171v-83h60v83h-60Zm0-171v-60q24 0 42 18t18 42h-60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrRemoveSelection;
