import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-domain-add",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoDomainAdd {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M80-120v-720h390v165h410v340h-60v-280H470v105h80v60h-80v105h80v60h-80v105h195v60H80Zm60-60h105v-105H140v105Zm0-165h105v-105H140v105Zm0-165h105v-105H140v105Zm0-165h105v-105H140v105Zm165 495h105v-105H305v105Zm0-165h105v-105H305v105Zm0-165h105v-105H305v105Zm0-165h105v-105H305v105ZM813-40v-87h-88v-60h88v-88h60v88h87v60h-87v87h-60ZM655-450v-60h60v60h-60Zm0 165v-60h60v60h-60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoDomainAdd;
