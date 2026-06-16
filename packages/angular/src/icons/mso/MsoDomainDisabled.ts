import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-domain-disabled",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoDomainDisabled {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m880-151-60-60v-404H416l-6-5v-160H252l-60-60h278v165h410v524ZM834-28l-92-92H80v-661l-52-52 42-43L876-70l-42 42ZM140-180h105v-105H140v105Zm0-165h105v-105H140v105Zm0-165h105v-105H140v105Zm165 330h105v-105H305v105Zm0-165h105v-105H305v105Zm165 165h211L576-285H470v105Zm245-270h-60v-60h60v60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoDomainDisabled;
