import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-pip-exit",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrPipExit {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M140-160q-24 0-42-18t-18-42v-270q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T140-490v270h680v-520H470q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T470-800h350q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm407-290 129 129q9 9 21 9t21-9.05q9-9.05 9-21.5Q727-355 718-364L589-493h88q12.75 0 21.38-8.68 8.63-8.68 8.63-21.5 0-12.82-8.62-21.32T677-553H517q-12.75 0-21.37 8.63T487-523v160q0 12.75 8.68 21.38 8.68 8.63 21.5 8.63 12.83 0 21.33-8.62T547-363v-87ZM110-580q-12.75 0-21.37-8.62T80-610v-160q0-12.75 8.63-21.37T110-800h240q12.75 0 21.38 8.63T380-770v160q0 12.75-8.62 21.38T350-580H110Zm370 100Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrPipExit;
