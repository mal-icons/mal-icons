import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-local-activity",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrLocalActivity {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m480-399 66 52q9 7 18 0.5t6-17.5l-26-82 66-55q8-7 5-17t-14-10h-79l-28-81q-4-10-14-10t-14 10l-28 81h-79q-11 0-14 10t5 17l66 55-26 82q-3 11 6 17.5t18-0.5l66-52ZM140-160q-25 0-42.5-17.5T80-220v-132q0-10 5.5-17.5T100-380q31-11 48.5-39.5T166-480q0-31-17.5-60T100-580q-9-3-14.5-10.5T80-608v-132q0-25 17.5-42.5T140-800h680q25 0 42.5 17.5T880-740v132q0 10-5.5 17.5T860-580q-31 11-48.5 40T794-480q0 32 17.5 60.5T860-380q9 3 14.5 10.5T880-352v132q0 25-17.5 42.5T820-160H140Zm0-60h680v-109q-38-26-62-65t-24-86q0-47 24-86t62-65v-109H140v109q39 26 62.5 65t23.5 86q0 47-23.5 86T140-329v109Zm340-260Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrLocalActivity;
