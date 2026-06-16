import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-resize",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoResize {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M120-439v-83h60v83h-60Zm0-170v-83h60v83h-60Zm0-171v-60h60v60h-60Zm148 0v-60h83v60h-83Zm171 660v-60h83v60h-83Zm0-660v-60h83v60h-83Zm170 660v-60h83v60h-83Zm171 0v-60h60v60h-60Zm0-148v-83h60v83h-60Zm0-171v-83h60v83h-60Zm0-170v-171H609v-60h231v231h-60ZM120-120v-231h60v171h171v60H120Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoResize;
