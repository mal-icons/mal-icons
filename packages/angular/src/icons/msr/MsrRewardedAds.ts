import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-rewarded-ads",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrRewardedAds {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-517q37 0 62.5-25.5T568-605q0-37-25.5-62.5T480-693q-37 0-62.5 25.5T392-605q0 37 25.5 62.5T480-517Zm-30 337v-148q-54-11-96-46.5T296-463q-74-8-125-60t-51-125v-44q0-24.75 17.63-42.37T180-752h104v-28q0-24.75 17.63-42.37T344-840h272q24.75 0 42.38 17.63T676-780v28h104q24.75 0 42.38 17.63T840-692v44q0 73-51 125t-125 60q-16 53-58 88.5T510-328v148h122q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T632-120H328q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T328-180h122ZM284-526v-166H180v44q0 45 29.5 78.5T284-526Zm196.24 141Q537-385 576.5-424.96 616-464.92 616-522v-258H344v258q0 57.08 39.74 97.04Q423.47-385 480.24-385ZM676-526q45-10 74.5-43.5T780-648v-44H676v166Zm-196-57Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrRewardedAds;
