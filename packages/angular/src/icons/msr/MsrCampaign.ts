import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-campaign",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrCampaign {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M760-450q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T760-510h90q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T850-450h-90Zm-4 272-73-54q-10-8-12-19.83T677-274q8-10 19.83-12T719-280l73 54q10 8 12 19.83T798-184q-8 10-19.83 12T756-178Zm-34-503q-10.35 8-22.17 6Q688-677 680-687t-6-22q2-12 12-20l70-53q10.35-8 22.17-6Q790-786 798-776t6 22q-2 12-12 20l-70 53ZM210-200v-160h-70q-24.75 0-42.37-17.62T80-420v-120q0-24.75 17.63-42.37T140-600h180l155-93q15-9 30-0.06T520-667v374q0 17.13-15 26.06T475-267l-155-93h-50v160h-60Zm90-280Zm260 134v-268q27 24 43.5 58.5T620-480q0 41-16.5 75.5T560-346Zm-100 0v-268l-124 74H140v120h196l124 74Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrCampaign;
