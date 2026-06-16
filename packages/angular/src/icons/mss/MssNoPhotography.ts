import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-no-photography",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssNoPhotography {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m880-167-60-59v-467H353l-63-63 70-84h240l73 87h207v586ZM459-415Zm117-55ZM207-753l60 60H140v513h554L578-296q-20 14-45 22t-53 8q-73 0-121.5-49T310-436q0-28 8-53t22-45L26-848l43-43L876-84l-43 43-79-79H80v-633h127Zm439 353L444-602q43-7 84.5 3.5T601-557q31 31 42 72.5t3 84.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssNoPhotography;
