import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-domain-disabled",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrDomainDisabled {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m880-151-60-60v-404H416l-6-5v-160H252l-60-60h218q24.75 0 42.38 17.63T470-780v105h350q24.75 0 42.38 17.63T880-615v464Zm-740 31q-24.75 0-42.37-17.62T80-180v-601l-31-31q-8-8.07-8-20.53Q41-845 49.25-854q8.25-9 21-9T92-854L855-91q9 9 9 21t-9 21q-9 9-21 9t-21-9l-71-71H140Zm0-60h105v-105H140v105Zm0-165h105v-105H140v105Zm0-165h105v-105H140v105Zm165 330h105v-105H305v105Zm0-165h105v-105H305v105Zm165 165h211L576-285H470v105Zm245-270h-60v-60h60v60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrDomainDisabled;
