import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-photo-size-select-small",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoPhotoSizeSelectSmall {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M180-120q-24 0-42-18t-18-42v-342h402v402H180Zm429 0v-60h83v60h-83Zm171 0v-60h60q0 24-18 42t-42 18Zm-617-87h319L378-345l-77 98-56-71-82 111Zm617-61v-83h60v83h-60Zm0-171v-83h60v83h-60ZM120-609v-83h60v83h-60Zm660 0v-83h60v83h-60ZM120-780q0-24 18-42t42-18v60h-60Zm148 0v-60h83v60h-83Zm171 0v-60h83v60h-83Zm170 0v-60h83v60h-83Zm171 0v-60q24 0 42 18t18 42h-60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoPhotoSizeSelectSmall;
